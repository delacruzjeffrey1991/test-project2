import { Row, Col, Container } from "react-bootstrap";
import Styles from "./styles.module.scss";

import Button from "../Button";
import TextFieldQa from "../TextFieldQa";
import RadioBtn from "../RadioBtn";
import Heading from "../Heading";

function AddMultipleUsers() {
  return (
    <>
      <Container className={Styles.Addmultiuser}>
        <Row>
          <Col>
            <Heading label="Create Multiple Users" />
          </Col>
          <Col md={12}>
            <Button
              label="Upload .csv"
              variant="filled"
              color="secondary"
              size="medium"
            />
          </Col>
          <Row>
            <Col md={10}>
              <div className={Styles.profilesettingform}>
                <div className="row">
                  <Col md={4} className={Styles.coltxt}>
                    <label>First Name</label>
                  </Col>
                  <Col md={4} className={Styles.coltxt}>
                    <label>Last Name</label>
                  </Col>
                  <Col md={4} className={Styles.coltxt}>
                    <label>Email</label>
                  </Col>
                </div>
                <Col md={4} className={Styles.coltxt}>
                  <TextFieldQa placeholder="jhon" type="text" />
                </Col>

                <Col md={4} className={Styles.coltxt}>
                  <TextFieldQa placeholder="Doe" type="text" />
                </Col>
                <Col md={4} className={Styles.coltxt}>
                  <TextFieldQa placeholder="your@gmail.com" type="email" />
                </Col>
                <Col md={4} className={Styles.coltxt}>
                  <TextFieldQa placeholder="jhon" type="text" />
                </Col>

                <Col md={4} className={Styles.coltxt}>
                  <TextFieldQa placeholder="Doe" type="text" />
                </Col>
                <Col md={4} className={Styles.coltxt}>
                  <TextFieldQa placeholder="your@gmail.com" type="email" />
                </Col>
                <Col md={4} className={Styles.coltxt}>
                  <TextFieldQa placeholder="jhon" type="text" />
                </Col>

                <Col md={4} className={Styles.coltxt}>
                  <TextFieldQa placeholder="Doe" type="text" />
                </Col>
                <Col md={4} className={Styles.coltxt}>
                  <TextFieldQa placeholder="your@gmail.com" type="email" />
                </Col>
                

                <Col md={12} className={Styles.coltxt}>
                  <label>Role</label>
                  <div className={Styles.genderradiobox}>
                    <div className={Styles.dflex}>
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
                
                {/* <Col md={11} className={Styles.btn}>
                    <Col md={7}>
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
                    </Col>
                  </Col> */}
              </div>
            </Col>
          </Row>
        </Row>
      </Container>
    </>
  );
}
export default AddMultipleUsers;
