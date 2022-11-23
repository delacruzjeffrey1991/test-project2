import React from "react";
import Styles from "./styles.module.scss";

function LabelWithInput({
  variant = "white",
  type = "text",
  color = "gray",
  ...props
}) {
  return (
    <>
      <div className={`form-floating ${Styles.formFloating}`}>
        <input
          type={type}
          placeholder={`${props.placeholder}`}
          className={`form-control ${Styles.formControl}`}
          {...props}
        />
        <label>{props.label}</label>
      </div>
    </>
  );
}

export default LabelWithInput;
