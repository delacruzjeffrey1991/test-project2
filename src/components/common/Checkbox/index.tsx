import React from "react";

export const Checkbox = (props: any) => {
  return (
    <div className="form-check">
      <input
        type="checkbox"
        className="form-check-input"
        id="check1"
        name="option1"
        value="something"
      />
      <label className="form-check-label">{props.label}</label>
    </div>
  );
};
