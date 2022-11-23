import React from "react";
import Heading from "../../components/common/Heading";
import IconButton from "../../components/common/IconButton";
// import Styles from './styles.module.scss'
import Styles from "../Signup/styles.module.scss";

import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter } from "@fortawesome/free-brands-svg-icons";

import { faEnvelope, faUser } from "@fortawesome/free-solid-svg-icons";

import goggleImg from "../../assets/authImages/images/image-sliders/Google.png";

import TextFieldQa from "../../components/common/TextFieldQa";
import Button from "../../components/common/Button";
import { useForm } from "react-hook-form";
import Input from "../../components/Input";
import { useAuth } from "../../hooks/form/useAuth";
import { ToastContainer } from "react-toastify";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState,
    reset,
    formState: { errors, touchedFields },
  } = useForm();

  const { userLogin, store } = useAuth(null);

  const onSubmit = (body: any) => {
    userLogin(body).then(() => {
      reset();
    });
  };

  return (
    <>
      <div className={`${Styles.signUpMain} ${Styles.dFlexRow} `}>
        <div className={Styles.w100}>
          <Heading label="Sign In" variant="heading1" />
          <div className={`${Styles.socialIcons} ${Styles.dFlexRow} `}>
            <IconButton icon={<img src={goggleImg} alt="Goggle" />} />
            <IconButton icon={<FontAwesomeIcon icon={faFacebookF} />} />
            <IconButton icon={<FontAwesomeIcon icon={faTwitter} />} />
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className={Styles.signUpForm}>
              <Input
                type="email"
                placeholder="Email"
                label="email"
                register={register}
                formState={formState}
                errors={errors?.email?.type}
                minLength={5}
              />
              <Input
                type="password"
                placeholder="Password"
                label="password"
                register={register}
                formState={formState}
                maxLength={20}
                errors={errors?.password?.type}
                minLength={5}
              />
              <p className={`${Styles.rememText} ${Styles.dFlexRow}`}>
                <span>Remember me next time</span>
                <div className={Styles.customCheckbox}>
                  <input
                    type="checkbox"
                    id="rememberMeLogin"
                    name="rememberMeLogin"
                    className={Styles.rememberMe}
                  />
                  <label
                    htmlFor="rememberMeLogin"
                    className={Styles.rememberCustom}
                  ></label>
                </div>
              </p>
              {store?.status === "pending" ? (
                <Button
                  variant="filled"
                  color="secondary"
                  label="SIGNING IN"
                  size="large"
                  type="submit"
                  disable
                />
              ) : (
                <Button
                  variant="filled"
                  color="secondary"
                  label="SIGN IN"
                  size="large"
                  type="submit"
                />
              )}

              <p className={Styles.rememText}>Forget password</p>
              <p className={Styles.rememText}>
                Don't have account?
                <span>
                  <Link to={"/auth/user-role"} className={Styles.cSecondary}>
                    Sign Up
                  </Link>
                </span>
              </p>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Login;
