import React from "react";
import { IoEarthOutline } from "react-icons/io5";
import { HiOutlineLockClosed } from "react-icons/hi";


import { Col, Row } from "react-bootstrap";

import global from "../../global.module.scss";
import Styles from "./styles.module.scss";
import Heading from "../../components/common/Heading";
import Button from "../../components/common/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMicrophone, faVideo, faPlus } from "@fortawesome/free-solid-svg-icons";

import linkedImg from '../../assets/images/linkedImg.png'
import { useNavigate } from "react-router-dom";

function CreateNew() {
  const navigate = useNavigate()
  return (
    <Row>
      <Col md={6}>
        <div className={Styles.startRoomDiv}>
          <Heading label="Start a Room" variant="heading1" />
          <Heading label="Select type of discussion" variant="heading5" />
          <Button
            label=" Start Voice Call"
            icon={<FontAwesomeIcon icon={faMicrophone} />}
            variant="outlined"
            color="darkGrayColor"
            size="large"
            onClick={()=> navigate('/user/new-event') }
          />
          <Button
            label=" Start Video Call"
            icon={<FontAwesomeIcon icon={faVideo} />}
            variant="outlined"
            color="darkGrayColor"
            size="large"
            onClick={()=> navigate('/user/new-event') }
          />
          <div>
            <Heading label="Select your privacy" variant="heading5" />
            <div className={`${global.dflexCenter } ${'gap-3'} ${Styles.selectPrivacyMain}`}>
              <div className={`${global.dflexCenter} ${'gap-2'} ${Styles.selectPrivacy} ${Styles.active}`}>
                <IoEarthOutline />
                <span>Open</span>
              </div>
              <div className={`${global.dflexCenter} ${'gap-2'} ${Styles.selectPrivacy}`}>
                <img src={linkedImg} alt='Social' />
                <span>Social</span>
              </div>
              <div className={`${global.dflexCenter} ${'gap-2'} ${Styles.selectPrivacy}`}>
                <HiOutlineLockClosed />
                <span>Closed</span>
              </div>
            </div>
          </div>
        </div>
      </Col>
      <Col md={6}>
      <div className={Styles.creatBtnsDiv}>
          <Heading label="Create" variant="heading1" />
          <Button
            label=" Survey"
            icon={<FontAwesomeIcon icon={faPlus} />}
            variant="outlined"
            color="darkGrayColor"
            size="large"
          />
          <Button
            label=" Course"
            icon={<FontAwesomeIcon icon={faPlus} />}
            variant="outlined"
            color="darkGrayColor"
            size="large"
          />
          <Button
            label=" Rewards Program "
            icon={<FontAwesomeIcon icon={faPlus} />}
            variant="outlined"
            color="darkGrayColor"
            size="large"
          />
          <Button
            label=" Community "
            icon={<FontAwesomeIcon icon={faPlus} />}
            variant="outlined"
            color="darkGrayColor"
            size="large"
          />
          <Button
            label=" Campaign  "
            icon={<FontAwesomeIcon icon={faPlus} />}
            variant="outlined"
            color="darkGrayColor"
            size="large"
          />
          <Button
            label=" Workspace  "
            icon={<FontAwesomeIcon icon={faPlus} />}
            variant="outlined"
            color="darkGrayColor"
            size="large"
          />
          
        </div>
      </Col>
    </Row>
  );
}

export default CreateNew;
