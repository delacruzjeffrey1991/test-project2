import React from "react";
import user1 from "../../../assets/images/user-1.png";
import Styles from "./styles.module.scss";
import global from "src/global.module.scss";
const TaskList = (props: any) => {
  return (
    <div className={`${"d-flex justify-content-between"} ${Styles.taskList}`}>
      <div className="task-name-date">
        <p className={`${global.f16} ${global.cBlack}`}> {props.taskName} </p>
        <p className={`${global.f14} ${global.cGray}`}>
          Due {props.taskDueDate}
        </p>
      </div>
      <div className="task-rate-users">
        <p
          className={`
          ${
            props.taskProgress >= 0 && props.taskProgress < 25
              ? global.cGray
              : ""
          }  
          ${
            props.taskProgress >= 25 && props.taskProgress < 50
              ? global.cSecondary
              : ""
          }
          ${
            props.taskProgress >= 50 && props.taskProgress < 75
              ? global.cPrimary
              : ""
          }
          ${
            props.taskProgress >= 75 && props.taskProgress < 100
              ? global.cYellow
              : ""
          }
          `}
        >
          {props.taskProgress} %
        </p>
        <ul className="users-list d-flex">
          <div className={`${global.roundImg} ${global.roundImg20}`}>
            <img src={user1} alt="user" />
          </div>
        </ul>
      </div>
    </div>
  );
};

export default TaskList;
