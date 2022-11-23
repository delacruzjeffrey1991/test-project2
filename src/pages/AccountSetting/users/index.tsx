import React from "react";
import { useNavigate } from "react-router-dom";
import { Row, Col, Table } from "react-bootstrap";

import Styles from "./styles.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FiUserPlus, FiKey } from "react-icons/fi";
import { AiOutlineUsergroupAdd, AiOutlineSync } from "react-icons/ai";
import { HiDotsHorizontal } from "react-icons/hi";
import { VscLock } from "react-icons/vsc";

import Button from "../../../components/common/Button";
import Heading from "../../../components/common/Heading";
import IconButton from "../../../components/common/IconButton";

const Users = () => {
  const navigate = useNavigate();
  const users = [
    {
      id: 1,
      fname: "Hammadou",
      lname: "Ibrahima",
      email: "hammadouIbrahima@mail",
      company_id: "IMC-00123",
      role: "User",
    },
    {
      id: 2,
      fname: "Hammadou",
      lname: "Ibrahima",
      email: "hammadouIbrahima@mail",
      company_id: "IMC-00123",
      role: "User",
    },
    {
      id: 3,
      fname: "Hammadou",
      lname: "Ibrahima",
      email: "hammadouIbrahima@mail",
      company_id: "IMC-00123",
      role: "User",
    },
    {
      id: 4,
      fname: "Hammadou",
      lname: "Ibrahima",
      email: "hammadouIbrahima@mail",
      company_id: "IMC-00123",
      role: "User",
    },
    {
      id: 5,
      fname: "Hammadou",
      lname: "Ibrahima",
      email: "hammadouIbrahima@mail",
      company_id: "IMC-00123",
      role: "User",
    },
    {
      id: 6,
      fname: "Hammadou",
      lname: "Ibrahima",
      email: "hammadouIbrahima@mail",
      company_id: "IMC-00123",
      role: "User",
    },
    {
      id: 7,
      fname: "Hammadou",
      lname: "Ibrahima",
      email: "hammadouIbrahima@mail",
      company_id: "IMC-00123",
      role: "User",
    },
  ];
  return (
    <>
      <Row>
        <Col>
          <Heading label="Users" />
        </Col>
        <Col md={12}>
          <div className={Styles.usersBtnsAccSet}>
            <Button
              icon={<FiUserPlus />}
              label="Add user"
              variant="transparent"
              color="black"
              size="sizeAuto"
              onClick={ ()=>{ navigate('/setting/add-user') } }
            />
            <Button
              icon={<AiOutlineUsergroupAdd />}
              label="Add multiple users"
              variant="transparent"
              color="black"
              size="sizeAuto"
              onClick={ ()=>{ navigate('/setting/add-multiple-users') } }
            />
            <Button
              icon={"X"}
              label="Delete user"
              variant="transparent"
              color="black"
              size="sizeAuto"
              onClick={ ()=>{ navigate('/setting/delete-user') } }
            />
            <Button
              icon={<VscLock />}
              label="Multi-factor authentication"
              variant="transparent"
              color="black"
              size="sizeAuto"
            />
            <Button
              icon={<FiKey />}
              label="Reset password"
              variant="transparent"
              color="black"
              size="sizeAuto"
            />
            <Button
              icon={<FontAwesomeIcon icon={faArrowUp} />}
              label="Export users"
              variant="transparent"
              color="black"
              size="sizeAuto"
            />
            <Button
              icon={<AiOutlineSync />}
              label="Refresh"
              variant="transparent"
              color="black"
              size="sizeAuto"
            />
            <IconButton icon={<HiDotsHorizontal />} />
          </div>

          <div>
            <Table className={Styles.table}>
              <thead>
                <tr>
                  <th colSpan={2}>First Name</th>
                  <th>Last Name</th>
                  <th>Email</th>
                  <th>Company ID</th>
                  <th>Role</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => {
                  return (
                    <tr id={user.id.toString()}>
                      <td>
                        <input type="checkbox" name={user.id.toString()} id={user.id.toString()} />
                      </td>
                      <td>{user.fname}</td>
                      <td>{user.lname}</td>
                      <td>{user.email}</td>
                      <td>{user.company_id}</td>
                      <td>{user.role}</td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Users;
