import React, { FC, useState } from "react";
import Styles from "./styles.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const FilterBtn = (props: any) => {
  return (
    <div className={Styles.filterBtn}>
      <select name="" id="">
        <option value="" selected>
          {" "}
          {props.label}{" "}
        </option>
        {props.option?.map((option: any , index : any) => {
          return <option key={index} value={option.value}> {option.label} </option>;
        })}
      </select>
      <span className={Styles.iconCaret}>
        <FontAwesomeIcon icon={faChevronDown} />
      </span>
    </div>
  );
};

export default FilterBtn;
