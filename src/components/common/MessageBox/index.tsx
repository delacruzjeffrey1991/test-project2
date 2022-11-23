import React from "react";
import Styles from "./styles.module.scss";

function MessageBox({
  variant = "white",
  type = "text",
  color = "gray",
  ...props
}) {
  return (
    <>
      <div className={`form-floating ${Styles.formFloating}`}>
        <textarea
          className={`form-control ${Styles.formControl}`}
          placeholder={props.placeholder}
        ></textarea>
        <label>{props.label}</label>
      </div>
    </>
  );
}

export default MessageBox;
