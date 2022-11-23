import React, { useState } from "react";
import Styles from "./styles.module.scss";


function PossesCard(props: any) {

  return (
    <div style={{ backgroundColor: props.variant, color: props.text_color }} className={`${Styles.possBox} ${Styles[props.variant]} ${props.checked ? Styles.checkedBox : ''} ${props.variant === "#fff" ? Styles.blackBorder : ""}`}>
      <h3>{props.title}</h3>
      <div className={Styles.possImg}>
        <img src={props.image} alt="card" />
      </div>
      <p>{props.text}</p>
      <div className={Styles.possContent}>
        <ul>
          {props?.points?.map((point: any, i: number) => <li key={i}>{point}</li>)}
        </ul>
        <div className={Styles.chkboxBtn}>
          <input type="checkbox" id={props.inpId} checked={props.checked} className={Styles.chkInp} onChange={(e) => props.selectPossess(e, props.inpId)} />
          <label htmlFor={props.inpId}></label>
        </div>
      </div>
    </div>
  );
}

export default PossesCard;
