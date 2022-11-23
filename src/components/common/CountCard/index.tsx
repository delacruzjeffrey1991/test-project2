import React from "react";
import Styles from "./styles.module.scss";
import global from "src/global.module.scss";


const CountCard = (
  {
    iconVariant = 'yellowIcon',
    ...props
  }:any
  ) => {
  return (
    <>
      <div className={`${global.dflexCenter} ${Styles.countCards} ${'gap-3'}`}>
        <div className={`${global.roundImg55} ${global.dflexCenter} ${Styles[iconVariant]} ${'f20 justify-content-center'}`}>
          { props.icon }
        </div>
        <div>
          <h2 className="f24 graphik-semibold text-left"> {props.count} </h2>
          <p className="f16 graphik-reg text-left"> {props.subHeading} </p>
        </div>
      </div>
    </>
  );
};

export default CountCard;
