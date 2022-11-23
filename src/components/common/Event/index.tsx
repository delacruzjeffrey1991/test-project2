import React from "react";
import Styles from './styles.module.scss'

function Event(props:any) {
    return (
        <div className={Styles.eventMain}>
            <div className={`${Styles.dflexBt} ${Styles.eventHead}`}>
                <div className={Styles.ownerImg}>
                    <img src={props.ownerImg} alt='owner' />
                </div>
                <div>
                    <h4>
                        {props.eventTitle}
                    </h4>
                    <p>
                        {props.eventDetails}
                    </p>
                </div>
            </div>
            <div className={`${Styles.eventAnalytic} ${Styles.dflexBt}`}>
                <span> {props.eventSeen} Seen </span>
                {
                    props.seenedUser && 
                    <span className={Styles.allImgs}>
                        <div className={Styles.userImgsm}>
                            <img src={props.seenedUser} alt='user' />
                        </div>
                        <div className={Styles.userImgsm}>
                            <img src={props.seenedUser} alt='user' />
                        </div>
                        <div className={Styles.userImgsm}>
                            <img src={props.seenedUser} alt='user' />
                        </div>
                    </span>
                }
            </div>
        </div>
    );
}

export default Event;