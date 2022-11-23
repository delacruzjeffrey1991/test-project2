import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Styles from "./styles.module.scss";
import { Container, Row, Col } from "react-bootstrap";
import VideoBox from "../../components/common/VideoBox";
import exp1 from "../../assets/images/exp1.png";
import CourseTitleDesc from "../../components/common/CourseTitleDesc";
import { AiOutlinePlus } from "react-icons/ai";
import { brandAuditFetchAction } from "src/store/apps/NewCourseForm";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "src/store";

import isnt1 from "../../assets/images/inst1.png";
import Button from "../../components/common/Button";

function Learning() {
  const dispatch = useDispatch<AppDispatch>();
  const { learningCourses } = useSelector((state: any) => state.learningModule);

  useEffect(() => {
    dispatch(brandAuditFetchAction(dispatch));
  }, [dispatch]);

  const learningData = learningCourses.map((ele: any, idx: number) => {
    return (
      <div key={idx} className={Styles.Courseslider}>
        <VideoBox poster={exp1} source={exp1} />
        <CourseTitleDesc course="Course" courseTitle={ele.title} views="10,061 views" />
      </div>
    );
  });
  return (
    <>
      <Container>
        <h2 className={Styles.pageHeadings}> Learning</h2>

        <Row>
          <Col md={12}>
            <div className={Styles.btn1}>
              <Link to="/user/new-course-form">
                <Button label=" Create New Module " icon={<AiOutlinePlus />} size="large" />
              </Link>
            </div>
          </Col>
        </Row>

        <Row>
          <Col md={8}>
            <div className={Styles.videoTxt}>
              <VideoBox poster={exp1} source={exp1} />
              <CourseTitleDesc
                course="Course"
                courseTitle="Diversity, Equity and Inclusion in Work"
                instructorImg={isnt1}
                InstructorName="Benjamin Smith"
                insSub="Instructor"
                lesson="53m / lesson"
                countLess="5 lessons"
              />
            </div>
          </Col>

          <Col md={4}>
            <div className={Styles.btn2}>
              <Button label=" Continue Module " size="large" />
              <Button label="Delete module" size="large" variant="outlined" color="secondary" />
            </div>
          </Col>
        </Row>
      </Container>

      <div className={Styles.modules}>
        <Row>
          <h2 className={Styles.pageHeadings}> Created Modules</h2>
          <div className={Styles.CoursesliderMain}>
            {/* <div className={Styles.Courseslider}>
              <VideoBox poster={exp1} source={exp1} />
              <CourseTitleDesc course="Course" courseTitle="Diversity, Equity and Inclusion in Work" views="10,061 views" />
            </div>

            <div className={Styles.Courseslider}>
              <VideoBox poster={exp1} source={exp1} />
              <CourseTitleDesc course="Course" courseTitle="Diversity, Equity and Inclusion in Work" views="10,061 views" />
            </div>

            <div className={Styles.Courseslider}>
              <VideoBox poster={exp1} source={exp1} />
              <CourseTitleDesc course="Course" courseTitle="Diversity, Equity and Inclusion in Work" />
            </div> */}
            {learningData}
          </div>
        </Row>
      </div>
    </>
  );
}

export default Learning;
