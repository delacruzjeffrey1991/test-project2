import React, { useEffect } from "react";
import { useState } from "react";
import Styles from "./styles.module.scss";
import IconButton from "../../components/common/IconButton";
import Button from "../../components/common/Button";
import Input from "../../components/common/Inputqa";
import axios from "axios";

import { AxiosResponse } from "axios";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEllipsisV,
  faMoneyBill,
  faComment,
  faShare,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";
import { FaRegPaperPlane } from "react-icons/fa";

function Posts({ ...props }) {
  const [commentText, setCommentText] = useState<string>("");
  const [liked, setLiked] = useState<boolean>(false);
  const [comments, setComments] = useState<[]>([]);
  const [reactions, setReactions] = useState<{}>({});

  const v3API = "https://api.us.amity.co/api/v3";
  const v2API = "https://api.us.amity.co/api/v2";

  useEffect(() => {
    getPostComments();
    getPostReactions();
  }, []);

  console.log("comments");
  console.log(comments);
  console.log("reactions");
  console.log(reactions);

  const addPostComment = (event: React.MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault();

    console.log("btn: send comment clicked!");
    console.log("comment: " + commentText);

    (async () => {
      const tokenResponse = await getToken();
      console.log(`token: ${tokenResponse}`);

      const sessionResponse = await getSession(tokenResponse);
      console.log(`accessToken: ${sessionResponse.accessToken}`);
      console.log("session");
      console.log(sessionResponse);

      const commentResponse = await createPostComment(
        sessionResponse.accessToken
      );
      getPostComments();
    })();
  };

  async function getPostComments(): Promise<any> {
    const tokenResponse = await getToken();
    const sessionResponse = await getSession(tokenResponse);
    try {
      const url = `${v3API}/comments`;
      axios.defaults.headers["x-api-key"] =
        "b0efed533f8df46c18628b1c515e43dd835fd8e6bc366b2c";
      axios.defaults.headers["Authorization"] =
        "Bearer " + sessionResponse.accessToken;
      const response2 = await axios.get<any>(url + `?referenceId=${props.id}`);
      console.log(response2);
      // return response2.data.comments;
      setComments(response2.data.comments);
    } catch (err) {
      console.log(err);
      return "";
    }
  }

  async function createPostComment(accessToken: string): Promise<void> {
    const url = `${v3API}/comments`;
    axios.defaults.headers["x-api-key"] =
      "b0efed533f8df46c18628b1c515e43dd835fd8e6bc366b2c";
    axios.defaults.headers["Authorization"] = "Bearer " + accessToken;
    const now = new Date();
    const response = await axios.post<AxiosResponse<any, any>>(url, {
      referenceType: "content",
      referenceId: props.id,
      data: {
        text: commentText,
      },
      metadata: {},
      createdAt: now.toJSON(),
    });
    console.log("response: ");
    console.log(response);
    getPostComments(props.id);
  }

  async function likePost(): Promise<any> {
    const tokenResponse = await getToken();
    const sessionResponse = await getSession(tokenResponse);
    const url = `${v2API}/reactions`;
    axios.defaults.headers["x-api-key"] =
      "b0efed533f8df46c18628b1c515e43dd835fd8e6bc366b2c";
    axios.defaults.headers["Authorization"] =
      "Bearer " + sessionResponse.accessToken;

    try {
      const response = await axios.post<AxiosResponse<any, any>>(url, {
        referenceType: "post",
        referenceId: props.id,
        reactionName: "like",
      });

      console.log("like response: ");
      console.log(response);

      setLiked(() => true);

      return response.data;
    } catch (err) {
      console.log(err);
      return "";
    }
  }

  async function getPostReactions(): Promise<any> {
    const tokenResponse = await getToken();
    const sessionResponse = await getSession(tokenResponse);
    const url = `${v2API}/reactions`;
    axios.defaults.headers["x-api-key"] =
      "b0efed533f8df46c18628b1c515e43dd835fd8e6bc366b2c";
    axios.defaults.headers["Authorization"] =
      "Bearer " + sessionResponse.accessToken;

    try {
      const response = await axios.get<AxiosResponse<any, any>>(
        url + `?referenceType=post&referenceId=${props.id}`
      );

      console.log("postReactions response:");
      console.log(response);

      setReactions(() => response.data.results.reactions);

      return response.data;
    } catch (err) {
      console.log(err);
      return "";
    }
  }

  async function getToken(): Promise<string> {
    try {
      const url = `${v3API}/authentication/token?userId=jeffrey-test2`;
      axios.defaults.headers["x-server-key"] =
        "138fbb2f22e5af367025ee9d6ff02c0d903fd74f560f87b71119197aa125645cd01015cd7b7236193b8fcc7a42a114864a399cd85b55dd2c88d6447055";
      const response = await axios.get<string>(url);
      return response.data;
    } catch (err) {
      return "";
    }
  }

  async function getSession(token: string): Promise<AxiosResponse<any, any>> {
    //try {
    const url = `${v3API}/sessions`;
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

    //} catch (err) {
    //    return '';
    //}
  }
  //api.us.amity.co/api/v2

  https: return (
    <div className={Styles.postsMain}>
      <div className={Styles.postshead}>
        <div className={Styles.postOwner}>
          <div className={Styles.userImg}>
            <img
              src={props.postOwnerImg}
              alt="profile"
              className={Styles.FullImg}
            />
          </div>
          <div>
            <h4> {props.postOwner} </h4>
            <p> {props.postTime} </p>
          </div>
        </div>
        <IconButton icon={<FontAwesomeIcon icon={faEllipsisV} />} />
      </div>

      {props.postText ? (
        <div>
          <p className={Styles.postText}>{props.postText}</p>
        </div>
      ) : (
        ""
      )}

      {props.postImg ? (
        <div className={Styles.postImg}>
          <img src={props.postImg} alt="Post" className={Styles.FullImg} />
        </div>
      ) : (
        ""
      )}

      {props.lessonNumber ? (
        <div className={`${Styles.LessonDetails} ${Styles.dflexSpaceBt}`}>
          <div>
            <h3> Lesson {props.lessonNumber} </h3>
            <h2> {props.lessonName} </h2>
            <p>
              {" "}
              Part {props.partNumber} : {props.partName}{" "}
            </p>
          </div>
          {props.lessonNextBtn ? (
            <div>
              <Button
                label={props.lessonNextBtn}
                variant="transparent"
                color="gray"
                icon={<FontAwesomeIcon icon={props.lessonNextBtnIcon} />}
              />
            </div>
          ) : (
            ""
          )}
        </div>
      ) : (
        ""
      )}

      <div className={`${Styles.reactedUsers} ${Styles.dflexSpaceBt}`}>
        <div className={Styles.allreacteduserImgs}>
          {Array.isArray(reactions) &&
            reactions.map((r) => (
              <div className={Styles.reacteduserImgs}>
                <img
                  src={props.reactedUserImg}
                  alt="user"
                  className={Styles.FullImg}
                />
              </div>
            ))}
          {/* <div className={Styles.reacteduserImgs}>
            <img src={props.reactedUserImg} alt='user' className={Styles.FullImg} />
          </div>
          <div className={Styles.reacteduserImgs}>
            <img src={props.reactedUserImg} alt='user' className={Styles.FullImg} />
          </div>
          <div className={Styles.reacteduserImgs}>
            <img src={props.reactedUserImg} alt='user' className={Styles.FullImg} />
          </div> */}
        </div>
        <div className={Styles.postCount}>
          <span> {Array.isArray(comments) && comments.length} Comments </span>
          <span className={Styles.shareText}> {props.shareCount} Share </span>
        </div>
      </div>

      <div className={`${Styles.dflexSpaceBt} ${Styles.postActionBtns}`}>
        <Button
          label="Like"
          variant="transparent"
          color="darkGrayColor"
          icon={
            <FontAwesomeIcon icon={liked == false ? faMoneyBill : faThumbsUp} />
          }
          onClick={likePost}
        />
        <Button
          label="Comments"
          variant="transparent"
          color="darkGrayColor"
          icon={<FontAwesomeIcon icon={faComment} />}
        />
        <Button
          label="Share"
          variant="transparent"
          color="darkGrayColor"
          icon={<FontAwesomeIcon icon={faShare} />}
        />
      </div>

      {/* {Object.keys(comments).length != 0 && console.log("comments are not empty")} */}
      {Array.isArray(comments) &&
        comments.map((c) => (
          <div className={Styles.comments}>
            <div className={Styles.postshead}>
              <div className={Styles.commentOwner}>
                <div className={Styles.commentUserImg}>
                  <img
                    src={props.currentUserImg}
                    alt="CurrentUser"
                    className={Styles.FullImg}
                  />
                </div>
                <div>
                  <h5> {props.postOwner} </h5>

                  <p className={Styles.comment}>{c.data.text}</p>
                </div>
              </div>
            </div>
          </div>
        ))}

      <div className={`${Styles.postCommentBox} ${Styles.dflexSpaceBt}`}>
        <div className={Styles.commentUserImg}>
          <img
            src={props.currentUserImg}
            alt="CurrentUser"
            className={Styles.FullImg}
          />
        </div>
        <div className={Styles.commentInp}>
          <Input
            placeholder="Write a comment"
            variant="offWhite"
            updatePostText={(comment: string) => setCommentText(() => comment)}
          />
        </div>
        <IconButton
          variant="primary"
          icon={<FaRegPaperPlane />}
          onClick={addPostComment}
        />
      </div>
    </div>
  );
}

export default Posts;
