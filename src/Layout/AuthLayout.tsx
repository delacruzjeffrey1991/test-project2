import React, { lazy } from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import AuthSlider from "../components/AuthSlider";
// const Login = lazy(() => import('src/pages/Login'))
// const Signup = lazy(() => import('src/pages/Signup'))
import Styles from "./styles.module.scss";

const AuthLayout = () => {
  return (
    <div>
      <div className={Styles.mainAuthLayout}>
        <div className={Styles.authLayoutChildrens}>
          <AuthSlider />
        </div>
        <div className={Styles.authLayoutChildrens}> <Outlet></Outlet> </div>
      </div>
    </div>
  );
};

export default AuthLayout;
