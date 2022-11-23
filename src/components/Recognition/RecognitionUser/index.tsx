import React from "react";
import Styles from "./styles.module.scss";
import global from 'src/global.module.scss'

function RecognitionUser(props: any) {
  return (
    <div className={Styles.recognitionUserMain}>
      <div className={Styles.flex}>
        <div className={Styles.userImg45}>
          <img src={props.userImg} alt="user" className={Styles.imgFull} />
        </div>
        <span className={Styles.username}> 
          <span>{props.username}</span> 
          {
            props.user_message ? <span className={`d-block ${global.cGray}`}> {props.user_message} </span> : ''
          }
        </span>
      </div>
      <span
        className={`${Styles.time} ${
          props.time === "online" ? Styles.online : ""
        } `}
      >
        {props.time === "online" ? "" : props.time}
      </span>
    </div>
  );
}

export default RecognitionUser;
