import React from "react";
// import Styles from "./styles.module.scss";
import Styles from "../components/common/TextFieldQa/styles.module.scss";

const Input = ({
  type,
  placeholder,
  label,
  minLength,
  maxLength,
  defaultValue,
  required,
  errors,
  disabled=false,
  register,
}: any) => {
  return (
    <div className={Styles.TextFieldQa}>
      <input
        type={type}
        placeholder={placeholder}
        disabled ={disabled}
        {...register(label, {
          required: required,
          minLength: minLength ? minLength : null,
          maxLength: maxLength ? maxLength : null,
        })}
        defaultValue={defaultValue ? defaultValue : null}
      />
      {errors === "required" && (
        <span className={Styles.errorMsgClr}>This Field Is Required</span>
      )}
      {errors === "maxLength" && (
        <p className={Styles.errorMsgClr}>
          {placeholder} cannot exceed {maxLength} characters
        </p>
      )}
      {errors === "minLength" && (
        <p className={Styles.errorMsgClr}>
          {placeholder} must contain atleast {minLength} characters
        </p>
      )}
    </div>
  );
};

export default Input;
