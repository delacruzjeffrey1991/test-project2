import React from "react";
import Styles from "./Styles.module.scss";
import Button from "../Button";
import Heading from "../Heading";
import { Container, Row, Col } from "react-bootstrap";
import CourseTitleDesc from "../CourseTitleDesc";
import exp1 from "../../assets/images/exp1.png";
import VideoBox from "../VideoBox";
import isnt1 from "../../assets/images/inst1.png";
import { Link } from "react-router-dom";

const ProfileModules = (props: any) => {
  const btnLabel3 = props.btnLabel3;

  const btn = () => {
    if (btnLabel3) {
      return <Button label={props.btnLabel3} variant="dark" size="large" />;
    }
  };

  return (
    <Container className={Styles.modules}>
      <Heading label={props.heading1} variant="heading1" />
      <Row>
        <Col md={4}>
          <div className={`${Styles.videoTxt}`}>
            <VideoBox poster={props.poster} source={props.source} />
          </div>
        </Col>
        <Col md={5} className={Styles.pl_O}>
          <CourseTitleDesc
            course={props.course}
            courseTitle={props.courseTitle}
            insSub={props.insSub}
          />
          <div className={Styles.courseinfo}>
            <p>{props.lesson}</p>
            <p>{props.countLess}</p>
          </div>
        </Col>
        <Col md={3}>
          <div className={Styles.separator}>
            <div className={Styles.flexDiv}>
              <Button label={props.btnLabel} variant="primary" size="large" />
              <Button
                label={props.btnLabel2}
                variant="redOutlined"
                size="large"
              />
              {btn()}
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ProfileModules;
