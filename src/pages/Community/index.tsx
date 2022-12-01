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

import { useAuth } from "../../hooks/form/useAuth";

const Community = () => {
  const [posts, setPosts] = useState([]);
  const [reload, setReload] = useState(0);
  const [selectedAvatar, setSelectedAvatar] = useState<[any]>();
  const avatarPickerRef = useRef();

  const v3API = "https://api.us.amity.co/api/v3";

  const { store } = useAuth(null);
  const { xAPIKey, session } = store;

  console.log("Posts");
  console.log(posts);

  console.log("Selected Avatar");
  console.log(selectedAvatar);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const url = `${v3API}/posts?targetId=${session["users"][0]["userId"]}&targetType=user&sortBy=lastUpdated`;
        axios.defaults.headers["x-api-key"] = xAPIKey;
        axios.defaults.headers["Authorization"] =
          "Bearer " + session["accessToken"];

        const response = await axios.get<string>(url);

        console.log("fetchPosts data.posts");
        console.log(response.data.posts);
        setPosts(() => response.data.posts);
      } catch (err) {
        return "";
      }
    };
    fetchPosts();
  }, [reload]);

  useEffect(() => {
    console.log("New avatar has been selected");
    if (selectedAvatar) {
      console.log("Valid picture");
      changeAvatar();
    } else {
      console.log("No picture selected");
    }
  }, [selectedAvatar]);

  const changeAvatar = async () => {
    console.log("Uploading new avatar");
    const fileUploadResult = await uploadNewAvatar(); // upload picture to Amity
    console.log("New Avatar upload response");
    console.log(fileUploadResult);

    const url = `${v3API}/users`;
    const requestData = {
      ...session["users"][0],
      avatarFileId: fileUploadResult[0].fileId,
      avatarCustomUrl: fileUploadResult[0].fileUrl,
    };
    const config = {
      headers: {
        Authorization: "Bearer " + session["accessToken"],
      },
    };

    const response3 = await axios.put(url, requestData, config);

    console.log("Avatar change result");
    console.log(response3);

    setReload((prevCount) => prevCount + 1);
  };

  const handleSelectedAvatarChange = (event) => {
    setSelectedAvatar(() => [null]);
    setSelectedAvatar(() => [event.target.files[0]]);
  };

  const handleChangeAvatarBtn = async () => {
    console.log("Avatar Change button clicked!");
    avatarPickerRef.current.click();
  };

  const uploadNewAvatar = async (): Promise<AxiosResponse<any, any>> => {
    try {
      axios.defaults.headers["x-api-key"] = xAPIKey;
      axios.defaults.headers["Authorization"] =
        "Bearer " + session["accessToken"];

      const formData = new FormData();
      formData.append("file", selectedAvatar[0]);

      const response3 = await axios.post<AxiosResponse<any, any>>(
        `${v3API}/files`,
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
  };

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
              <CreatePost variant="primary" setPosts={setPosts} />
              {/* <Posts
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
              /> */}
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
