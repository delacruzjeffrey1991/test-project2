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

function CreatePost({ variant = "primary" }) {
  const [postText, setPostText] = useState<string>("");
  const [selectedMedia, setSelectedMedia] = useState<[any]>();
  const [mediaPickerVisible, setMediaPickerVisible] = useState<boolean>(false);

  const v3API = "https://api.us.amity.co/api/v3";

  const updatePostText = (name: string): void => {
    setPostText(name);
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

  async function uploadAttachedMedia(
    accessToken: string
  ): Promise<AxiosResponse<any, any>> {
    try {
      axios.defaults.headers["x-api-key"] =
        "b0efed533f8df46c18628b1c515e43dd835fd8e6bc366b2c";
      axios.defaults.headers["Authorization"] = "Bearer " + accessToken;

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
  }

  const createMediaPost = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    console.log("Media Post btn clicked");
    console.log(selectedMedia);
    console.log(postText);

    (async () => {
      const response = await getToken();
      console.log(response);

      const response2 = await getSession(response);
      console.log(response2);

      // upload media and get the url
      const fileUploadResult = await uploadAttachedMedia(response2.accessToken);
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
        targetId: "jeffrey-test2",
        metadata: {},
        postId: now + "jeffrey-test2",
        tags: ["string"],
        createdAt: now.toJSON(),
      };

      const response3 = await axios.post<string>(v3API + "/posts", requestData);
      console.log("Media Post result: ");
      console.log(response3);

      window.location.reload();
    })();
  };

  const createTextPost = () => {
    console.log("Post btn clicked");
    console.log(postText);

    (async () => {
      const response = await getToken();
      console.log(response);

      const response2 = await getSession(response);
      console.log(response2.accessToken);

      const response3 = await createPost(response2.accessToken);
      console.log(response3);
      window.location.reload();
    })();
  };

  async function createPost(accessToken: string): Promise<string> {
    try {
      axios.defaults.headers["x-api-key"] =
        "b0efed533f8df46c18628b1c515e43dd835fd8e6bc366b2c";
      axios.defaults.headers["Authorization"] = "Bearer " + accessToken;
      const now = new Date();
      const requestData = {
        data: {
          text: postText,
        },
        dataType: "upstra.customtype",
        targetType: "user",
        targetId: "jeffrey-test2",
        metadata: {},
        postId: now + "jeffrey-test2",
        tags: ["string"],
        createdAt: now.toJSON(),
      };

      const response = await axios.post<string>(v3API + "/posts", requestData);
      return response.data;
    } catch (err) {
      return "";
    }
  }

  async function getToken(): Promise<string> {
    try {
      const url =
        "https://api.us.amity.co/api/v3/authentication/token?userId=jeffrey-test2";
      axios.defaults.headers["x-server-key"] =
        "138fbb2f22e5af367025ee9d6ff02c0d903fd74f560f87b71119197aa125645cd01015cd7b7236193b8fcc7a42a114864a399cd85b55dd2c88d6447055";
      const response = await axios.get<string>(url);
      return response.data;
    } catch (err) {
      return "";
    }
  }

  async function getSession(token: string): Promise<AxiosResponse<any, any>> {
    try {
      const url = "https://api.us.amity.co/api/v3/sessions";
      axios.defaults.headers["x-api-key"] =
        "b0efed533f8df46c18628b1c515e43dd835fd8e6bc366b2c";
      const requestData = {
        userId: "jeffrey-test2",
        deviceId: "jeffrey-test2",

        displayName: "jeffrey-test2",
        authToken: token,
      };

      const response = await axios.post<AxiosResponse<any, any>>(
        url,
        requestData
      );
      return response.data;
    } catch (err) {
      return "";
    }
  }

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
