import React from 'react'
import Styles from './styles.module.scss'
function BasicInfo(props:any) {
  return (
    <>
      <div className={Styles.userBasicInfo}>
        <div className={Styles.userProfileImg}>
          <img src={props.userImg} alt='Profile' className={Styles.imgFull} />
        </div>
        <h3 className={Styles.username}> {props.userName} </h3>
        <h4 className={Styles.userDesignation}> {props.designation} </h4>
        <p className={Styles.opentoText}> {props.OpenTo} </p>
      </div>
    </>
  )
}

export default BasicInfo