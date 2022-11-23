import { Row, Col, Container } from "react-bootstrap";
import Button from "../Button";
import Styles from "./styles.module.scss";
import TextFieldQa from "../TextFieldQa";
import RadioBtn from "../RadioBtn";
import Heading from "../Heading";

function Adduser() {
  return (
    <>
      <Container className={Styles.usersBtnsAccSet}>
        <Row>
          <Col>
            <Heading label="Create User" />
          </Col>
          <Col md={12} className="pb-3">
            <Button
              label="Upload .csv"
              variant="filled"
              color="secondary"
              size="medium"
            />
          </Col>
          <Row>
            <Col md={8}>
              <div className={Styles.profilesettingform}>
                <div className="row align-items-center">
                  <Col md={6} className={Styles.coltxt}>
                    <label>First Name</label>
                    <TextFieldQa variant="bordered" placeholder="Jhon " />
                  </Col>
                  <Col md={6} className={Styles.coltxt}>
                    <label>Last Name</label>
                    <TextFieldQa variant="bordered" placeholder="Doe" />
                  </Col>
                  <Col md={6} className={Styles.coltxt}>
                    <label>Email</label>
                    <TextFieldQa
                      variant="bordered"
                      placeholder="Youremail@gmail.com"
                      type="email"
                    />
                  </Col>
                  <Col md={6} className={Styles.coltxt}>
                    <label>Birthday</label>
                    <TextFieldQa
                      variant="bordered"
                      placeholder="Jhon Doe"
                      type="date"
                    />
                  </Col>

                  <Col md={6} className={Styles.coltxt}>
                    <label>Phone Number</label>
                    <TextFieldQa
                      variant="bordered"
                      placeholder="12345678"
                      type="number"
                    />
                  </Col>
                  <Col md={6} className={Styles.coltxt}>
                    <label>ID</label>
                    <TextFieldQa variant="bordered" placeholder="IMC-00123" />
                  </Col>
                  <Col md={6} className={Styles.coltxt}>
                    <label>Password</label>
                    <TextFieldQa
                      variant="bordered"
                      placeholder="Profile.userhere"
                      type="password"
                    />
                  </Col>
                  <Col md={6} className={Styles.coltxt}>
                    <label>Confirm Password</label>
                    <TextFieldQa
                      variant="bordered"
                      placeholder="Profile.userher"
                      type="password"
                    />
                  </Col>
                  <Col md={6} className={Styles.coltxt}>
                    <label>Gender</label>
                    <div className={Styles.genderradiobox}>
                      <div
                        className={`${
                          Styles.radioBoxWrapper
                        } ${"d-flex gap-3"}`}
                      >
                        <RadioBtn
                          type="radio"
                          value="male"
                          id="male"
                          label="male"
                        />
                        <RadioBtn
                          type="radio"
                          value="female"
                          id="female"
                          label="female"
                        />
                        <RadioBtn
                          type="radio"
                          value="custom"
                          id="custom"
                          label="custom"
                        />
                      </div>
                    </div>
                  </Col>
                  <Col md={6} className={Styles.coltxt}>
                    <label>Location</label>
                    <TextFieldQa
                      variant="bordered"
                      placeholder="Sythlet,Bangladesh"
                    />
                  </Col>
                  <Col md={12}>
                      <div className={Styles.btn}>
                        <Button
                          color="black"
                          variant="transparent"
                          label="Cancel"
                          size="smallBtn"
                        />
                        <Button
                          label="Save"
                          variant="filled"
                          color="secondary"
                          size="smallBtn"
                        />
                      </div>
                  </Col>
                </div>
              </div>
            </Col>
          </Row>
        </Row>
      </Container>
    </>
  );
}
export default Adduser;
