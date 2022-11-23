import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";

import global from "../../../global.module.scss";
import Styles from "./styles.module.scss";
import userImg1 from "../../../assets/images/user-1.png";
import userImg2 from "../../../assets/images/user-2.png";
import userImgp1 from "../../../assets/images/p1.png";
import userImgp2 from "../../../assets/images/p2.png";
import userImgp3 from "../../../assets/images/p3.png";
import userImgp4 from "../../../assets/images/p4.png";
import userImgp5 from "../../../assets/images/p5.png";
import IconButton from "../../../components/common/IconButton";
import { Table } from "react-bootstrap";

function TableWrapper({ variant = "bgSecondary" }) {
  return (
    <div className={`${Styles.tableWrapperMain} `}>
      <Table hover className={Styles.tablemain}>
        <thead className={global[variant]}>
          <th>Leaders</th>
          <th>Employee ID</th>
          <th>Date Employed</th>
          <th>Gender</th>
          <th>Position</th>
          <th>Team</th>
          <th>Points</th>
          <th>Action</th>
        </thead>
        <tbody>
          
          <tr>
            <td>
              <div className={`${global.dflexCenter} ${"gap-2"} `}>
                <span className={`${global.roundImg} ${global.roundImg30}`}>
                  <img src={userImg2} alt="" />
                </span>
                <span>Albert Flores </span>
              </div>
            </td>
            <td>12342111</td>
            <td>Jun 2018</td>
            <td>Male</td>
            <td>Manager</td>
            <td>Team Alpha</td>
            <td>1,214,178</td>
            <td>
              <IconButton icon={<FontAwesomeIcon icon={faEllipsisH} />} />
            </td>
          </tr>

          <tr>
            <td>
              <div className={`${global.dflexCenter} ${"gap-2"} `}>
                <span className={`${global.roundImg} ${global.roundImg30}`}>
                  <img src={userImgp1} alt="" />
                </span>
                <span>Albert Flores </span>
              </div>
            </td>
            <td>12342111</td>
            <td>Jun 2018</td>
            <td>Male</td>
            <td>Manager</td>
            <td>Team Alpha</td>
            <td>1,214,178</td>
            <td>
              <IconButton icon={<FontAwesomeIcon icon={faEllipsisH} />} />
            </td>
          </tr>

          <tr>
            <td>
              <div className={`${global.dflexCenter} ${"gap-2"} `}>
                <span className={`${global.roundImg} ${global.roundImg30}`}>
                  <img src={userImgp2} alt="" />
                </span>
                <span>Albert Flores </span>
              </div>
            </td>
            <td>12342111</td>
            <td>Jun 2018</td>
            <td>Male</td>
            <td>Manager</td>
            <td>Team Alpha</td>
            <td>1,214,178</td>
            <td>
              <IconButton icon={<FontAwesomeIcon icon={faEllipsisH} />} />
            </td>
          </tr>

          <tr>
            <td>
              <div className={`${global.dflexCenter} ${"gap-2"} `}>
                <span className={`${global.roundImg} ${global.roundImg30}`}>
                  <img src={userImgp3} alt="" />
                </span>
                <span>Albert Flores </span>
              </div>
            </td>
            <td>12342111</td>
            <td>Jun 2018</td>
            <td>Male</td>
            <td>Manager</td>
            <td>Team Alpha</td>
            <td>1,214,178</td>
            <td>
              <IconButton icon={<FontAwesomeIcon icon={faEllipsisH} />} />
            </td>
          </tr>

          <tr>
            <td>
              <div className={`${global.dflexCenter} ${"gap-2"} `}>
                <span className={`${global.roundImg} ${global.roundImg30}`}>
                  <img src={userImgp4} alt="" />
                </span>
                <span>Albert Flores </span>
              </div>
            </td>
            <td>12342111</td>
            <td>Jun 2018</td>
            <td>Male</td>
            <td>Manager</td>
            <td>Team Alpha</td>
            <td>1,214,178</td>
            <td>
              <IconButton icon={<FontAwesomeIcon icon={faEllipsisH} />} />
            </td>
          </tr>

        </tbody>
      </Table>
    </div>
  );
}

export default TableWrapper;
