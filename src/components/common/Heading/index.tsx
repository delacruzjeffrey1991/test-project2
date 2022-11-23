import React, { FC } from "react";
import Styles from "./styles.module.scss";

const Heading = ({ color = "primaryText", variant = "heading3", ...props }) => {
  return (
    <>
      <h4
        className={`${Styles.heading} ${Styles[variant]} ${
          Styles[props.border]
        }  ${Styles[color]} `}
      >
        {props.label}
      </h4>
    </>
  );
};

export default Heading;
