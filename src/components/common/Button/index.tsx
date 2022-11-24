import React, { FC, useState } from "react";
import Styles from "./styles.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  disable?: boolean;
  variant?: string;
  color?: string;
  isLoading?: boolean;
  size?: string;
  icon?: string;
  label?: string;
}

const Button = ({
  disable = false,
  variant = "filled",
  color = "primary",
  isLoading = false,
  size = "medium",
  ...props
}: ButtonProps) => {

  return (
    <button
      disabled={disable}
      className={`${Styles.qaBtn1} ${Styles[variant]} ${Styles[color]} ${Styles[size]
        }  ${isLoading ? Styles.isLoadinga : ""} `}
      onClick={props.onClick}
    >
      {props.icon ? <span className={Styles.btnIcon}> {props.icon} </span> : ""}
      <span>{props.label}</span>
      {isLoading ? (
        <span className="loader_spinner">
          <FontAwesomeIcon icon={faSpinner} />
        </span>
      ) : (
        <></>
      )}
      
    </button>
  );
};

export default Button;
