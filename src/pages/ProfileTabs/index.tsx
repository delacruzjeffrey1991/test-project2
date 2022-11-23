import React from "react";

import UserProfile from "src/pages/UserProfile";
import Styles from "./styles.module.scss";
import { Col, Container, Dropdown, Row } from "react-bootstrap";
import Group from "src/components/common/Group";
import isnt1 from "../../assets/images/inst1.png";
import Heading from "src/components/common/Heading";
import Button from "src/components/common/Button";

const ProfileTabs = (props: any) => {
  const btnLabel = props.btnLabel;

  return (
    <>
      <Container>
        <Row>
          <Col md={4}>
            <div className={Styles.profileStart}>
              <Group
                image={isnt1}
                heading="Benjamin Smith"
                subHeading="20 courses. 1 video"
                action="+ Follow Benjamin"
              />
            </div>

            <hr />
            <Heading label="Biography" />
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro
              amet ipsa architecto sed quaerat, eligendi atque aperiam
              praesentium ipsam magn am. architecto sed quaerat, eligendi atque
              aperiam praesentium ipsam magnam.am. architecto sed quaerat,
              eligendi atque aperiam praesentium ipsam magnam.am. architecto sed
              quaerat, eligendi atque aperiam praesentium ipsam magnam.
            </p>
          </Col>
          <Col md={8} className={Styles.profileEnd}>
            <div className={Styles.tabsMain}>
              <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link active"
                    id="pills-all-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-all"
                    type="button"
                    role="tab"
                    aria-controls="pills-all"
                    aria-selected="true"
                  >
                    all
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="pills-courses-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-courses"
                    type="button"
                    role="tab"
                    aria-controls="pills-courses"
                    aria-selected="false"
                  >
                    courses
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="pills-videos-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-videos"
                    type="button"
                    role="tab"
                    aria-controls="pills-videos"
                    aria-selected="false"
                  >
                    videos
                  </button>
                </li>
              </ul>
              <div className="tab-content" id="pills-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="pills-all"
                  role="tabpanel"
                  aria-labelledby="pills-all-tab"
                >
                  <UserProfile />
                </div>
                <div
                  className="tab-pane fade"
                  id="pills-courses"
                  role="tabpanel"
                  aria-labelledby="pills-courses-tab"
                >
                  <UserProfile />
                </div>
                <div
                  className="tab-pane fade"
                  id="pills-videos"
                  role="tabpanel"
                  aria-labelledby="pills-videos-tab"
                >
                  <UserProfile />
                </div>

                <div
                  className="tab-pane fade"
                  id="pills-archived"
                  role="tabpanel"
                  aria-labelledby="pills-archived-tab"
                >
                  <UserProfile />
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ProfileTabs;
