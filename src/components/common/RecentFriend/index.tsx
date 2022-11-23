import React from "react";
import Styles from "./styles.module.scss";

function RecentFriend(props: any) {
  return (
    <div className={Styles.RecentFriend}>
      <div className={Styles.userImg}>
        <img src={props.userImg} alt="user" />
      </div>
      <p> {props.userName} </p>
    </div>
  );
}

export default RecentFriend;
