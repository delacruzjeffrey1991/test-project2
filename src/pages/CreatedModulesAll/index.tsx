import React from "react";
import Styles from "./Styles.module.scss";
import { Container, Row, Col } from "react-bootstrap";
import isnt1 from "../../assets/images/inst1.png";
import CreatedModules from "../CreatedModules";
import exp1 from "../../assets/images/exp1.png";
import img04 from "../../assets/images/img-0004.png";
import ctV from "../../assets/images/ct-video.png";
import FilterBox from "../../components/common/FilterBox";

const CreatedModulesAll = () => {
  return (
    <>
      <FilterBox />
      <CreatedModules
        course="Course"
        courseTitle="Diversity, Equity and Inclusion"
        instructorImg={isnt1}
        InstructorName="Benjamin Smith"
        insSub="Instructor"
        lesson="53m / lesson"
        countLess="5 lessons"
        btnLabel="Edit Module"
        btnLabel2="Delete Module"
        poster={exp1}
        source={exp1}
      />
      <CreatedModules
        course="Course"
        courseTitle="Talent Management & Organization Effectiveness"
        instructorImg={img04}
        InstructorName="Ayaka John"
        insSub="Instructor"
        lesson="1hr 30m / lesson"
        countLess="2 lessons"
        btnLabel="Edit Module"
        btnLabel2="Delete Module"
        poster={ctV}
        source={ctV}
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
        poster={exp1}
        source={exp1}
      />

      <CreatedModules
        course="Course"
        courseTitle="Employee Management"
        instructorImg={img04}
        InstructorName="Nud Williams"
        insSub="Instructor"
        lesson="53m / lesson"
        countLess="5 lessons"
        btnLabel="Edit Module"
        btnLabel2="Delete Module"
        poster={ctV}
        source={ctV}
      />

      <CreatedModules
        course="Video"
        courseTitle="Employee Management"
        instructorImg={img04}
        InstructorName="Nud Williams"
        insSub="Instructor"
        lesson="53m / lesson"
        countLess="5 lessons"
        btnLabel="Edit Module"
        btnLabel2="Delete Module"
        poster={ctV}
        source={ctV}
      />
    </>
  );
};

export default CreatedModulesAll;
