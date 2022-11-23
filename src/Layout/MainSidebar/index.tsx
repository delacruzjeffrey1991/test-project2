import React, { FC } from "react";
import { Link } from "react-router-dom";
import Styles from "./styles.module.scss";

import logo from "../../assets/images/Logo.png";
import asideBottomImg from "../../assets/images/asideBottom-line.png";

import homeIcon from "../../assets/images/homeIcon.svg";
import chessIcon from "../../assets/images/chessIcon.svg";
import settingIcon from "../../assets/images/settingIcon.svg";

const MainSidebar = () => {
  return (
    <div className={Styles.asideLeft}>
      <div className={Styles.logo}>
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <div className={Styles.asideLeftNav}>
        <ul>
          <li>
            <Link to="/user/home-admin">
              <img src={homeIcon} alt="Home Icon" />
            </Link>
          </li>
          <li>
            <Link to="/">
              <img src={chessIcon} alt="Chess Icon" />
            </Link>
          </li>
          <li>
            <Link to="/setting/notification">
              <img src={settingIcon} alt="Setting Icon" />
            </Link>
          </li>
        </ul>
      </div>
      <img src={asideBottomImg} alt="" className={Styles.asideBottomImg} />
    </div>
  );
};

export default MainSidebar;
