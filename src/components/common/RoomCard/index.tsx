import React, { FC } from "react";
import Heading from "../Heading";
import Styles from "./styles.module.scss";
import global from "../../../global.module.scss";


import userImg from "../../../assets/images/p6.png";

const RoomCard = (props:any) => {
  return (
    <div className={ `${global.cardBox} `}>
      <Heading label={props.roomName} />
      <p className={`${global.pGray} ${global.f16} ${'pb-2'}`}> {props.room_description} </p>
      <div className={`${global.dflexCenter}`}>
          <div className={`${global.roundImg} ${global.roundImg20}`}>
            <img src={userImg} alt="members" />
          </div>
          <div className={`${global.roundImg} ${global.roundImg20}`}>
            <img src={userImg} alt="members" />
          </div>
          <div className={`${global.roundImg} ${global.roundImg20}`}>
            <img src={userImg} alt="members" />
          </div>
      </div>
    </div>
  );
};

export default RoomCard;
