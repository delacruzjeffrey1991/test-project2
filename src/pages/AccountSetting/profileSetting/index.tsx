import { Row, Col, Container } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import Styles from "./styles.module.scss";
import TextFieldQa from "../../../components/common/TextFieldQa";
import RadioBtn from "../../../components/common/RadioBtn";
import Button from "../../../components/common/Button";
import adminImg from "../../../assets/images/admin-img.png";
import { useForm } from "react-hook-form";
import Input from "src/components/Input";
import { useProfile } from "src/hooks/form/useProfile";
// import { ToastContainer } from "react-toastify";

const ProfileSetting = () => {
  
  const {
    register,
    handleSubmit,
    formState,
    reset,
    setValue ,
    formState: { errors, touchedFields },
  } = useForm({
    defaultValues : JSON.parse(localStorage.getItem("user") || "")
  });

  const { userProfile, store } = useProfile(null);
  
  console.log('store.profile',store.profile);

  const onSubmit = (body: object) => {
    let apiData = {
      ...body,
    };
    userProfile(apiData).then(() => {
      reset();
    });
  };

  // const abc = setValue('name',{name: 'aaaa'}); 
  // console.log(abc);

  // setValue('name', store.profile.name);
  // setValue('date_of_birth', store.profile.date_of_birth);
  // setValue('bio', store.profile.bio);
  // setValue('phone', store.profile.phone);
  // setValue('website', store.profile.website);
  // setValue('address', store.profile.address);
  // setValue('facebook_link', store.profile.facebook_link);
  // setValue('twitter_link', store.profile.twitter_link);
  // setValue('instagram_link', store.profile.instagram_link);
  // setValue('linkedin_link', store.profile.linkedin_link);


  return (
    <>
      <Container className={Styles.notificationMain}>
        <Row>
          <Col md={12}>
            <h1>Profile Setting</h1>
            <div className={Styles.user}>
              <img src={adminImg} alt="new" />
            </div>
          </Col>
        </Row>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Row>
            <Col md={12}>
              <div className={Styles.profilesettingform}>
                <div className="row">
                  <Col md={6} className={Styles.coltxt}>
                    <label>Full Name</label>
                    {/* <TextFieldQa placeholder="Jhon Doe" /> */}
                    <Input
                      type="text"
                      placeholder="User Name"
                      label="name"
                      register={register}
                      formState={formState}
                      errors={errors?.name?.type}
                      minLength={3}
                      // required={true}
                    />
                  </Col>
                  <Col md={6} className={Styles.coltxt}>
                    <label>Birthday</label>
                    {/* <TextFieldQa placeholder="Jhon Doe" type="date" /> */}
                    <Input
                      type="date"
                      label="date_of_birth"
                      register={register}
                      formState={formState}
                      errors={errors?.date_of_birth?.type}
                    />
                  </Col>
                  <Col md={6} className={Styles.coltxt}>
                    <label>Email</label>
                    {/* <TextFieldQa placeholder="Youremail@gmail.com" type="email" /> */}
                    <Input
                    type="email"
                    placeholder="Youremail@gmail.com"
                    label="email"
                    disabled={true}
                    register={register}
                    formState={formState}
                    errors={errors?.email?.type}
                    required={false}
                  />
                  </Col>
                  <Col md={6} className={Styles.coltxt}>
                    <label>Bio</label>
                    {/* <TextFieldQa placeholder="UI Designer" /> */}
                    <Input
                      type="text"
                      placeholder="UI Designer"
                      label="bio"
                      register={register}
                      formState={formState}
                      errors={errors?.bio?.type}
                    />
                  </Col>
                  <Col md={6} className={Styles.coltxt}>
                    <label>Phone Number</label>
                    {/* <TextFieldQa placeholder="12345678" type="tel" /> */}
                    <Input
                      type="tel"
                      placeholder="12345678"
                      label="phone"
                      register={register}
                      formState={formState}
                      errors={errors?.phone?.type}
                    />
                  </Col>
                  <Col md={6} className={Styles.coltxt}>
                    <label>Website</label>
                    {/* <TextFieldQa placeholder="www.youtube.com" /> */}
                    <Input
                      type="text"
                      placeholder="www.youtube.com"
                      label="website"
                      register={register}
                      formState={formState}
                      errors={errors?.website?.type}
                    />
                  </Col>

                  {/* <Col md={6} className={Styles.coltxt}>
                  <label>Gender</label>
                  <div className={Styles.genderradiobox}>
                    <div className={`${"d-flex gap-2"}`}>
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
                </Col> */}

                  <Col md={6} className={Styles.coltxt}>
                    <label>Location</label>
                    {/* <TextFieldQa placeholder="Sythlet,Bangladesh" /> */}
                    <Input
                      type="text"
                      placeholder="Sythlet,Bangladesh"
                      label="address"
                      register={register}
                      formState={formState}
                      errors={errors?.address?.type}
                    />
                  </Col>
                  <Col md={12} className={Styles.innerheading}>
                    <h1>Social Link</h1>
                  </Col>
                  <Col md={6} className={Styles.coltxt}>
                    <label>Facebook</label>
                    {/* <TextFieldQa placeholder="Profile.userhere" type="text" /> */}
                    <Input
                      type="text"
                      placeholder="Profile.userher"
                      label="facebook_link"
                      register={register}
                      formState={formState}
                      errors={errors?.facebook_link?.type}
                    />
                  </Col>
                  <Col md={6} className={Styles.coltxt}>
                    <label>Twitter</label>
                    {/* <TextFieldQa placeholder="Profile.userher" /> */}
                    <Input
                      type="text"
                      placeholder="Profile.userher"
                      label="twitter_link"
                      register={register}
                      formState={formState}
                      errors={errors?.twitter_link?.type}
                    />
                  </Col>
                  <Col md={6} className={Styles.coltxt}>
                    <label>Instagram</label>
                    {/* <TextFieldQa placeholder="Profile.userhere" type="text" /> */}
                    <Input
                      type="text"
                      placeholder="Profile.userher"
                      label="instagram_link"
                      register={register}
                      formState={formState}
                      errors={errors?.instagram_link?.type}
                    />
                  </Col>
                  <Col md={6} className={Styles.coltxt}>
                    <label>Linkdin</label>
                    {/* <TextFieldQa placeholder="Profile.userher" /> */}
                    <Input
                      type="text"
                      placeholder="Profile.userher"
                      label="linkedin_link"
                      register={register}
                      formState={formState}
                      errors={errors?.linkedin_link?.type}
                    />
                  </Col>
                </div>
              </div>
            </Col>
            <Col md={12} className={Styles.btn}>
              <Col md={6}>
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
                  // disable={store.status === "pending" ? true : false}
                  // isLoading={store.status === "pending" ? true : false}
                />
              </Col>
            </Col>
          </Row>
        </form>
      </Container>
    </>
  );
};

export default ProfileSetting;
