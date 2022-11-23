import React from "react";
import Styles from "./styles.module.scss";

function Group({ fontVariant = "small", ...props }) {
  return (
    <div
      className={`${Styles.GroupMain} ${
        props.border ? Styles[props.border] : ""
      }`}
    >
      <div className={Styles.Group}>
        <span className={Styles.grpImg}>
          <img src={props.image} alt="Group" />
        </span>
        <span className={Styles.grpName}>
          <h4 className={Styles[fontVariant]}> {props.heading} </h4>
          {props.subHeading ? <p> {props.subHeading} </p> : ""}
        </span>
      </div>

      {props.action ? <span>{props.action}</span> : ""}
    </div>
  );
}

export default Group;
