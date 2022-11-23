import React from "react";
import {Link} from 'react-router-dom'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faBell } from "@fortawesome/free-solid-svg-icons";
import Styles from "./styles.module.scss";

import profileImage from '../../assets/images/admin-img.png';

function Header(props:any) {
  return (
    <div className={Styles.headerMain}>
      <ul className="d-flex align-items-center justify-content-end">
        <li>
          <Link to="/" className={Styles.iconHead}>
            <FontAwesomeIcon icon={faCalendar} />
          </Link>
        </li>
        <li>
          <Link to="/user/notification" className={Styles.iconHead}>
            <FontAwesomeIcon icon={faBell} />
            <span className={Styles.notfCount}>
                <span>2</span>
            </span>
          </Link>
        </li>
        <li className={Styles.profileImg} onClick={props.onClick}>
          <img
            src={profileImage}
            alt="Profile Image"
          />
        </li>
      </ul>
    </div>
  );
}

export default Header;