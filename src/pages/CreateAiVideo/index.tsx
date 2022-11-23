import React from "react";
import Styles from "./styles.module.scss";
import { Container, Row, Col } from "react-bootstrap";
import VideoBox from "../../components/common/VideoBox";
import exp1 from "../../assets/images/exp1.png";
import CourseTitleDesc from "../../components/common/CourseTitleDesc";
import { BiUpload } from "react-icons/bi";
import Button from "../../components/common/Button";
import Input from "../../components/common/Inputqa";
import Heading from "../../components/common/Heading";
import UploadButton from "../../components/common/uploadButton";
// import video1 from "../../../assets-qa/videos/digital-marketing.mp4";
import { FiVideo } from "react-icons/fi";
import LabelWithInput from "../../components/common/LabelWithInput";
import { Link } from "react-router-dom";

function createAiVideo() {
  return (
    <>
      <Container>
        <h2 className={Styles.pageHeadings}> Create New Module</h2>

        <Row>
          <Col md={8}>
            <Heading label="Upload Video" />
            <div
              className={`${Styles.uploadfilescontainer}  ${Styles.createcourse} `}
            >
              <div className={Styles.dragfilearea}>
                <div className={Styles.btn1}>
                  <FiVideo className={Styles.videoIcon} />
                  <UploadButton
                    type="file"
                    label=" Upload a video"
                    icon={<BiUpload />}
                    size="large"
                    dragTxt="or drag & drop"
                  />
                </div>
              </div>

              <Heading label="or" variant="centered" />

              <Heading label="Create an AI Video" />

              <div className={Styles.dragfilearea}>
                <div className={Styles.btn1}>
                  <FiVideo className={Styles.videoIcon} />
                  <UploadButton
                    type="file"
                    label=" Upload a video"
                    icon={<BiUpload />}
                    size="large"
                    dragTxt="or drag & drop"
                  />
                </div>
              </div>

              <div className={Styles.buttons}>
                <div>
                  <Button label="Publish Module" size="large" />
                </div>
                <div>
                  <Link to="/user/create-module-learning">
                    <Button
                      label="Archive Module"
                      size="large"
                      variant="outlined"
                      color="black"
                    />
                  </Link>
                </div>
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
                courseTitle="Diversity   Equity and Inclusion in Work"
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
    </>
  );
}

export default createAiVideo;
