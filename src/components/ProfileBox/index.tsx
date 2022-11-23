import React from "react";
import Styles from "./styles.module.scss";

import { Link } from "react-router-dom";

import {
  AiOutlineSetting,
  AiOutlineQuestionCircle,
  AiOutlineFileText,
} from "react-icons/ai";
import { BiCheckShield, BiGlobe } from "react-icons/bi";
import Button from "../common/Button";
import { useAuth } from "src/hooks/form/useAuth";

function ProfileBox({ show = false, ...props }) {

  const { userLogout } = useAuth(null)

  const profileLinks = [
    {
      id: "settings",
      icon: <AiOutlineSetting />,
      link: "/setting/notification",
      title: "Settings",
    },
    {
      id: "privacy",
      link: "/setting/notification",
      icon: <BiCheckShield />,
      title: "Privacy",
    },
    {
      id: "language",
      link: "/setting/notification",
      icon: <BiGlobe />,
      title: "Language",
    },
    {
      id: "helpAndSupport",
      link: "/setting/notification",
      icon: <AiOutlineQuestionCircle />,
      title: "Help & Support",
    },
    {
      id: "termsAndPolicy",
      link: "/setting/notification",
      icon: <AiOutlineFileText />,
      title: "Terms & Policy",
    },
  ];

  return (
    <div className={`${Styles.profileBox} ${show ? Styles.show : ""}`}>
      <div className={Styles.userbox}>
        <div className={Styles.userImgbox}>
          <Link to="/user/brand-culture-startegy">
            <img src={props.userImg} alt="user" />
          </Link>
        </div>
        <div className={Styles.userName}>
          <Link to="/">
            <h2>John Doe {props.userName} </h2>
          </Link>
          <p>IMC-00123 {props.userid} </p>
        </div>
      </div>
      <div className={Styles.progressBox}>
        <div className={Styles.progressTxt}>
          <p>Brand Progress</p>
          <p> {props.brandProgress}% </p>
        </div>
        <div className={Styles.progress}>
          <div
            style={{ width: `${props.brandProgress}%` }}
            className={Styles.progressBar}
          ></div>
        </div>
      </div>
      <div className={Styles.userProfileLinks}>
        <h3>Account</h3>
        <ul>
          {profileLinks.map((profileLink) => {
            return (
              <li key={profileLink.id}>
                <Link
                  to={`${profileLink.link}`}
                  className={`${Styles.userLinks} d-flex align-items-center gap-2`}
                >
                  {profileLink.icon}
                  <span>{profileLink.title}</span>
                </Link>
              </li>
            );
          })}
          <li className={Styles.logoutBtn}>
            <Button onClick={userLogout} label="Logout" variant="filled" color="secondary" />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ProfileBox;
