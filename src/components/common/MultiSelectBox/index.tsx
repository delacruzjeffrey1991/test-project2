import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import IconButton from "../IconButton";

import global from "../../../global.module.scss";
import Styles from "./styles.module.scss";

function MultiSelectBox(props: any) {
  const [showDropdown, setShowDropdown] = useState(false);
  return (
    <div className={`${Styles.MultiSelectBoxWrapper} ${global.grayBox}`}>
      <div className={Styles.selectDropdown}>
        <div className={Styles.selectboxDisplay}>
          <span className={Styles.searchIcon}>
            <IconButton icon={<FontAwesomeIcon icon={faSearch} />} />
          </span>
          <span className={Styles.selectedItem}>
            Build a DE-I-mature Organization Build a DE-I-mature Organization
            Build a DE-I-mature Organization
          </span>
          <span
            className={Styles.dropdownIcon}
            onClick={() => setShowDropdown(!showDropdown)}
          >
            <FontAwesomeIcon icon={faAngleDown} />
          </span>
        </div>
        <ul className={`${Styles.dropdownMenu} ${ showDropdown ? Styles.show : '' }`}>
          <li className={Styles.selectList}>
            <label>
              <input type="checkbox" />
              <span>Attract and Retain the Best Talent</span>
            </label>
          </li>
          <li className={Styles.selectList}>
            <label>
              <input type="checkbox" />
              <span>Engage With Your People</span>
            </label>
          </li>
          <li className={Styles.selectList}>
            <label>
              <input type="checkbox" />
              <span>Develop and Train Effective Leaders</span>
            </label>
          </li>
          <li className={Styles.selectList}>
            <label>
              <input type="checkbox" />
              <span>Collaborate With Mission-driven Organizations</span>
            </label>
          </li>
          <li className={Styles.selectList}>
            <label>
              <input type="checkbox" />
              <span>Increase Employer Brand Awareness</span>
            </label>
          </li>
          <li className={Styles.selectList}>
            <label>
              <input type="checkbox" />
              <span>Build Trust with Current Candidates</span>
            </label>
          </li>
          <li className={Styles.selectList}>
            <label>
              <input type="checkbox" />
              <span>Increase Referral Rates</span>
            </label>
          </li>
        </ul>
      </div>
      <ul className={Styles.selectedList}>
        <li className={Styles.selectList}>
          <label>
            <input type="checkbox" />
            <span>Build a DE-I-mature Organization</span>
          </label>
        </li>
        <li className={Styles.selectList}>
          <label>
            <input type="checkbox" /> <span>Increase Referral Rates</span>
          </label>
        </li>
      </ul>
    </div>
  );
}

export default MultiSelectBox;
