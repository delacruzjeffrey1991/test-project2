import React from "react";
import Heading from "../../components/common/Heading";
import IconButton from "../../components/common/IconButton";
import Styles from "./styles.module.scss";
import { useNavigate, useSearchParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter } from "@fortawesome/free-brands-svg-icons";
import goggleImg from "../../assets/authImages/images/image-sliders/Google.png";
import Button from "../../components/common/Button";
import { useForm } from "react-hook-form";
import Input from "../../components/Input";
import { useAuth } from "src/hooks/form/useAuth";
// import { ToastContainer } from "react-toastify";

const Signup = () => {
  const {
    register,
    getValues,
    handleSubmit,
    formState,
    reset,
    formState: { errors },
  } = useForm();

  const { userRegister, store } = useAuth(null);

  const [params] = useSearchParams();

  const role = params.get("role") || "";

  const navigate = useNavigate();

  const onSubmit = (body: object) => {
    let apiData = {
      ...body,
      role: role?.toUpperCase(),
    };

    userRegister(apiData, role).then(() => {
      reset();
    });
  };

  return (
    <>
      <div className={`${Styles.signUpMain} ${Styles.dFlexRow} `}>
        <div className={Styles.w100}>
          <Heading label="Getting started" variant="heading1" />
          <p>Create account to continue!</p>
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
                // maxLength={20}
                errors={errors?.email?.type}
                minLength={5}
              />
              <Input
                type="text"
                placeholder="User Name"
                label="name"
                register={register}
                formState={formState}
                maxLength={20}
                errors={errors?.name?.type}
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
                    id="rememberMeSignUp"
                    name="rememberMeSignUp"
                    className={Styles.rememberMe}
                  />
                  <label
                    htmlFor="rememberMeSignUp"
                    className={Styles.rememberCustom}
                  ></label>
                </div>
              </p>
              <Button
                variant="filled"
                color="secondary"
                label="SIGN UP"
                size="large"
                disable={store.status === "pending" ? true : false}
                isLoading={store.status === "pending" ? true : false}
              />
              {/* {store.status === "pending" ? (
                <Button
                  variant="filled"
                  color="secondary"
                  label="SIGNING UP"
                  size="large"
                  disable
                />
              ) : (
                <Button
                  variant="filled"
                  color="secondary"
                  label="SIGN UP"
                  size="large"
                />
              )} */}
              
              <p className={Styles.rememText}>Forget password</p>
              <p className={Styles.rememText}>
                Already have an account?
                <span onClick={() => navigate("/auth/login")}>Sign in</span>
              </p>
            </div>
          </form>
        </div>
      </div>
      {/* <ToastContainer /> */}
    </>
  );
};

export default Signup;
