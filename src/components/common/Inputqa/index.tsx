import { ChangeEvent, useEffect, useState } from "react";

import React from "react";
import Styles from "./styles.module.scss";

function Inputqa({
  variant = "white",
  type = "text",
  color = "gray",
  ...props
}) {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    //setFirstChildName(event.target.value);
    props.updatePostText(event.target.value);
  };

  return (
    <>
      <input
        type={type}
        value={props.value}
        placeholder={`${props.placeholder}`}
        className={` ${Styles.inpuField} ${Styles[variant]} ${Styles[color]}`}
        onChange={handleChange}
      />
    </>
  );
}

export default Inputqa;
