import React from "react";
import { Col, Row } from "react-bootstrap";
import TeamChallengeCard from "../../../components/common/TeamChallengeCard";

function TeamChallenges() {
  return (
    <Row>
      <Col md={12}>
        <div className='d-flex flex-wrap gap-3'>
          <TeamChallengeCard
            published_date="1 Feb 2022"
            title="You can put your daily challenge title here"
            likes="234"
            comments="23"
          />
          <TeamChallengeCard
            published_date="1 Feb 2022"
            title="You can put your daily challenge title here"
            likes="234"
            comments="23"
          />
          <TeamChallengeCard
            published_date="1 Feb 2022"
            title="You can put your daily challenge title here"
            likes="234"
            comments="23"
          />
          <TeamChallengeCard
            published_date="1 Feb 2022"
            title="You can put your daily challenge title here"
            likes="234"
            comments="23"
          />
          <TeamChallengeCard
            published_date="1 Feb 2022"
            title="You can put your daily challenge title here"
            likes="234"
            comments="23"
          />
          <TeamChallengeCard
            published_date="1 Feb 2022"
            title="You can put your daily challenge title here"
            likes="234"
            comments="23"
          />
          <TeamChallengeCard
            published_date="1 Feb 2022"
            title="You can put your daily challenge title here"
            likes="234"
            comments="23"
          />
          <TeamChallengeCard
            published_date="1 Feb 2022"
            title="You can put your daily challenge title here"
            likes="234"
            comments="23"
          />
          <TeamChallengeCard
            published_date="1 Feb 2022"
            title="You can put your daily challenge title here"
            likes="234"
            comments="23"
          />
          <TeamChallengeCard
            published_date="1 Feb 2022"
            title="You can put your daily challenge title here"
            likes="234"
            comments="23"
          />
        </div>
      </Col>
    </Row>
  );
}

export default TeamChallenges;
