import { faBell, faCalendar } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import React from "react";
import Styles from "./styles.module.scss";
import profileImage from "../../assets/images/admin-img.png";
import { useAuth } from "src/hooks/form/useAuth";

function Header(props: any) {
  const { store } = useAuth(null);
  const { session } = store;
  if (Object.keys(session).length != 0) {
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
              src={
                session["users"][0]["avatarCustomUrl"]
                  ? session["users"][0]["avatarCustomUrl"]
                  : profileImage
              }
              alt="Profile Image"
            />
          </li>
        </ul>
      </div>
    );
  } else {
    return <>Loading...</>;
  }
}

export default Header;
