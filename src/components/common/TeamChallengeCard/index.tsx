import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEllipsisVertical,
  faHeart,
  faMessage,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

import global from "../../../global.module.scss";
import Styles from "./styles.module.scss";

import imgCard from "../../../assets/images/Image-card.png";

import IconButton from "../IconButton";
import Button from "../Button";

function TeamChallengeCard(props:any) {
  return (
    <div className={Styles.challengeCards}>
      <div className={Styles.challengeCardsImg}>
        <img src={imgCard} alt="..." className={global.fullImg} />
      </div>
      <div className={Styles.cardBody}>
        <div className={`${global.dflexCenter} ${Styles.publishDiv}`}>
          <p className={global.pGray}> Published • {props.published_date} </p>
          <span>
            <FontAwesomeIcon icon={faEllipsisVertical} />
          </span>
        </div>
        <p className={Styles.cardText}>
          {props.title}
        </p>
        <div className={`${Styles.comment} ${global.dflexCenter}`}>
          <ul className='d-flex gap-3'>
            <li>
              <span>
                <FontAwesomeIcon icon={faHeart} />
              </span>
              <span> {props.likes} </span>
            </li>
            <li>
              <span>
                <FontAwesomeIcon icon={faMessage} />
              </span>
              <span> {props.comments} </span>
            </li>
          </ul>
          <Button
            size="smallBtn"
            label="Read More"
            icon={<FontAwesomeIcon icon={faChevronRight} />}
            variant="transparent"
            color="secondary"
          />
        </div>
      </div>
    </div>
  );
}

export default TeamChallengeCard;
