import React from "react";
import Styles from './styles.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import Button from "../../common/Button";

function FriendSuggestion(props:any) {
    return (
        <div className={Styles.FriendSuggestion}>
            <div className={Styles.userImg}>
                <img src={props.userImg} alt='user' />
            </div>
            <div className={Styles.userDetails}>
                <h4> {props.userName} </h4>
                {
                    props.courcesCount && 
                    <p>
                        <span> {props.courcesCount} Courses </span>
                        {
                            props.videosCount && <span> {props.videosCount} Videos </span>
                        }
                    </p>
                }
                <Button label={`Follow ${props.userName.split(' ')[0]}`} icon={<FontAwesomeIcon icon={faPlus} />} size="smallBtn" variant="followBtn" />
            </div>
        </div>
    );
}

export default FriendSuggestion;