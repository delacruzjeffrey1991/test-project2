import React from "react";
import { Col, Row } from "react-bootstrap";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
// import global from "../../global.module.scss";
import Styles from "./styles.module.scss";
import MyRewards from "./MyRewards";
import AllTeams from "./AllTeams";
import TeamChallenges from "./TeamChallenges";
import TableWrapper from "./TableWrapper";

function Rewards() {
  return (
    <Row>
      <Col md={12}>
        <Tabs
          defaultActiveKey="myrewards"
          id="uncontrolled-tab-example"
          className={`${Styles.rewardsTabs} ${'rewardsTabsqa'}`}
        >
          <Tab eventKey="myrewards" title="My Rewards" className="navqa">
            <MyRewards />
          </Tab>
          <Tab eventKey="allTeams" title="All Teams">
            <AllTeams />
          </Tab>
          <Tab eventKey="teamChallenges" title="Team challenges">
            <TeamChallenges />
          </Tab>
          <Tab eventKey="leaderboard" title="Leaderboard">
            <TableWrapper />
          </Tab>
        </Tabs>
      </Col>
    </Row>
  );
}

export default Rewards;
