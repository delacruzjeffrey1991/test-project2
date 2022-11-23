import React, { FC, useState } from "react";
import Styles from "./styles.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const IconButton = ({
  disable = false,
  variant = "transparent",
  isLoading = false,
  color = "black",
  ...props
}) => {
  return (
    <button
      disabled={disable}
      className={` ${Styles.iconBtn} ${Styles[variant]} ${Styles[color]} ${
        isLoading ? `${Styles.isLoading}` : ""
      } 
         `}
      onClick={props.onClick}
    >
      {props.icon ? <span> {props.icon} </span> : ""}
    </button>
  );
};

export default IconButton;
