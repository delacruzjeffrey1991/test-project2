import React from 'react'
import Styles from './styles.module.scss'
function ProfileCount(
  {
    variant = 'primary',
    ...props
  }
) {
  return (
    <div className={Styles.countDiv}>
      <span
        className={` ${Styles.count} ${Styles[variant]} `}>
        {props.count}
      </span>
      <span className={Styles.text}>
        {props.text}
      </span>
    </div>
  )
}
export default ProfileCount