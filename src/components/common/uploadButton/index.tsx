import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import Styles from './styles.module.scss'

function UploadButton(
    {
        disable = false,
        variant = 'filled',
        color = 'primary',
        isLoading = false,
        size='medium',
        ...props
    }
) {
    return (
        <div>
        <button
            disabled={disable}
            className={`${Styles.qaBtn1} ${Styles[variant] } ${Styles[color]} ${Styles[size]}  ${isLoading ? Styles.isLoadinga : '' } `}
            onClick={props.onClick}
        >
           
            <span>{props.label}</span>

             {props.icon ? <span className={Styles.btnIcon}>   {props.icon} </span> : ""}
            {isLoading ? <span className={Styles.spinner}> <FontAwesomeIcon icon={faSpinner} />  </span> : ""}

        </button>
    <p>{props.dragTxt}</p>
    
        </div>
    );
}

export default UploadButton;
