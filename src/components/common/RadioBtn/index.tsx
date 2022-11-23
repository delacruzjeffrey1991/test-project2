import React from "react";
import Styles from './styles.module.scss'

function RadioBtn(
    {
        type = 'radio',
        name='gender',
        value='male',
        id='gender',
      
        ...props
    }
) {
    return (
        <>
            <div className={Styles.RadioBtn}>
            <input type={type} placeholder={`${name}`} value={`${value}`} />
            { props.label ? <label htmlFor="inp"> {props.label} </label> : '' }
            </div>
        </>
    );
}



export default RadioBtn;