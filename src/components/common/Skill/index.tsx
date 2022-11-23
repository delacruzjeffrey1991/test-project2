import React from "react";
import Styles from './styles.module.scss'

function Skill(props:any) {
    return (
        <li className={Styles.skillItem}>
            <span className={Styles.icon}>
                {props.icon}
            </span>
            <span> {props.label} </span>
        </li>
    );
}

export default Skill;
