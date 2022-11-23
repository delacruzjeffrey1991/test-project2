import React from "react";
import { useNavigate } from "react-router-dom";
import { Row, Col, Table } from "react-bootstrap";

import Styles from "./styles.module.scss";

import { HiOutlineSortDescending } from "react-icons/hi";

const TableBox = () => {
  const users = [
    {
      id: 1,
      name: "Janny Lee",
      courseTitle: "Diversity, Equality and Inclusion",
      startDate: "2022 Jul 22",
      endDate: "2022 Jul 7",
      status: "Pending",
      action: "Send Certificate",
    },
    {
      id: 2,
      name: "Benjinum Smith",
      courseTitle: "Diversity, Equality and Inclusion",
      startDate: "2022 Jul 6",
      endDate: "2022 Jul 7",
      status: "Pending",
      action: " Certificate Sent",
    },
    {
      id: 3,
      name: "Ayaka Johnson",
      courseTitle: "Diversity, Equality and Inclusion",
      startDate: "2022 Jul 1",
      endDate: "2022 Jul 7",
      status: "Pending",
      action: "Send Certificate",
    },
    {
      id: 4,
      name: "Benjinum Smith",
      courseTitle: "Diversity, Equality and Inclusion",
      startDate: "2022 Jul 5",
      endDate: "2022 Jul 7",
      status: "Pending",
      action: "Send Certificate",
    },
    {
      id: 5,
      name: "Benjinum Smith",
      courseTitle: "Diversity, Equality and Inclusion",
      startDate: "2022 Jul 5",
      endDate: "2022 Jul 7",
      status: "Pending",
      action: "Send Certificate",
    },
    {
      id: 6,
      name: "Benjinum Smith",
      courseTitle: "Diversity, Equality and Inclusion",
      startDate: "2022 Jul 5",
      endDate: "2022 Jul 7",
      status: "Pending",
      action: "Send Certificate",
    },
    {
      id: 7,
      name: "Benjinum Smith",
      courseTitle: "Diversity, Equality and Inclusion",
      startDate: "2022 Jul 5",
      endDate: "2022 Jul 7",
      status: "Pending",
      action: "Send Certificate",
    },
  ];

  return (
    <>
      <Row>
        <Col md={12}>
          <div>
            <Table className={Styles.tableBox}>
              <thead>
                <tr>
                  <th>
                    Name <HiOutlineSortDescending />
                  </th>
                  <th>
                    Course Title <HiOutlineSortDescending />
                  </th>
                  <th>
                    Start Date <HiOutlineSortDescending />
                  </th>
                  <th>
                    End Date <HiOutlineSortDescending />
                  </th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => {
                  return (
                    <tr id={user.id.toString()}>
                      <td>{user.name}</td>
                      <td>{user.courseTitle}</td>
                      <td>{user.startDate}</td>
                      <td>{user.endDate}</td>
                      <td className={Styles.status}>{user.status}</td>
                      <td className={Styles.action}>{user.action}</td>
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

export default TableBox;
