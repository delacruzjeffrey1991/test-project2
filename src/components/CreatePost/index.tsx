import React, { useRef } from "react";
import {
  faCalendar,
  faClose,
  faFile,
  faImage,
  faSmile,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

import { AxiosResponse } from "axios";
import Button from "../../components/common/Button";
import { FaMoneyBillWave } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Inputqa from "../../components/common/Inputqa";
import MediaSelector from "../MediaSelector";
import Popup from "reactjs-popup";
import Styles from "./styles.module.scss";
import axios from "axios";
import { postMentioneesType } from "src/types/createPost";
import { useAuth } from "../../hooks/form/useAuth";

function CreatePost({ variant = "primary", setPosts, fetchPosts }) {
  const [postText, setPostText] = useState<string>("");
  const [selectedMedia, setSelectedMedia] = useState<[any]>();
  const [mediaPickerVisible, setMediaPickerVisible] = useState<boolean>(false);
  const [userPickerVisible, setUserPickerVisible] = useState<boolean>(false);
  const [users, setUsers] = useState<{}>({});
  const [postMentionees, setPostMentionees] = useState<string[]>([]);
  const v3API = "https://api.us.amity.co/api/v3";

  const { store } = useAuth(null);
  const { xAPIKey, session } = store;

  const closeUserPicker = () => setUserPickerVisible(false);

  const getUsers = async () => {
    const usersRes = await axios.get(
      `${v3API}/users?token=${session["accessToken"]}`,
      {
        headers: {
          "x-api-key": xAPIKey,
          Authorization: "Bearer " + session["accessToken"],
        },
      }
    );
    console.log("users: ");
    console.log(usersRes);
    setUsers(() => usersRes.data.users);
  };

  const handleAtPress = (event: any): void => {
    console.log(event.key);
    const { value } = event.target;
    if (value.slice(-1) == "@") {
      console.log("@ press detected!");
      setUserPickerVisible(() => true);
    } else {
      setUserPickerVisible(() => false);
    }
  };

  const handleRemoveMentionedUser = (rUserId: any) => {
    console.log("removing " + rUserId);
    const prevPostMentionees = postMentionees;
    const nextPostMentionees = prevPostMentionees.filter(
      (userId) => userId !== rUserId
    );
    // set the new post mentionees that had the userId removed
    setPostMentionees(() => nextPostMentionees);

    const prevPostText = postText;
    const nextPostText = prevPostText.replace("@" + rUserId, "");
    // remove the mention word from the comment text
    setPostText(() => nextPostText);
  };

  const handleMentionUser = (event: any) => {
    const { name } = event.target;
    setPostText((prevPostText) => {
      return `${prevPostText}${name}`;
    });
    setUserPickerVisible(false);
    setPostMentionees((prevPostMentionees) => {
      return [...prevPostMentionees, name];
    });
  };

  useEffect(() => {
    // fetch users
    if (Object.keys(users).length === 0) {
      getUsers();
    }
  }, [userPickerVisible]);

  const addNewPost = (data: any): void => {
    setPosts((prevPosts) => {
      console.log("prevPosts");
      console.log(prevPosts);
      console.log("newPost");
      return {
        ...prevPosts,
        [prevPosts.length]: { ...data },
      };
    });
  };

  const updatePostText = (newPostText: string): void => {
    setPostText(newPostText);
  };

  const handleAttachMedia = (event) => {
    event.preventDefault();

    console.log("Attach image/video btn clicked");
    setMediaPickerVisible((prevVal) => !prevVal);
  };

  const handleAttachedMediaChange = (event) => {
    setSelectedMedia([event.target.files[0]]);
  };

  console.log("Selected Media: ");
  console.log(selectedMedia);
  console.log(typeof selectedMedia);

  const uploadAttachedMedia = async (): Promise<AxiosResponse<any, any>> => {
    try {
      axios.defaults.headers["x-api-key"] = xAPIKey;
      axios.defaults.headers["Authorization"] =
        "Bearer " + session["accessToken"];

      const formData = new FormData();
      formData.append("file", selectedMedia[0]);
      const response3 = await axios.post<AxiosResponse<any, any>>(
        v3API + "/files",
        formData,
        {
          headers: {
            "content-type": "multipart/form-data",
          },
        }
      );

      return response3.data;
    } catch (err) {
      console.log(err);
      return err;
    }
  };

  const createMediaPost = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    console.log("Media Post btn clicked");
    console.log(selectedMedia);
    console.log(postText);

    (async () => {
      const fileUploadResult = await uploadAttachedMedia();
      console.log("Media upload response");
      console.log(fileUploadResult);

      const now = new Date();
      const requestData = {
        data: {
          text: postText,
          images: [fileUploadResult[0].fileId],
        },
        dataType: "upstra.customtype",
        targetType: "user",
        metadata: {},
        tags: ["string"],
        createdAt: now.toJSON(),
      };

      const response3 = await axios.post<string>(v3API + "/posts", requestData);
      console.log("Media Post result: ");
      console.log(response3);

      console.log("Posts");

      fetchPosts();
    })();
  };

  const createTextPost = () => {
    console.log("Post btn clicked");
    console.log(postText);

    (async () => {
      const response3 = await createPost();
      console.log("successful createPost response:");
      console.log(response3);
      resetPost();
      fetchPosts();
    })();
  };

  const resetPost = () => {
    setPostText(() => "");
    setPostMentionees(() => []);
  };

  const createPost = async (): Promise<string> => {
    try {
      const now = new Date();
      const response = await axios.post<any>(
        v3API + "/posts",
        {
          data: {
            text: postText,
          },
          dataType: "upstra.customtype",
          targetType: "user",
          tags: ["string"],
          createdAt: now.toJSON(),
          metadata: {
            mentionees: [
              {
                type: "user",
                userIds: postMentionees,
              },
            ],
          },
        },
        {
          headers: {
            "x-api-key": xAPIKey,
            Authorization: "Bearer " + session["accessToken"],
          },
        }
      );
      console.log("createPost response");
      console.log(response);
      return response.data.posts[0];
    } catch (err) {
      console.log(err);
      return "";
    }
  };

  return (
    <>
      <div className={`${Styles.userCreatePost} ${Styles[variant]}`}>
        {Object.values(postMentionees).map((userId: string) => (
          <div className="badge text-bg-secondary">
            <span>{userId}</span>
            <Button
              variant="transparent"
              color="whiteColor"
              icon={<FontAwesomeIcon icon={faClose} />}
              size="sizeAuto"
              onClick={() => handleRemoveMentionedUser(userId)}
            />
          </div>
        ))}
        <Popup open={userPickerVisible} arrow={false} closeOnDocumentClick>
          <div className="list-group">
            <>
              {Object.keys(users).length !== 0 && (
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Select user:</h5>
                    <div className="list-group">
                      {Object.values(users).map((u) => {
                        return (
                          <button
                            type="button"
                            className="list-group-item list-group-item-action btn-secondary"
                            name={u["displayName"]}
                            onClick={handleMentionUser}
                            disabled={postMentionees.includes(u["userId"])}
                          >
                            {u["displayName"]}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}
              {Object.keys(users).length === 0 && (
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Loading users...</h5>
                  </div>
                </div>
              )}
            </>
          </div>
        </Popup>
        <Inputqa
          value={postText}
          placeholder="Who would you like to recognize?"
          updatePostText={updatePostText}
          handleKeyUp={handleAtPress}
        />
        {mediaPickerVisible && (
          <MediaSelector
            handleAttachedMediaChange={handleAttachedMediaChange}
          />
        )}

        <div className={Styles.createpostBtnsMain}>
          <div className={Styles.createpostBtns}>
            <Button
              label="Reward"
              variant="transparent"
              color="whiteColor"
              icon={<FaMoneyBillWave />}
              size="sizeAuto"
            />
            <Button
              label="Live Video"
              variant="transparent"
              color="whiteColor"
              icon={<FontAwesomeIcon icon={faVideo} />}
              size="sizeAuto"
            />
            <Button
              label="Photo/Video"
              variant="transparent"
              color="whiteColor"
              icon={<FontAwesomeIcon icon={faImage} />}
              size="sizeAuto"
              onClick={handleAttachMedia}
            />
            <Button
              label="Kudos"
              variant="transparent"
              color="whiteColor"
              icon={<FontAwesomeIcon icon={faSmile} />}
              size="sizeAuto"
            />
            <Button
              label="Gif"
              variant="transparent"
              color="whiteColor"
              icon={<FontAwesomeIcon icon={faFile} />}
              size="sizeAuto"
            />
            <Button
              label="Event"
              variant="transparent"
              color="whiteColor"
              icon={<FontAwesomeIcon icon={faCalendar} />}
              size="sizeAuto"
            />
          </div>
          <Button
            onClick={mediaPickerVisible ? createMediaPost : createTextPost}
            label="Post"
            variant="white"
            color="black"
            size="smallBtn"
          />
        </div>
      </div>
    </>
  );
}

export default CreatePost;
