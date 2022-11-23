import Styles from "./styles.module.scss";
import React from "react";

import inst1Img from "../../../assets/images/inst1.png";
import inst2Img from "../../../assets/images/inst2.png";
import inst3Img from "../../../assets/images/inst3.png";

import RecentFriend from "../../../components/common/RecentFriend";
import Heading from "../../../components/common/Heading";
import IconButton from "../../../components/common/IconButton";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import RecognitionUser from "../../../components/Recognition/RecognitionUser";

const ChatSuggestion = () => {
  return (
    <div>
      <div className={Styles.recentFriendsMain}>
        <RecentFriend userImg={inst1Img} userName="John" />
        <RecentFriend userImg={inst2Img} userName="Edilson" />
        <RecentFriend userImg={inst3Img} userName="Afrim" />
      </div>

      <div className={Styles.friendListMain}>
        <div className={Styles.friendListHead}>
          <Heading variant="heading5" label="Friends" />
          <IconButton icon={<FontAwesomeIcon icon={faEllipsisH} />} />
        </div>
        <div className={Styles.friendList}>
          <RecognitionUser
            userImg={inst1Img}
            username="Kayleigh Bysouth"
            time="online"
          />
          <RecognitionUser
            userImg={inst2Img}
            username="Jes Phillips MP"
            time="1 min"
          />
          <RecognitionUser
            userImg={inst3Img}
            username="MP Eslam Hisham"
            time="2 min"
          />
          <RecognitionUser
            userImg={inst1Img}
            username="Levizja Vetvendos"
            time="today"
          />
          <RecognitionUser
            userImg={inst2Img}
            username="Afrim Konjufca"
            time="online"
          />
          <RecognitionUser
            userImg={inst3Img}
            username="MP Eslam Hisham"
            time="2 min"
          />
          <RecognitionUser
            userImg={inst1Img}
            username="Kayleigh Bysouth"
            time="online"
          />
          <RecognitionUser
            userImg={inst2Img}
            username="Jes Phillips MP"
            time="1 min"
          />
          <RecognitionUser
            userImg={inst3Img}
            username="MP Eslam Hisham"
            time="2 min"
          />
          <RecognitionUser
            userImg={inst1Img}
            username="Levizja Vetvendos"
            time="today"
          />
          <RecognitionUser
            userImg={inst2Img}
            username="Afrim Konjufca"
            time="online"
          />
          <RecognitionUser
            userImg={inst3Img}
            username="MP Eslam Hisham"
            time="2 min"
          />
        </div>
      </div>
    </div>
  );
};

export default ChatSuggestion;
