import React, { FC } from "react";
import Styles from "./styles.module.scss";

const TextArea = ({
  type = "text",
  placeholder = "Description Here..",
  variant = "normal",
  ...props
}) => {
  return (
    <div className={`${Styles.TextAreaQa} `}>
      {props.label ? <label htmlFor="inp"> {props.label} </label> : ""}
      <div className={Styles.textAreaBox}>
        <textarea name="" id="" placeholder={props.placeholder} ></textarea>
        { props.action ? <span className={Styles.actions} > {props.action} </span> : '' }
      </div>
    </div>
  );
};

export default TextArea;
