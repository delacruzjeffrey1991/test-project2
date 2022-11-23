import React from "react";
import CreatedModules from "../CreatedModules";
import exp1 from "../../assets/images/exp1.png";
import isnt1 from "../../assets/images/inst1.png";
import Button from "../../components/common/Button";
import img04 from "../../assets/images/img-0004.png";
import ctV from "../../assets/images/ct-video.png";
import DropDown from "src/components/common/DropDown";
import { Dropdown } from "react-bootstrap";
import Styles from "./Styles.module.scss";

const SearchResults = () => {
  return (
    <>
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
        <DropDown
          dropdownLabel="Archived"
          options={[
            { value: "Archived" },
            { value: "Least Liked" },
            { value: "Most Liked  " },
            { value: "Most Viewed" },
            { value: "Newest" },
          ]}
        />
      </div>

      <CreatedModules
        course="Course"
        courseTitle="Diversity, Equity and Inclusion in Work"
        instructorImg={isnt1}
        InstructorName="Benjamin Smith"
        insSub="Instructor"
        lesson="53m / lesson"
        countLess="5 lessons"
        btnLabel="Edit Module"
        btnLabel2="Delete Module"
        btnLabel3="Archieve course"
        poster={exp1}
        source={exp1}
        likes="9,023 Likes"
        views="10,023 Views"
        postDate="Posted on 2022 June 12"
      />

      <CreatedModules
        course="Course"
        courseTitle="Diversity, Equity and Inclusion in Work"
        instructorImg={img04}
        InstructorName="Benjamin Smith"
        insSub="Instructor"
        lesson="53m / lesson"
        countLess="5 lessons"
        btnLabel="Edit Module"
        btnLabel2="Delete Module"
        btnLabel3="Archieve course"
        poster={ctV}
        source={ctV}
        likes="9,023 Likes"
        views="10,023 Views"
        postDate="Posted on 2022 June 12"
      />

      <CreatedModules
        course="Course"
        courseTitle="Diversity, Equity and Inclusion in Work"
        instructorImg={isnt1}
        InstructorName="Benjamin Smith"
        insSub="Instructor"
        lesson="53m / lesson"
        countLess="5 lessons"
        btnLabel="Edit Module"
        btnLabel2="Delete Module"
        btnLabel3="Archieve course"
        poster={exp1}
        source={exp1}
        likes="9,023 Likes"
        views="10,023 Views"
        postDate="Posted on 2022 June 12"
      />

      <CreatedModules
        course="Course"
        courseTitle="Diversity, Equity and Inclusion in Work"
        instructorImg={img04}
        InstructorName="Benjamin Smith"
        insSub="Instructor"
        lesson="53m / lesson"
        countLess="5 lessons"
        btnLabel="Edit Module"
        btnLabel2="Delete Module"
        btnLabel3="Archieve course"
        poster={ctV}
        source={ctV}
        likes="9,023 Likes"
        views="10,023 Views"
        postDate="Posted on 2022 June 12"
      />

      <CreatedModules
        course="Course"
        courseTitle="Diversity, Equity and Inclusion in Work"
        instructorImg={isnt1}
        InstructorName="Benjamin Smith"
        insSub="Instructor"
        lesson="53m / lesson"
        countLess="5 lessons"
        btnLabel="Edit Module"
        btnLabel2="Delete Module"
        btnLabel3="Archieve course"
        poster={exp1}
        source={exp1}
        likes="9,023 Likes"
        views="10,023 Views"
        postDate="Posted on 2022 June 12"
      />
    </>
  );
};

export default SearchResults;
