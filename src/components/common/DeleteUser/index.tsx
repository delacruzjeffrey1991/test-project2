import { Row, Col, Table } from "react-bootstrap";
import React from "react";
import Styles from "./styles.module.scss";

import Button from "../Button";
import Search from "../Search";
import Heading from "../Heading";

function DeleteUser() {
  const users = [
    {
      id: 1,
      initial: "HI",
      name: "Hammadou Ibrahima",
      email: "hammadouIbrahima@mail",
    },
    {
      id: 2,
      initial: "HI",
      name: "Hammadou Ibrahima",
      email: "hammadouIbrahima@mail",
    },
    {
      id: 3,
      initial: "HI",
      name: "Hammadou Ibrahima",
      email: "hammadouIbrahima@mail",
    },
    {
      id: 4,
      initial: "HI",
      name: "Hammadou Ibrahima",
      email: "hammadouIbrahima@mail",
    },
  ];

  return (
    <>
      <Row>
        <Col>
          <Heading label="Delete Users" />
        </Col>
        <Col md={12}>
          <div className={Styles.deleteuser}>
            <Col md={12}>
              <Search></Search>
            </Col>
            <Table className={Styles.table}>
              <thead>
             
              </thead>
              <tbody>
                {users.map((user) => {
                  return (
                    <tr id={user.id.toString()}>
                      <td>
                        <input type="checkbox" name={user.id.toString()} id={user.id.toString()} />
                      </td>
                      <td className={Styles.initial}>{user.initial}</td>
                      <div className={Styles.dltuser}>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                      </div>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </div>
        </Col>
        <Col md={12} className={Styles.btn}>
          <Col md={6}>
            <Button
              label="Delete Selected"
              variant="filled"
              color="secondary"
              size="medium"
            />
            <Button
              color="black"
              variant="transparent"
              label="Cancel"
              size="medium"
            />
          </Col>
        </Col>
      </Row>
    </>
  );
}
export default DeleteUser;
