import React from "react";
import { Col, Row } from "react-bootstrap";

import global from "../../global.module.scss";
import Styles from "./styles.module.scss";
import Heading from "../../components/common/Heading";
import Button from "../../components/common/Button";

import userImg from "../../assets/images/p6.png";
import TextFieldQa from "../../components/common/TextFieldQa";
import RoomCard from "../../components/common/RoomCard";
import FilterBtn from "../../components/common/FilterBtn";

function NewEvent() {
  const filterOptions = [
    {
      value: '1',
      label:'Newest'
    },
    {
      value: '2',
      label:'Oldest'
    }
  ]
  return (
    <Row>
      <Col md={8}>
        <div>
          <div className={Styles.fieldWrapper}>
            <div className={Styles.borderBottom}>
              <Heading
                label="Join Social Media Examiner live..."
                variant="heading5"
              />
            </div>
            <div
              className={`${global.dflexCenter} ${Styles.borderBottom} ${Styles.hostWrapper}`}
            >
              <Heading label="With" variant="heading5" />
              <div className={`${global.roundImg} ${global.roundImg30}`}>
                <img src={userImg} alt="User" />
              </div>
              <Heading label="Brian I. Wilcox" variant="heading5" />
            </div>
            <div>
              <TextFieldQa
                variant="unbordered"
                placeholder="Add a Co-host or Guest"
              />
            </div>
          </div>

          <div className={`${Styles.fieldWrapper}`}>
            <div className={`${Styles.borderBottom} ${Styles.flexChild}`}>
              <TextFieldQa
                variant="unbordered"
                label="Date"
                placeholder="Today"
              />
            </div>
            <div className={`${Styles.flexChild}`}>
              <TextFieldQa
                variant="unbordered"
                label="Time"
                placeholder="6:00 PM"
              />
            </div>
          </div>

          <div className={`${Styles.fieldWrapper} ${Styles.flexChild}`}>
            <TextFieldQa
              variant="unbordered"
              label="Host Group"
              placeholder="None"
            />
          </div>

          <div className={`${Styles.fieldWrapper} ${Styles.descpField}`}>
            <TextFieldQa variant="unbordered" placeholder="Description" />
          </div>

          <div className={Styles.btnContinue}>
            <Button label="Continue" variant="secondary" size="large" />
          </div>
        </div>
      </Col>
      <Col md={4}>
        <div className={`${Styles.roomEventsCards} ${'px-4'}`}>
          <Heading label='Recent' variant='heading3' />
          <div className={`${global.dflexCenter} ${Styles.roomEventsFilter} ${'gap-2'}`}>
            <Heading label='Sort' variant='heading4' color="grayText" />
            <FilterBtn label='Recent' option={filterOptions} />
          </div>
          <RoomCard
            roomName="Room Name Here"
            room_description="Short description here, perspic unde omnis iste natus"
          />
          <RoomCard
            roomName="Room Name Here"
            room_description="Short description here, perspic unde omnis iste natus"
          />
          <RoomCard
            roomName="Room Name Here"
            room_description="Short description here, perspic unde omnis iste natus"
          />
          
        </div>
      </Col>
    </Row>
  );
}

export default NewEvent;
