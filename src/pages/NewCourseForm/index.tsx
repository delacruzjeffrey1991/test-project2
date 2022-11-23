import React, { useEffect, useState } from "react";
import LabelWithInput from "../../components/common/LabelWithInput";

import Heading from "../../components/common/Heading";
import { Form, Link, useNavigate } from "react-router-dom";
import SelectOptions from "../../components/common/SelectOptions";
import { Col, Container, Row } from "react-bootstrap";
import VideoBox from "../../components/common/VideoBox";
import CourseTitleDesc from "../../components/common/CourseTitleDesc";
import exp1 from "../../assets/images/exp1.png";
import Styles from "./styles.module.scss";
import { GrAttachment } from "react-icons/gr";
import UploadButton from "../../components/common/uploadButton";
import { BiUpload } from "react-icons/bi";
import { postNewCourseForm, brandAuditFetchAction, updateNewCourseForm } from "src/store/apps/NewCourseForm";
import { InputText } from 'src/core/form'

import { useCourse } from "../../hooks/form/useCourse";

import { useDispatch, useSelector } from "react-redux";
import Button from "../../components/common/Button";
import { AppDispatch } from "src/store";

function NewCourseForm() {
  const [fieldValue, setFieldValue] = useState({
    title: "",
    number_of_lessons: "",
    moduleType: "course",
    duration: "",
    instructor: "",
    details: "",
    isPublish: true,
  });

  const options = [
    { name: "Course", value: "course" },
    { name: "Video", value: "video" },
  ];

  const { learningCourses } = useSelector((state: any) => state.learningModule);
  const {
    form: { handleSubmit, register, formState: { errors } },
    store,
    getCourses,
    getCourse,
    addCourse,
    updateCourse
  } = useCourse(null);

  // const dispatch = useDispatch<AppDispatch>();

  // useEffect(() => {
  //   dispatch(brandAuditFetchAction(dispatch));
  // }, [dispatch]);
  const onSubmit = async (data: any) => {
    console.log(data);
    // if (serviceId) {
    //   await updateAssignmentType(serviceId, data)
    // } else {
    //   await addAssignmentType(data);
    // }
  }

  const onChange = (e: any) => {
    setFieldValue({
      ...fieldValue,
      [e.target.name]: e.target.value,
    });
  };

  const navigate = useNavigate();
  // const handlerForm = () => {
  //   if (fieldValue.moduleType === "Video") {
  //     dispatch(updateNewCourseForm({ fieldValue, dispatch }));
  //     console.log("check");
  //     return;
  //   }
  //   delete fieldValue.moduleType;
  //   dispatch(postNewCourseForm({ fieldValue, dispatch }));
  // };

  // const learningData = learningCourses.map((ele: any, idx: number) => {
  //   return (
  //     <div key={idx} className={`${Styles.videoTxt}`}>
  //       <VideoBox poster={exp1} source={exp1} />
  //       <CourseTitleDesc course="Course" courseTitle={ele.title} views={ele.createdAt.toString()} />
  //     </div>
  //   );
  // });

  return (
    <Container>
      <Row>
        <Col md={8}>
          <Heading label="Create New Course" variant="heading1" />
          <form onSubmit={handleSubmit(onSubmit)} >
            <InputText
              type="text"
              label="Title of the module"
              name="title"
              placeholder=""
              register={register}
              errors={errors}
            />
            <SelectOptions
              type="text"
              label="Types of Module"
              placeholder=" "
              optionsData={options}
              onChange={onChange}
              name="moduleType"
            />
            {/* <InputText type="text" label="Number of Lessons" name="number_of_lessons" placeholder=" " /> */}
            {/* <InputText type="text" label="Time Duration" name="duration" placeholder=" " /> */}
            {/* <InputText type="text" label="Instructor" name="instructor" placeholder=" " /> */}
            {/* <InputText type="text" label="Course Details" name="details" placeholder=" " /> */}

            <div className={Styles.mt3}>
              <Heading label="Upload file attachment/s" />
            </div>
            <div className={`${Styles.uploadfilescontainer}  ${Styles.createcourse} `}>
              <div className={Styles.dragfilearea}>
                <div className={Styles.btn1}>
                  <GrAttachment className={Styles.videoIcon} />
                  <UploadButton type="file" label=" Upload Files" icon={<BiUpload />} size="large" dragTxt="or drag & drop" />
                </div>
              </div>

              <div className={Styles.buttonDiv} >
                <Button type="submit" label="Next" size="large" variant="primary" />
              </div>
            </div>
          </form>
        </Col>

        <Col md={4} className={Styles.recentList}>
          <Heading label="Recent Module" />
          {/* <div className={`${Styles.videoTxt}`}>
            <VideoBox poster={exp1} source={exp1} />
            <CourseTitleDesc course="Course" courseTitle="Diversity, Equity and Inclusion in Work" views="10,061 viewers. 2022 June 15" />
          </div>
          <div className={`${Styles.videoTxt}`}>
            <VideoBox poster={exp1} source={exp1} />
            <CourseTitleDesc course="Course" courseTitle="Diversity, Equity and Inclusion in Work" views="10,061 viewers. 2022 June 15" />
          </div>
          <div className={`${Styles.videoTxt}`}>
            <VideoBox poster={exp1} source={exp1} />
            <CourseTitleDesc course="Video" courseTitle="Diversity, Equity and Inclusion in Work" views="10,061 viewers. 2022 June 15" />
          </div>
          <div className={`${Styles.videoTxt}`}>
            <VideoBox poster={exp1} source={exp1} />
            <CourseTitleDesc course="Course" courseTitle="Diversity, Equity and Inclusion in Work" views="10,061 viewers. 2022 June 15" />
          </div> */}
          {/* {learningData} */}
        </Col>
      </Row>
    </Container>
  );
}

export default NewCourseForm;
