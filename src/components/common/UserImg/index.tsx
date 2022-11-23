import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import global from  '../../../global.module.scss';

function UserImg(
  {
    verified=false,
    ...props
  }
) {
  return (
    <div>
      <div className={`${global.roundImg} ${global.roundImg70}`}>
        <img src={props.userImage} alt="user" />
      </div>
      <p className={`${global.pt10} ${global.cBlack}`}> <span> {props.username} </span> { verified ? <span className={global.cPrimary}> <FontAwesomeIcon icon={faCircleCheck} /> </span> : '' } </p>
    </div>
  );
}

export default UserImg;
