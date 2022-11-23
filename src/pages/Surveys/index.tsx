import React from "react";
import { Col, Row } from "react-bootstrap";

import { Link } from "react-router-dom";

// import global from "../../global.module.scss";
import Styles from "./styles.module.scss";
import Button from "../../components/common/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

function Surveys() {
  return (
    <Row>
      <Col md={6}>
        <div className={Styles.createSurveyBtn}>
          <Link to={'/user/create-survey'}>
            <Button
              label="Create New Survey"
              variant="outlined"
              color="black"
              size="large"
              icon={<FontAwesomeIcon icon={faPlus} />}
            />
          </Link>
        </div>
      </Col>
      <Col md={6}></Col>
    </Row>
  );
}

export default Surveys;
