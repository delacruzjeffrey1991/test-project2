import React from "react";
import Heading from "../Heading";
import Styles from "./styles.module.scss";
import global from "../../../global.module.scss";

import user1 from '../../../assets/images/user-1.png'
import user2 from '../../../assets/images/user-2.png'


function RecentTransaction() {
  return (
    <div className={Styles.recentTransactionBox}>
      <Heading label='Recent Transaction' variant="heading5" />
      <div className={Styles.points}>
        <div className={`${global.roundImg} ${global.roundImg70}`}>
          <img src={user1} alt="" className={global.fullImg} />
        </div>
        <div className={Styles.amount}>
          <Heading label='Amount' variant="heading4" />
          <div className={Styles.dotLines}>
            <span></span>
            <span></span>
            <span className={Styles.center}>
              <img src="assets-qa/images/arrows center.svg" alt="" />
            </span>
            <span></span>
            <span className={Styles.last}></span>
          </div>
          <Heading label='13,500 Points' variant="heading4" />
        </div>
        <div className={`${global.roundImg} ${global.roundImg70}`}>
          <img src={user2} alt="" className={global.fullImg} />
        </div>
      </div>
    </div>
  );
}

export default RecentTransaction;
