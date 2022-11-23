import React from "react";
import Styles from "./styles.module.scss";

const VideoBox = (props:any) => {
  return (
    <div className={`${Styles.expvideo} ${Styles.uploadMain}`}>
      <video poster={props.poster}  id="cvideo">
        <source src={props.source} />
      </video>
      <img src={props.image} alt="" id="vbtn" />
    </div>
  );
};

export default VideoBox;