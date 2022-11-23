import React from "react";
import LabelWithInput from "../../components/common/LabelWithInput";

import Heading from "../../components/common/Heading";
import { Form, Link } from "react-router-dom";
import SelectOptions from "../../components/common/SelectOptions";
import { Col, Container, Row } from "react-bootstrap";
import VideoBox from "../../components/common/VideoBox";
import CourseTitleDesc from "../../components/common/CourseTitleDesc";
import exp1 from "../../assets/images/exp1.png";
import Styles from "./styles.module.scss";
import { GrAttachment } from "react-icons/gr";
import UploadButton from "../../components/common/uploadButton";
import { BiUpload } from "react-icons/bi";

import Button from "../../components/common/Button";

function EditCourseForm() {
  return (
    <Container>
      <Row>
        <Col md={8}>
          <Heading label="Create New Course" variant="heading1" />
          <Form>
            <LabelWithInput
              type="text"
              label="Title of the module"
              placeholder=" "
            />
            <SelectOptions
              type="text"
              label="Types of Module"
              placeholder=" "
              option1="Course"
              option2="Video"
            />
            <LabelWithInput
              type="text"
              label="Number of Lessons"
              placeholder=" "
            />
            <LabelWithInput type="text" label="Time Duration" placeholder=" " />
            <LabelWithInput type="text" label="Instructor" placeholder=" " />
            <LabelWithInput
              type="text"
              label="Course Details"
              placeholder=" "
            />
          </Form>

          <div className={Styles.mt3}>
            <Heading label="Upload file attachment/s" />
          </div>
          <div
            className={`${Styles.uploadfilescontainer}  ${Styles.createcourse} `}
          >
            <div className={Styles.dragfilearea}>
              <div className={Styles.btn1}>
                <GrAttachment className={Styles.videoIcon} />
                <UploadButton
                  type="file"
                  label=" Upload Files"
                  icon={<BiUpload />}
                  size="large"
                  dragTxt="or drag & drop"
                />
              </div>
            </div>

            <div className={Styles.buttonDiv}>
              <Button label="Save Changes" size="large" variant="saveBtn" />
            </div>
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
    </Container>
  );
}

export default EditCourseForm;
