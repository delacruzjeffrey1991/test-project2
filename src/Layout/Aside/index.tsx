import React, { FC, useEffect, useState } from "react";
import Styles from "./styles.module.scss";

import downIcon from "../../assets/images/downIcon.svg";

import { navigation } from "../../config/navigation";
import { useSurvey } from "../../hooks/form/useSurvey";
import { useAuth } from "../../hooks/form/useAuth";

// import Button from "../../../../components/common/button";

import { Link, useNavigate } from "react-router-dom";
// import Button from "../Button";
import { useDispatch } from "react-redux";
import Services from "../../Services/survey.service";
import fetchAllAction from "../../Layout/Aside";
import Input from "../../components/Input";
import { useForm } from "react-hook-form";
import Button from "../../components/common/Button";

import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import TaskList from "src/components/common/TaskList";
import Group from "src/components/common/Group";

import inst1Img from "src/assets/images/inst1.png";
import inst2Img from "src/assets/images/inst2.png";
import inst3Img from "src/assets/images/inst3.png";
import inst4Img from "src/assets/images/inst4.png";
import inst5Img from "src/assets/images/inst5.png";
import RecognitionUser from "src/components/Recognition/RecognitionUser";

const AsideMenu = () => {
  const [seletedItem, setSelectedItem] = useState("");
  const navigate = useNavigate();

  // const { getSurvey, store } = useSurvey(null);
  const { userLogin } = useAuth(null);

  // useEffect(() => {
  //   const loadData = async () => await getSurvey(null);
  //   loadData();
  // }, []);

  const onSubmit = () => {
    const data = {
      email: "admin@gmail.com",
      password: "12345678",
    };
    userLogin(data);
  };

  return (
    <>
      <aside className={Styles.asideRight}>
        <div>
          <div className={Styles.topBtns}>
            <select name="" id="">
              <option value="1" selected>
                Company Name
              </option>
              <option value="2">Company Name2</option>
              <option value="3">Company Name3</option>
              <option value="4">Company Name4</option>
            </select>

            <div className={Styles.topLgBtns}>
              <Button
                variant="filled"
                label="+ Create New"
                size="medium"
                onClick={() => navigate("/user/create-new")}
              />
              <Button
                variant="filled"
                label="Upload a File"
                color="secondary"
                size="medium"
              />
            </div>
          </div>
          <div className={Styles.rightNav}>
            <nav>
              <ul>
                {navigation.map((menu, index) => (
                  <li
                    key={index}
                    className={`${Styles.navLinkQa} ${Styles.navLinkQaMain} ${menu.id == seletedItem ? Styles.active : Styles.hide
                      }`}
                  >
                    <div key={menu.id}>
                      <div className="d-flex align-items-center gap-3">
                        <img src={menu.icon} className={Styles.iconImg} />
                        <Link to={menu.link} className={Styles.titleLink}>
                          {menu.title}
                        </Link>
                      </div>
                      <span
                        className={Styles.caretIcon}
                        onClick={() =>
                          seletedItem == menu.id
                            ? setSelectedItem("")
                            : setSelectedItem(menu.id)
                        }
                      >
                        <img src={downIcon} alt="down" />
                      </span>
                    </div>

                    {menu?.children ? (
                      <ul className={Styles.subMenu}>
                        {menu.children.map((children, index) => {
                          return (
                            <li
                              key={index}
                              className={Styles.navLinkQa}
                              onClick={(e) => {
                                e.stopPropagation();
                              }}
                            >
                              <Link to={children.link}>{children.title}</Link>
                            </li>
                          );
                        })}
                      </ul>
                    ) : null}
                  </li>
                ))}
              </ul>
            </nav>
            <div className="mainAside-tabs">
              <Tabs
                defaultActiveKey="tasks"
                id="uncontrolled-tab-example"
                className="mb-3"
              >
                <Tab eventKey="tasks" title="TASKS">
                  <TaskList
                    taskName="Task Name"
                    taskDueDate="08/01/2022"
                    taskProgress={75}
                  />
                  <TaskList
                    taskName="Task Name"
                    taskDueDate="08/01/2022"
                    taskProgress={25}
                  />
                  <TaskList
                    taskName="Task Name"
                    taskDueDate="08/01/2022"
                    taskProgress={0}
                  />
                  <TaskList
                    taskName="Task Name"
                    taskDueDate="08/01/2022"
                    taskProgress={75}
                  />
                </Tab>
                <Tab eventKey="inbox" title="INBOX">
                  <RecognitionUser
                    userImg={inst1Img}
                    username="Kayleigh Bysouth"
                    time="online"
                    user_message='Check this out! Co'
                  />
                  <RecognitionUser
                    userImg={inst2Img}
                    username="Kayleigh Bysouth"
                    time="online"
                    user_message='Bro, can you give...'
                  />
                  <RecognitionUser
                    userImg={inst3Img}
                    username="Kayleigh Bysouth"
                    time="online"
                    user_message='Update on the new..'
                  />
                  <RecognitionUser
                    userImg={inst4Img}
                    username="Kayleigh Bysouth"
                    time="online"
                    user_message='More leads today!...'
                  />
                </Tab>
              </Tabs>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default AsideMenu;
