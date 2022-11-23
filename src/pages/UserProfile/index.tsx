import React from "react";
import ProfileModules from "src/components/common/ProfileModules";
import exp1 from "../../assets/images/exp1.png";
import isnt1 from "../../assets/images/inst1.png";
import DropDown from "src/components/common/DropDown";
import Styles from "./styles.module.scss";

const UserProfile = () => {
  return (
    <>
      <div className={Styles.profileEnd}>
        <div className={Styles.dropdownMain}>
          <DropDown
            dropdownLabel="Best match"
            options={[
              { value: "Best match" },
              { value: "Least Liked" },
              { value: "Least Viewed" },
              { value: "Most Liked  " },
              { value: "Most Viewed" },
              { value: "Newest" },
            ]}
          />
          <DropDown
            dropdownLabel="Type"
            options={[
              { value: "Type" },
              { value: "Least Liked" },
              { value: "Least Viewed" },
              { value: "Most Liked  " },

              { value: "Newest" },
            ]}
          />
          <DropDown
            dropdownLabel="Duration"
            options={[
              { value: "Duration" },
              { value: "Least Viewed" },
              { value: "Most Liked  " },
              { value: "Most Viewed" },
              { value: "Newest" },
            ]}
          />
        </div>
        <ProfileModules
          course="Course"
          courseTitle="Diversity, Equity and Inclusion in Workfff"
          instructorImg={isnt1}
          InstructorName="Benjamin Smith"
          lesson="53m / lesson"
          countLess="5 lessons"
          btnLabel="Edit Module"
          btnLabel2="Delete Module"
          btnLabel3="Archieve course"
          poster={exp1}
          source={exp1}
        />
        <ProfileModules
          course="Course"
          courseTitle="Diversity, Equity and Inclusion in Workfff"
          instructorImg={isnt1}
          InstructorName="Benjamin Smith"
          lesson="53m / lesson"
          countLess="5 lessons"
          btnLabel="Edit Module"
          btnLabel2="Delete Module"
          btnLabel3="Archieve course"
          poster={exp1}
          source={exp1}
        />
        <ProfileModules
          course="Course"
          courseTitle="Diversity, Equity and Inclusion in Workfff"
          instructorImg={isnt1}
          InstructorName="Benjamin Smith"
          lesson="53m / lesson"
          countLess="5 lessons"
          btnLabel="Edit Module"
          btnLabel2="Delete Module"
          btnLabel3="Archieve course"
          poster={exp1}
          source={exp1}
        />
      </div>
    </>
  );
};

export default UserProfile;
