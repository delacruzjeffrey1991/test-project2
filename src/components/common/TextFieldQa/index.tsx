import React, { FC } from "react";
import Styles from "./styles.module.scss";

interface Props {
  label?: string,
  type?: string,
  placeholder?: string,
  variant?: string,
  name?: string,
  icon?: any,
  action?: any,
  value?: string,
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void,
}

const TextFieldQa = ({
  type = "text",
  placeholder = "Description Here..",
  variant = "normal",
  name,
  onChange,
  value = "",
  ...props
}: Props) => {
  return (
    <div className={`${Styles.TextFieldQa} ${Styles[variant]} `}>
      {props.label ? <label htmlFor="inp"> {props.label} </label> : ""}
      {props.icon ? props.icon : ""}
      <div className={Styles.inpBox}>
        <input
          type={type}
          placeholder={`${placeholder}`}
          className={` ${Styles.inpuField}`}
          name={name}
          onChange={onChange}
          value={value}
        />
        {props.action ? <span className={Styles.actions} > {props.action} </span> : ''}
      </div>
    </div>
  );
};

export default TextFieldQa;
