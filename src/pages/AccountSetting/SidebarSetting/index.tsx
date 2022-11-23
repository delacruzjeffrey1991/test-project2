import React from "react";
import Styles from "./styles.module.scss";
import { Link, useLocation } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

const SidebarSetting = () => {
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");
  return (
    <>
      <div className={Styles.sidebarAcc}>
        <ul>
          <li>
            <Link
              to={"/setting/notification"}
              className={`${Styles.linkAcc} ${
                splitLocation[splitLocation.length - 1] === "notification"
                  ? Styles.activeLink
                  : ""
              }`}
            >
              Notification
              <FontAwesomeIcon icon={faAngleRight} className={Styles.icon} />
            </Link>
          </li>
          <li>
            <Link
              to={"/setting/message-requests"}
              className={`${Styles.linkAcc} ${
                splitLocation[splitLocation.length - 1] === "message-requests"
                  ? Styles.activeLink
                  : ""
              }`}
            >
              Message Requests
              <FontAwesomeIcon icon={faAngleRight} className={Styles.icon} />
            </Link>
          </li>
          <li>
            <Link
              to={"/setting/my-campaigns"}
              className={`${Styles.linkAcc} ${
                splitLocation[splitLocation.length - 1] === "my-campaigns"
                  ? Styles.activeLink
                  : ""
              }`}
            >
              My Campaigns
              <FontAwesomeIcon icon={faAngleRight} className={Styles.icon} />
            </Link>
          </li>
          <li>
            <Link
              to={"/setting/my-workspaces"}
              className={`${Styles.linkAcc} ${
                splitLocation[splitLocation.length - 1] === "my-workspaces"
                  ? Styles.activeLink
                  : ""
              }`}
            >
              My Workspaces
              <FontAwesomeIcon icon={faAngleRight} className={Styles.icon} />
            </Link>
          </li>
          <li>
            <Link
              to={"/setting/profile-setting"}
              className={`${Styles.linkAcc} ${
                splitLocation[splitLocation.length - 1] === "profile-setting"
                  ? Styles.activeLink
                  : ""
              }`}
            >
              Profile Settings
              <FontAwesomeIcon icon={faAngleRight} className={Styles.icon} />
            </Link>
          </li>
          <li>
            <Link
              to={"/setting/users"}
              className={`${Styles.linkAcc} ${
                splitLocation[splitLocation.length - 1] === "users"
                  ? Styles.activeLink
                  : ""
              }`}
            >
              Users
              <FontAwesomeIcon icon={faAngleRight} className={Styles.icon} />
            </Link>
          </li>
          <li>
            <span className={`${Styles.linkAcc}`}>
              Password Reset
              <FontAwesomeIcon icon={faAngleRight} className={Styles.icon} />
            </span>
          </li>
          <li>
            <Link to={"/auth/user-role"} className={Styles.linkAcc}>
              Logout
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default SidebarSetting;
