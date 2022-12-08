import React from "react";
import Styles from "./styles.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import Button from "../common/Button";

function BasicInfo(props: any) {
  return (
    <>
      <div className={Styles.userBasicInfo}>
        <div className={Styles.userProfileImg}>
          <Button
            icon={<FontAwesomeIcon icon={faPencil} />}
            // variant="outlined"
            // color="cyan"
            size="sizeSmallest"
            onClick={props.handleAvatarChange}
          />
          <img
            id="Profile"
            src={props.userImg}
            alt="Profile"
            className={Styles.imgFull}
          />
        </div>
        <h3 className={Styles.username}> {props.userName} </h3>
        <h4 className={Styles.userDesignation}> {props.designation} </h4>
        <p className={Styles.opentoText}> {props.OpenTo} </p>
      </div>
    </>
  );
}

export default BasicInfo;
