import React, { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
import {
  faComment,
  faEllipsisV,
  faMoneyBill,
  faShare,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";

import Button from "../../components/common/Button";
import { FaRegPaperPlane } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import IconButton from "../../components/common/IconButton";
import Input from "../../components/common/Inputqa";
import Styles from "./styles.module.scss";
import { useAuth } from "../../hooks/form/useAuth";

function Posts({ ...props }) {
  const [commentText, setCommentText] = useState<string>("");
  const [liked, setLiked] = useState<boolean>(false);
  const [comments, setComments] = useState<[]>([]);
  const [reactions, setReactions] = useState<{}>({});
  const [postImg, setPostImg] = useState<string>("");
  const [postInfo, setPostInfo] = useState<{}>({});
  const [adminImg, setAdminImg] = useState();
  const [userInformation, setUserInformation] = useState<{}>({});

  const { store } = useAuth(null);
  const { accessToken, xAPIKey, session } = store;

  console.log("Global Auth Store: ");
  console.log(store);

  const v3API = "https://api.us.amity.co/api/v3";
  const v2API = "https://api.us.amity.co/api/v2";

  useEffect(() => {
    props.postImgId && getPostImage();
    getPostComments();
    getPostReactions();
    getPostDetails();
  }, []);

  console.log("post id");
  console.log(props.id);
  console.log("comments");
  console.log(comments);
  console.log("reactions");
  console.log(reactions);
  console.log("post img id: ");
  console.log(props.postImgId);
  console.log("post details");
  console.log(postInfo);

  const getPostDetails = async (): Promise<any> => {
    console.log("fetch post details");
    try {
      const url = `${v3API}/posts/${props.id}`;
      const config = {
        headers: {
          "x-api-key": xAPIKey,
          Authorization: "Bearer " + session["accessToken"],
        },
      };
      const response = await axios.get<any>(url, config);
      console.log("Post " + props.id + " information");
      console.log(response);
      setPostInfo(() => response["data"]["posts"][0]);
    } catch (err) {}
  };

  const getPostImage = async (): Promise<any> => {
    console.log("fetching post image url");
    try {
      const url = `${v3API}/files/${props.postImgId}/download`;
      const config = {
        headers: {
          "x-api-key": xAPIKey,
          Authorization: "Bearer " + session["accessToken"],
          "Content-Type": "image/png",
        },
        responseType: "blob",
      };
      const response = await axios.get<string>(
        url +
          `?fileId=${props.postImgId}&size=full&t=${session["accessToken"]}`,
        config
      );
      console.log("getPostImage response: ");
      console.log(response);

      setPostImg(response.data);
    } catch (err) {
      console.log(err);
      return "";
    }
  };

  const addPostComment = (event: React.MouseEvent<HTMLButtonElement>): void => {
    console.log("btn: send comment clicked!");
    console.log("comment: " + commentText);

    (async () => {
      const commentResponse = await createPostComment();
      setCommentText(() => "");
      await getPostComments();
    })();
  };

  const getPostComments = async (): Promise<any> => {
    try {
      const url = `${v3API}/comments`;
      const config = {
        headers: {
          "x-api-key": xAPIKey,
          Authorization: "Bearer " + session["accessToken"],
        },
        params: {
          referenceId: props.id,
        },
      };
      const response = await axios.get<any>(url, config);
      setComments(() => response.data.comments);
    } catch (err) {
      console.log(err);
      return "";
    }
  };

  const createPostComment = async (): Promise<void> => {
    const url = `${v3API}/comments`;
    const config = {
      headers: {
        "x-api-key": xAPIKey,
        Authorization: "Bearer " + session["accessToken"],
      },
    };
    const now = new Date();
    const requestData = {
      referenceType: "content",
      referenceId: props.id,
      data: {
        text: commentText,
      },
      metadata: {},
      createdAt: now.toJSON().toString(),
    };

    const response = await axios.post<AxiosResponse<any, any>>(
      url,
      requestData,
      config
    );
    getPostComments();
  };

  const likePost = async (): Promise<any> => {
    const url = `${v2API}/reactions`;
    const config = {
      headers: {
        "x-api-key": xAPIKey,
        Authorization: "Bearer " + session["accessToken"],
      },
    };

    try {
      const response = await axios.post<AxiosResponse<any, any>>(
        url,
        {
          referenceType: "post",
          referenceId: props.postId,
          reactionName: "like",
        },
        config
      );

      console.log("like response: ");
      console.log(response);

      setLiked(() => true);
      await getPostReactions();

      return response.data;
    } catch (err) {
      console.log(err);
      return "";
    }
  };

  const getPostReactions = async (): Promise<any> => {
    try {
      const url = `${v2API}/reactions`;
      const config = {
        headers: {
          "x-api-key": xAPIKey,
          Authorization: "Bearer " + session["accessToken"],
        },
      };

      const response = await axios.get<AxiosResponse<any, any>>(
        url + `?referenceType=post&referenceId=${props.id}`,
        config
      );

      console.log("getPostReactions response");
      console.log(response);
      const reactors = response.data["results"].reactions[0].reactors;
      setReactions(() => reactors);

      // determine if a reactor in the post is the current logged in user in session
      reactors.forEach((currentReactor) => {
        console.log("reactor: ");
        console.log(currentReactor);
        if (currentReactor.userId === session["users"][0]["userId"]) {
          setLiked(() => true);
        }
      });

      return response.data;
    } catch (err) {
      console.log(err);
      return "";
    }
  };

  return (
    <div className={Styles.postsMain}>
      <div className={Styles.postshead}>
        <div className={Styles.postOwner}>
          <div className={Styles.userImg}>
            <img
              src={
                session["users"][0]["avatarCustomUrl"]
                  ? session["users"][0]["avatarCustomUrl"]
                  : props.postOwnerImg
              }
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

      {postImg ? (
        <div className={Styles.postImg}>
          <img
            src={URL.createObjectURL(postImg)}
            alt="Post"
            className={Styles.FullImg}
          />
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
                  src={
                    r.userId === session["users"][0]["userId"]
                      ? session["users"][0]["avatarCustomUrl"]
                      : props.reactedUserImg
                  }
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
                    src={
                      c["userId"] === session["users"][0]["userId"]
                        ? session["users"][0]["avatarCustomUrl"]
                        : props.currentUserImg
                    }
                    alt="CurrentUser"
                    className={Styles.FullImg}
                  />
                </div>
                <div>
                  <h5>
                    {" "}
                    {c["userId"] === session["users"][0]["userId"]
                      ? session["users"][0]["displayName"]
                      : props.postOwner}{" "}
                  </h5>

                  <p className={Styles.comment}>{c["data"]["text"]}</p>
                </div>
              </div>
            </div>
          </div>
        ))}

      <div className={`${Styles.postCommentBox} ${Styles.dflexSpaceBt}`}>
        <div className={Styles.commentUserImg}>
          <img
            src={
              session["users"][0]["avatarCustomUrl"]
                ? session["users"][0]["avatarCustomUrl"]
                : props.postOwnerImg
            }
            alt="CurrentUser"
            className={Styles.FullImg}
          />
        </div>
        <div className={Styles.commentInp}>
          <Input
            value={commentText}
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
