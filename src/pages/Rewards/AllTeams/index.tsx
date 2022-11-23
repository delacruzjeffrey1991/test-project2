import React from "react";
import { Col, Row } from "react-bootstrap";
import RecentTransaction from "../../../components/common/RecentTransaction";
import BalanceCard from "../../../components/common/BalanceCard";

import global from "../../../global.module.scss";
import Styles from "./styles.module.scss";
import Heading from "../../../components/common/Heading";
import TextFieldQa from "../../../components/common/TextFieldQa";
import TextArea from "../../../components/common/TextArea";
import Button from "../../../components/common/Button";

import chartImg from "../../../assets/images/quick-trx-chart.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import TransactionList from "../../../components/common/TransactionList";
import TeamCard from "../../../components/common/TeamCard";

function AllTeams() {
  return (
    <Row>
      <TeamCard variant='primary' />
      <TeamCard variant='secondary' />
      <TeamCard variant='yellow' />
      <div className={Styles.allTeamBtns}>
        <Button label='Add Team' color="secondary" icon={ <FontAwesomeIcon icon={faCirclePlus} /> } />
        <Button label='Remove Team' variant="outlined" color="black" />
      </div>
    </Row>
  );
}

export default AllTeams;
