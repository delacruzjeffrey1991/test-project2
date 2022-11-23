import React from "react";
import Styles from "./Styles.module.scss";
import Button from "../../components/common/Button";
import Heading from "../../components/common/Heading";
import { Container, Row, Col } from "react-bootstrap";
import CourseTitleDesc from "../../components/common/CourseTitleDesc";
import exp1 from "../../assets/images/exp1.png";
import VideoBox from "../../components/common/VideoBox";
import isnt1 from "../../assets/images/inst1.png";
import { Link } from "react-router-dom";

const CreateModuleLearning = () => {
  return (
    <Container>
      <Heading label="Create New Module" variant="heading1" />
      <Row>
        <Col md={12}>
          <div className={Styles.flexDiv}>
            <Link to="/user/edit-course-form">
              <Button label=" Edit module " size="large" />
            </Link>
            <Button label=" Delete module " size="large" color="redOutlined" />
            <Link to="/user/create-module-learning">
              <Button label=" Archive module " size="large" color="outlined" />
            </Link>
          </div>
        </Col>
      </Row>

      <Row>
        <Col md={8}>
          <div className={Styles.learningCreate}>
            <VideoBox poster={exp1} source={exp1} />
            <CourseTitleDesc
              course="Course"
              courseTitle="Leadership and Organization Learning"
              views="Posted on 2022 June 16"
              cTitle="Part 1: Introduction"
            />
          </div>
        </Col>
        <Col md={4} className={Styles.recentList}>
          <Heading label="Recent Module" />
          <div className={`${Styles.videoTxt}`}>
            <VideoBox poster={exp1} source={exp1} />
            <CourseTitleDesc
              course="Course"
              courseTitle="Diversity, Equity and Inclusion in Work"
              views="10,061 viewers. 2022 June 15"
            />
          </div>
          <div className={`${Styles.videoTxt}`}>
            <VideoBox poster={exp1} source={exp1} />
            <CourseTitleDesc
              course="Course"
              courseTitle="Diversity, Equity and Inclusion in Work"
              views="10,061 viewers. 2022 June 15"
            />
          </div>
          <div className={`${Styles.videoTxt}`}>
            <VideoBox poster={exp1} source={exp1} />
            <CourseTitleDesc
              course="Video"
              courseTitle="Diversity, Equity and Inclusion in Work"
              views="10,061 viewers. 2022 June 15"
            />
          </div>
          <div className={`${Styles.videoTxt}`}>
            <VideoBox poster={exp1} source={exp1} />
            <CourseTitleDesc
              course="Course"
              courseTitle="Diversity, Equity and Inclusion in Work"
              views="10,061 viewers. 2022 June 15"
            />
          </div>
        </Col>
      </Row>

      <Row className={Styles.learningCreatTxt}>
        <Col md={5}>
          <Heading label="Description" />
          <Heading label="Course Details:  " size="small" variant="heading5" />
          <p>
            Lorem Ipsum is simply dummy text of the printing and type standard
            dummy text ever since the 1500s, when an unknown printer took a
            galley of type and scrambled it to make a type specimen book. It has
            survived not only five centuries
          </p>

          <Heading label="Instructor: " size="small" variant="heading5" />
          <div className={Styles.videoTxt}>
            <CourseTitleDesc
              instructorImg={isnt1}
              InstructorName="Benjamin Smith"
              insSub="Instructor"
            />
          </div>
        </Col>
        <Col md={3} className={Styles.green}>
          <Heading
            label="Next is Lesson 2 of 4 "
            size="medium"
            variant="green"
          />
          <VideoBox poster={exp1} source={exp1} />
          <Heading
            label="Part 2: Effectiveness of Good Leadership  "
            size="small"
            variant="heading5"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default CreateModuleLearning;
