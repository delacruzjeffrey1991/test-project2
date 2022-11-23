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

import coverImg from "../../assets/images/video5.png";
import doneImg from "../../assets/images/done.png";
import inst1Img from "../../assets/images/inst1.png";
import inst2Img from "../../assets/images/inst2.png";
import inst3Img from "../../assets/images/inst3.png";
import inst4Img from "../../assets/images/inst4.png";
import inst5Img from "../../assets/images/inst5.png";

import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import axios from "axios";
import { AxiosResponse } from "axios";
import moment from 'moment';

const Community = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {


            const response = await getToken();
            console.log(response);

            const response2 = await getSession(response);
            console.log(response2.accessToken);

            try {
                const url = "https://api.us.amity.co/api/v3/posts?targetId=jeffrey-test2&targetType=user&sortBy=lastUpdated";
                axios.defaults.headers['x-api-key'] = 'b0efed533f8df46c18628b1c515e43dd835fd8e6bc366b2c';
                axios.defaults.headers['Authorization'] = 'Bearer ' + response2.accessToken;



                const response = await axios.get<string>(url);
                console.log('asd');
                console.log(response.data.posts);
                setPosts(
                    response.data.posts
                );
            } catch (err) {
                return '';
            }


        };
        fetchPosts();
    }, []);


    async function getToken(): Promise<string> {
        try {
            const url = "https://api.us.amity.co/api/v3/authentication/token?userId=jeffrey-test2";
            axios.defaults.headers['x-server-key'] = '138fbb2f22e5af367025ee9d6ff02c0d903fd74f560f87b71119197aa125645cd01015cd7b7236193b8fcc7a42a114864a399cd85b55dd2c88d6447055';
            const response = await axios.get<string>(url);
            return response.data;
        } catch (err) {
            return '';
        }
    }

    async function getSession(token: string): Promise<AxiosResponse<any, any>> {
        //try {
        const url = "https://api.us.amity.co/api/v3/sessions";
        axios.defaults.headers['x-api-key'] = 'b0efed533f8df46c18628b1c515e43dd835fd8e6bc366b2c';
        const requestData = {
            "userId": "jeffrey-test2",
            "deviceId": "jeffrey-test2",


            "displayName": "jeffrey-test2",
            "authToken": token
        };

        const response = await axios.post<AxiosResponse<any, any>>(url, requestData);
        return response.data;
        //} catch (err) {
        //    return '';
        //}
    }


  return (
    <>
      <Row>
        <Col sm={10}>
          <ProfileCover userCoverImg={coverImg} />
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
                {posts.map((p) => (
                    <Posts postOwnerImg={inst3Img}
                        postOwner="You"
                        postTime={moment(p.updatedAt).fromNow()}
                        reactedUserImg={inst4Img}
                        commentsCount="0"
                        shareCount="0"
                        currentUserImg={inst3Img}
                        postText={p.data.text} />
                ))}
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
