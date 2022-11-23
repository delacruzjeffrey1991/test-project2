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
import { faSort } from "@fortawesome/free-solid-svg-icons";
import TransactionList from "../../../components/common/TransactionList";

function MyRewards() {
  return (
    <Row>
      <Col md={7}>
        <Row>
          <Col md={5}>
            <BalanceCard />
          </Col>

          <Col md={7}>
            <RecentTransaction />
          </Col>
        </Row>

        <Row>
          <Col md={10}>
            <div className={Styles.transactionsForm}>
              <Heading
                label={`Let's do some quick transactions`}
                variant="heading3"
              />
              <form action="">
                <Row>
                  <Col md={6}>
                    <TextFieldQa
                      label="You Send"
                      placeholder="5,000"
                      action="Points"
                      variant="bordered"
                    />
                  </Col>

                  <Col md={6}>
                    <TextFieldQa
                      label="Recipient"
                      placeholder="name,username or email"
                      action="Points"
                      variant="bordered"
                    />
                  </Col>

                  <Col md={12}>
                    <TextArea placeholder="Say Something.. " />
                  </Col>
                  <Col md={12}>
                    <Button label="Send Now" color="secondary" size="medium" />
                  </Col>
                </Row>
              </form>
            </div>
          </Col>
        </Row>

        <Row>
          <Col md={12}>
            <div>
              <img src={chartImg} alt="chart" className="img-fluid" />
            </div>
          </Col>
        </Row>
      </Col>

      <Col md={5}>
        <div className={`${global.dflexCenter} ${"justify-content-between"}`}>
          <Heading label="Transactions" />
          <Button
            label="March 2022"
            variant="transparent"
            color="gray"
            icon={<FontAwesomeIcon icon={faSort} />}
          />
        </div>
        <div>
          <TransactionList
            name="Albini Vjosa"
            date="31 March 2022"
            time="4:20 pm"
            points="- 13,500 Points"
          />
          <TransactionList
            name="Kayleigh Bysouth"
            date="31 March 2022"
            time="4:20 pm"
            points="-2500 Points"
          />
          <TransactionList
            name="Adayin Vetvendosje"
            date="31 March 2022"
            time="4:20 pm"
            points="-1200 Points"
          />
          <TransactionList
            name="Albini Vjosa"
            date="31 March 2022"
            time="4:20 pm"
            points="- 13,500 Points"
          />
          <TransactionList
            name="Kayleigh Bysouth"
            date="31 March 2022"
            time="4:20 pm"
            points="-2500 Points"
          />
          <TransactionList
            name="Adayin Vetvendosje"
            date="31 March 2022"
            time="4:20 pm"
            points="-1200 Points"
          />
          <TransactionList
            name="Albini Vjosa"
            date="31 March 2022"
            time="4:20 pm"
            points="- 13,500 Points"
          />
          <TransactionList
            name="Kayleigh Bysouth"
            date="31 March 2022"
            time="4:20 pm"
            points="-2500 Points"
          />
          <TransactionList
            name="Adayin Vetvendosje"
            date="31 March 2022"
            time="4:20 pm"
            points="-1200 Points"
          />
          <TransactionList
            name="Albini Vjosa"
            date="31 March 2022"
            time="4:20 pm"
            points="- 13,500 Points"
          />
          <TransactionList
            name="Kayleigh Bysouth"
            date="31 March 2022"
            time="4:20 pm"
            points="-2500 Points"
          />
          <TransactionList
            name="Adayin Vetvendosje"
            date="31 March 2022"
            time="4:20 pm"
            points="-1200 Points"
          />
        </div>
      </Col>
    </Row>
  );
}

export default MyRewards;
