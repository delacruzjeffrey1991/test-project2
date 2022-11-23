import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { BiFilterAlt } from "react-icons/bi";
import Heading from "../Heading";
import Button from "../Button";
import { Checkbox } from "../Checkbox";
import Styles from "./styles.module.scss";

const FilterBox = () => {
  return (
    <>
      <div className={Styles.filterHead}>
        <div className={Styles.start}>
          <BiFilterAlt className={Styles.icon} />
          <Heading label="Filter" />
        </div>
        <div className={Styles.end}>
          <Button label="Apply Filter" />
          <Button label="Reset Filter" variant="outlined" />
        </div>
      </div>

      <div className={Styles.checkboxMain}>
        <Checkbox label="Category 1" />
        <Checkbox label="Sub-Category 1" />
        <Checkbox label="Type 1" />
        <Checkbox label="Newest 1" />
      </div>
    </>
  );
};

export default FilterBox;
