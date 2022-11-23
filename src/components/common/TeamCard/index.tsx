import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";

import global from "../../../global.module.scss";
import Styles from "./styles.module.scss";
import UserImg from "../UserImg";

import userImg1 from "../../../assets/images/user-1.png";
import userImg2 from "../../../assets/images/user-2.png";
import userImgp1 from "../../../assets/images/p1.png";
import userImgp2 from "../../../assets/images/p2.png";
import userImgp3 from "../../../assets/images/p3.png";
import userImgp4 from "../../../assets/images/p4.png";
import userImgp5 from "../../../assets/images/p5.png";
import IconButton from "../IconButton";


function TeamCard(
  {variant='primary'}
) {
  return (
    <div className={`${global.dflexCenter} ${Styles.teamWraper} ${Styles[variant]}`}>
      <div className={Styles.teamTxt}>
        <h2>Team Alpha</h2>
        <h3>45.12%</h3>
        <p>Earn Rate</p>
      </div>
      <div className={Styles.teamProfile}>
        <UserImg userImage={userImg2} username='Ayaka' verified={true} />
        <UserImg userImage={userImgp1} username='Mika' verified={true} />
        <UserImg userImage={userImgp2} username='James ' verified={true} />
        <UserImg userImage={userImg1} username='Jason'  />
        <UserImg userImage={userImgp3} username='Jenny'  />
        <UserImg userImage={userImgp4} username='George'  />
        <UserImg userImage={userImgp5} username='Nud'  />
      </div>
      <div className={Styles.playBtn}>
      <IconButton icon={ <FontAwesomeIcon icon={faPlayCircle} /> } />
      </div>
    </div>
  );
}

export default TeamCard;
