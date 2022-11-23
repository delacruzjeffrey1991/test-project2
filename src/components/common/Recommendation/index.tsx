import React from "react";

import global from "../../../global.module.scss";
import Button from "../Button";
import Heading from "../Heading";
import Styles from "./styles.module.scss";

function Recommendation(
  {
    buttonLabel='Create Task',
    ...props
  }
) {
  return (
    <div className={Styles.recommendationsMain}>
      <h5> {props.subHeading} </h5>
      <Heading label={props.heading} />
      <p> {props.text} </p>
      <Button label={buttonLabel} />
    </div>
  );
}

export default Recommendation;
