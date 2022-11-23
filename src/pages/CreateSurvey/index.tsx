import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import SurveyCreatorWidget from "src/components/Survey/SurveyCreator/SurveyCreator";
import { json } from "src/constants/survey"
import global from "../../global.module.scss";
import Styles from "./styles.module.scss";
import Button from "../../components/common/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

function Surveys() {
  return (
    <Container>
      <Row>
        <Col md={6}>
          <h1>Create a Survey</h1>
        </Col>
        <Col md={6}></Col>
      </Row>
      <Row>
        <Col md={12}>
          <SurveyCreatorWidget json={json} />
        </Col>
      </Row>
    </Container>
  );
}

export default Surveys;
