import React, { useRef } from "react";
import Styles from "./styles.module.scss";
import Inputqa from "../../components/common/Inputqa";
import Button from "../../components/common/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faVideo,
  faImage,
  faSmile,
  faFile,
  faCalendar,
} from "@fortawesome/free-solid-svg-icons";
import { FaMoneyBillWave } from "react-icons/fa";
import { useState, useEffect } from "react";
import axios from "axios";
import { AxiosResponse } from "axios";
import MediaSelector from "../MediaSelector";

import { useAuth } from "../../hooks/form/useAuth";

function CreatePost({ variant = "primary", setPosts }) {
  const [postText, setPostText] = useState<string>("");
  const [selectedMedia, setSelectedMedia] = useState<[any]>();
  const [mediaPickerVisible, setMediaPickerVisible] = useState<boolean>(false);
  const [reload, setReload] = useState(0);
  const v3API = "https://api.us.amity.co/api/v3";

  const { store } = useAuth(null);
  const { xAPIKey, session } = store;

  const updatePostText = (name: string): void => {
    setPostText(name);
  };

  console.log("setPosts");
  console.log(setPosts);

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
        targetId: session["users"][0]["userId"],
        metadata: {},
        postId: now + session["users"][0]["userId"],
        tags: ["string"],
        createdAt: now.toJSON(),
      };

      const response3 = await axios.post<string>(v3API + "/posts", requestData);
      console.log("Media Post result: ");
      console.log(response3);

      console.log("Posts");

      setReload((prevCount) => prevCount + 1);
      // window.location.reload();
    })();
  };

  const createTextPost = () => {
    console.log("Post btn clicked");
    console.log(postText);

    (async () => {
      const response3 = await createPost();
      console.log(response3);
      // window.location.reload();
      setReload((prevCount) => prevCount + 1);
    })();
  };

  const createPost = async (): Promise<string> => {
    try {
      axios.defaults.headers["x-api-key"] = xAPIKey;
      axios.defaults.headers["Authorization"] =
        "Bearer " + session["accessToken"];
      const now = new Date();
      const requestData = {
        data: {
          text: postText,
        },
        dataType: "upstra.customtype",
        targetType: "user",
        targetId: session["users"][0]["userId"],
        metadata: {},
        postId: now + session["users"][0]["userId"],
        tags: ["string"],
        createdAt: now.toJSON(),
      };

      const response = await axios.post<any>(v3API + "/posts", requestData);
      console.log("createPost response");
      console.log(response);
      return response.data;
      // return "";
    } catch (err) {
      console.log(err);
      return "";
    }
  };

  return (
    <>
      <div className={`${Styles.userCreatePost} ${Styles[variant]}`}>
        <Inputqa
          placeholder="Who Would you like to recognize?"
          updatePostText={updatePostText}
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
