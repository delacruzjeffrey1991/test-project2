import React from "react";
import Styles from "./styles.module.scss";
import Group from "../Group";

const CourseTitleDesc = (props: any) => {
  // console.log("pp", props);
  return (
    <div
      className={`${Styles.expbox}  ${Styles.borderless}  ${Styles.uploadVideo}`}
    >
      <div className={Styles.contentbox}>
        <h4 className={`${Styles.CAY}  ${Styles.colorgreenay2}  `}>
          {props.course}
        </h4>

        <h3 className={Styles.ctitle}>
          {props.courseTitle}
          <span className={Styles.colorgreenay2}> {props.cTitle}</span>
        </h3>
        <p>{props.views}</p>

        {props.instructorImg ? (
          <div className={Styles.courseBottom}>
            <div>
              <Group
                image={props.instructorImg}
                heading={props.InstructorName}
                subHeading={props.insSub}
              />
            </div>

            <div className={Styles.courseinfo}>
              <p>{props.lesson}</p>
              <p>{props.countLess}</p>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default CourseTitleDesc;
