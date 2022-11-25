import { Row, Col, Container } from "react-bootstrap";
import Styles from "./index.module.scss";

import Group from "../../components/common/Group";
import Heading from "../../components/common/Heading";

import CreatePost from "../../components/CreatePost";
import Mentorship from "../../components/Mentorship";
import Posts from "../../components/Posts";
import ProfileCover from "../../components/ProfileCover";
import Recognition from "../../components/Recognition";
import FriendSuggestion from "../../components/common/FriendSuggestion";
// import EventImg from '../../../components/common/EventImg'
import Event from "../../components/common/Event";

import blankProfile from "../../assets/images/blankProfile.jpg";
import coverImg from "../../assets/images/video5.png";
import doneImg from "../../assets/images/done.png";
import inst1Img from "../../assets/images/inst1.png";
import inst2Img from "../../assets/images/inst2.png";
import inst3Img from "../../assets/images/inst3.png";
import inst4Img from "../../assets/images/inst4.png";
import inst5Img from "../../assets/images/inst5.png";
import MediaSelector from "src/components/MediaSelector";

import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { AxiosResponse } from "axios";
import moment from "moment";

const Community = () => {
  const [posts, setPosts] = useState([]);
  const [userInformation, setUserInformation] = useState<{}>({});
  const [avatarFileId, setAvatarFileId] = useState<string>("");
  const [selectedAvatar, setSelectedAvatar] = useState<[any]>();
  const avatarPickerRef = useRef();

  console.log("Selected Avatar");
  console.log(selectedAvatar);

  console.log("User Information:");
  console.log(userInformation);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await getToken();
      console.log(response);

      console.log("getting session 2: ");
      const response2 = await getSession(response);
      console.log(response2.accessToken);

      try {
        const url =
          "https://api.us.amity.co/api/v3/posts?targetId=jeffrey-test2&targetType=user&sortBy=lastUpdated";
        axios.defaults.headers["x-api-key"] =
          "b0efed533f8df46c18628b1c515e43dd835fd8e6bc366b2c";
        axios.defaults.headers["Authorization"] =
          "Bearer " + response2.accessToken;

        const response = await axios.get<string>(url);
        console.log("asd");

        console.log("fetchPosts data.posts");
        console.log(response.data.posts);

        console.log("fetchPosts data");
        console.log(response.data);
        setPosts(response.data.posts);
      } catch (err) {
        return "";
      }
    };
    fetchPosts();
    setUserInfo();
  }, []);

  useEffect(() => {
    console.log("New avatar has been selected");
    if (selectedAvatar) {
      console.log("Valid picture");
      changeAvatar();
    } else {
      console.log("No picture selected");
    }
  }, [selectedAvatar]);

  async function changeAvatar() {
    console.log("getting token");
    const tokenResponse = await getToken();
    console.log(tokenResponse);

    console.log("getting session:");
    const sessionResponse = await getSession(tokenResponse);
    console.log("session response:" + sessionResponse);
    console.log(sessionResponse);

    console.log("Uploading new avatar");
    const fileUploadResult = await uploadNewAvatar(sessionResponse.accessToken);
    console.log("New Avatar upload response");
    console.log(fileUploadResult);

    const url = "https://api.us.amity.co/api/v3/users";
    axios.defaults.headers["x-api-key"] =
      "b0efed533f8df46c18628b1c515e43dd835fd8e6bc366b2c";
    axios.defaults.headers["Authorization"] =
      "Bearer " + sessionResponse.accessToken;

    const response3 = await axios.put(url, {
      userId: "jeffrey-test2",
      displayName: "jeffrey-test2",
      avatarFileId: fileUploadResult[0].fileId,
      avatarCustomUrl: fileUploadResult[0].fileUrl,
      deviceId: "jeffrey-test2",
    });

    console.log("Avatar change result");
    console.log(response3);
  }

  async function setUserInfo() {
    console.log("User Information: ");
    const userInformation = await getUserInformation();
    console.log(userInformation);
    setUserInformation(() => userInformation);
  }

  async function getUserInformation(): Promise<AxiosResponse<any, any>> {
    const tokenResponse = await getToken();
    const sessionResponse = await getSession(tokenResponse);
    try {
      axios.defaults.headers["x-api-key"] =
        "b0efed533f8df46c18628b1c515e43dd835fd8e6bc366b2c";
      axios.defaults.headers["Authorization"] =
        "Bearer " + sessionResponse.accessToken;
      const url = `https://api.us.amity.co/api/v3/users/jeffrey-test2?userId=jeffrey-test2`;
      const response = await axios.get<any>(url);
      return response.data;
    } catch (err) {
      console.log(err);
      return err;
    }
  }

  const handleSelectedAvatarChange = (event) => {
    setSelectedAvatar(() => [null]);
    setSelectedAvatar(() => [event.target.files[0]]);
  };

  async function handleChangeAvatarBtn() {
    console.log("Avatar Change button clicked!");
    avatarPickerRef.current.click();
  }

  async function uploadNewAvatar(
    accessToken: string
  ): Promise<AxiosResponse<any, any>> {
    try {
      axios.defaults.headers["x-api-key"] =
        "b0efed533f8df46c18628b1c515e43dd835fd8e6bc366b2c";
      axios.defaults.headers["Authorization"] = "Bearer " + accessToken;

      const formData = new FormData();
      formData.append("file", selectedAvatar[0]);

      const response3 = await axios.post<AxiosResponse<any, any>>(
        "https://api.us.amity.co/api/v3/files",
        formData,
        {
          headers: {
            "content-type": "multipart/form-data",
          },
        }
      );

      console.log("avatar upload response");
      console.log(response3.data);
      return response3.data;
    } catch (err) {
      console.log(err);
      return err;
    }
  }

  async function getToken(): Promise<string> {
    try {
      const url =
        "https://api.us.amity.co/api/v3/authentication/token?userId=jeffrey-test2";
      axios.defaults.headers["x-server-key"] =
        "138fbb2f22e5af367025ee9d6ff02c0d903fd74f560f87b71119197aa125645cd01015cd7b7236193b8fcc7a42a114864a399cd85b55dd2c88d6447055";
      const response = await axios.get<string>(url);

      console.log("token Response");
      console.log(response);
      return response.data;
    } catch (err) {
      return "";
    }
  }

  async function getSession(token: string): Promise<AxiosResponse<any, any>> {
    // try {
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
    // } catch (err) {
    //   console.log(err);
    //   return "";
    // }
  }

  return (
    <>
      <Row>
        <Col sm={10}>
          <ProfileCover
            userCoverImg={coverImg}
            handleAvatarChange={handleChangeAvatarBtn}
          />
          <div style={{ display: "none" }}>
            <MediaSelector
              handleRef={avatarPickerRef}
              handleAttachedMediaChange={handleSelectedAvatarChange}
            />
          </div>
          <Row className={Styles.profileFeed}>
            <Col sm={3}>
              <Recognition />
              <Mentorship />
            </Col>
            <Col sm={1}></Col>
            <Col sm={8}>
              <CreatePost variant="primary" />
              <Posts
                postOwnerImg={inst3Img}
                postOwner="You"
                postTime="Just Now"
                postImg={coverImg}
                lessonNumber="1"
                lessonName="Leadership and Organizational Training"
                partNumber="1"
                partName="Introduction"
                lessonNextBtn="Watch Part 2"
                lessonNextBtnIcon={faArrowRight}
                reactedUserImg={inst4Img}
                commentsCount="0"
                shareCount="0"
                currentUserImg={inst3Img}
              />
              <Posts
                postOwnerImg={inst3Img}
                postOwner="You"
                postTime="32 mins ago"
                reactedUserImg={inst4Img}
                commentsCount="0"
                shareCount="0"
                currentUserImg={inst3Img}
                postText=" I would like to Kudos @Carla, for the #courteousness in every appointment, and deadlines throughout the month of may "
              />
              {posts.map((p) => {
                if (Array.isArray(p.data.images)) {
                  return (
                    <Posts
                      postOwnerImg={inst3Img}
                      postOwner="You"
                      postImgId={p.data.images[0]}
                      postTime={moment(p.updatedAt).fromNow()}
                      reactedUserImg={inst4Img}
                      commentsCount="0"
                      shareCount="0"
                      currentUserImg={inst3Img}
                      postText={p.data.text}
                      id={p._id}
                    />
                  );
                } else {
                  return (
                    <Posts
                      postOwnerImg={inst3Img}
                      postOwner="You"
                      postTime={moment(p.updatedAt).fromNow()}
                      reactedUserImg={inst4Img}
                      commentsCount="0"
                      shareCount="0"
                      currentUserImg={inst3Img}
                      postText={p.data.text}
                      id={p._id}
                    />
                  );
                }
              })}
            </Col>
          </Row>
        </Col>
        <Col sm={2}>
          <Heading label="Resource Groups" variant="heading5" />
          <div className={Styles.grpRecom}>
            <Group image={doneImg} heading={`Women's Group`} />
            <Group image={doneImg} heading={`Disabilities`} />
          </div>
          <div className={Styles.friendRecom}>
            <Heading label="Friend Recommendations" variant="heading5" />
            <FriendSuggestion
              userImg={inst5Img}
              userName="Steve Harris"
              courcesCount={30}
              videosCount={12}
            />
            <FriendSuggestion
              userImg={inst4Img}
              userName="Mika Davis"
              courcesCount={30}
              videosCount={12}
            />
            <FriendSuggestion
              userImg={inst3Img}
              userName="Bilan Jones"
              courcesCount={30}
              videosCount={12}
            />
            <FriendSuggestion
              userImg={inst2Img}
              userName="Ju Anderson"
              courcesCount={30}
              videosCount={12}
            />
            <FriendSuggestion
              userImg={inst1Img}
              userName="Benjamin Smith"
              courcesCount={30}
              videosCount={12}
            />
          </div>
          {/* <EventImg eventImage={coverImg} /> */}
          <Heading label="Recent Events" variant="heading4" border="bottom" />

          <Event
            ownerImg={inst1Img}
            eventTitle="Membership and why it..."
            eventDetails="Creating a workspace where..."
            eventSeen="8"
            seenedUser={inst3Img}
          />
          <Event
            ownerImg={inst1Img}
            eventTitle="Membership and why it..."
            eventDetails="Creating a workspace where..."
            eventSeen="8"
            seenedUser={inst3Img}
          />
        </Col>
      </Row>
    </>
  );
};

export default Community;
