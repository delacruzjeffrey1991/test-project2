import React, { useState } from "react";
// const Login = lazy(() => import('src/pages/Login'))
// const Signup = lazy(() => import('src/pages/Signup'))
import {Row, Col} from 'react-bootstrap'
import Styles from "./styles.module.scss";
import MainSidebar from "./MainSidebar";
import Header from "../components/Header";
import ProfileBox from "../components/ProfileBox";
import PageHeader from "../components/PageHeader";
import userImage from "../assets/images/admin-img.png";
import { Outlet } from "react-router-dom";
import SidebarSetting from "../pages/AccountSetting/SidebarSetting";

const SettingLayout = () => {
  const [showDropDown, setShowDropDown] = useState(false);
  return (
    <div>
      <div className={Styles.mainWrapperqa}>
        <aside className={Styles.sidebar}>
          <MainSidebar />
        </aside>
        <div className={`${Styles.mainContent} ${Styles.settingMainContent}`}>
          <div className={Styles.settingHeaderWrapper}>
            <Header onClick={() => setShowDropDown(!showDropDown)} />
            <PageHeader />
            <ProfileBox
              userImg={userImage}
              show={showDropDown}
              brandProgress="77"
            />
          </div>
          <div className={Styles.pagesInnerContent}>
            <Row>
                <Col md={3}>
                    <SidebarSetting />
                </Col>
                <Col md={8}>
                    <Outlet></Outlet>
                </Col>
            </Row>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingLayout;
