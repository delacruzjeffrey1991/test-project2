import React from "react";
import Styles from "./styles.module.scss";

import img1 from '../../../assets/images/gift-icon.svg'
import img2 from '../../../assets/images/plus-circle.svg'

const BalanceCard = () => {
  return (
    <div className={Styles.balanceBox}>
      <div className={Styles.boxHeader}>
        <span>
          <img src={img1} alt="gift" />
        </span>
        <h2>Balance</h2>
      </div>
      <div className={Styles.contentBody}>
        <h3>
          14,510 <span>Points</span>
        </h3>
        <span className={Styles.icon}>
          <img src={img2} alt="plus" />
        </span>
      </div>
    </div>
  );
};

export default BalanceCard;
