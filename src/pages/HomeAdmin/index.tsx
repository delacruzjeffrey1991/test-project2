import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import CountCard from "src/components/common/CountCard";

import global from "src/global.module.scss";
import Styles from "./styles.module.scss";

import { AiTwotoneCalendar, AiOutlinePlusSquare } from "react-icons/ai";
import { HiOutlineUser } from "react-icons/hi";
import { IoVideocam } from "react-icons/io5";
import Button from "src/components/common/Button";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
// Import Swiper styles
import "swiper/swiper-bundle.min.css";

import pdfImg from "src/assets/images/PDF.png";
import imgIcon from "src/assets/images/image.png";
import employerNet from "src/assets/images/employer-net.png";
import cultureScoreGraph from "src/assets/images/cultureScore-graph.png";
import userImage from "src/assets/images/user1.png";
import sendIconImg from "src/assets/images/send.png";
import adminImg from "src/assets/images/admin.png";
import userFollowers from "src/assets/images/followers.png";
import addBtnIcon from "src/assets/images/add-follow.png";
import courseImg from "src/assets/images/course.png";
import graphImg from "src/assets/images/Graph.png";
import mediaVideo from "src/assets/images/media-video.png";
import instructorImg1 from "src/assets/images/user-1.png";
import instructorImg2 from "src/assets/images/profileImg.png";
import imageMc1 from "src/assets/images/slideimg1.png";
import imageMc2 from "src/assets/images/slideimg2.png";
import imgTeslr from "src/assets/images/teslr.png";
import Slide01 from "src/assets/images/Slide01.png";
import Slide02 from "src/assets/images/Slide02.png";
import Slide03 from "src/assets/images/Slide03.png";

function AdminHome() {
  return (
    <>
      <Row>
        <Col md={12}>
          <div className={`${global.dflexCenter} ${"gap-2"}`}>
            <CountCard
              icon={<AiTwotoneCalendar />}
              count="24.4K"
              subHeading="Promoters"
            />
            <CountCard
              icon={<HiOutlineUser />}
              count="166.3k"
              subHeading="Passives"
              iconVariant="redIcon"
            />
            <CountCard
              icon={<AiOutlinePlusSquare />}
              count="53.5k"
              subHeading="Detractors"
              iconVariant="blueIcon"
            />
            <CountCard icon={<IoVideocam />} count="100" subHeading="eNPS" />
            <div className={`${Styles.pdfImgBtnsMain} ${global.dflexCenter}`}>
              <button
                className={`${global.dFlexCol} ${"gap-2 bg-transparent"}`}
              >
                <img src={pdfImg} />
                <span> Download PDF </span>
              </button>
              <button
                className={`${global.dFlexCol} ${"gap-2 bg-transparent"}`}
              >
                <img src={imgIcon} />
                <span> Download IMG </span>
              </button>
            </div>
          </div>
        </Col>
      </Row>
      <Row className="mt-4 hm-graphs">
        <Col lg={5}>
          <div className="adminHome-graphs adminHome-graphs1 w-100">
            <img src={employerNet} />
          </div>
        </Col>
        <Col lg={7}>
          <div className="adminHome-graphs adminHome-graphs2 w-100 mt-5">
            <img src={cultureScoreGraph} />
          </div>
        </Col>
      </Row>
      <Row>
        <Col lg={12}>
          <section className={`${Styles.qaEventsSec}`}>
            <div className="d-flex">
              <div className={`${Styles.todayEventMain}`}>
                <p className={`${Styles.todayEvent}`}>
                  Todays <span className={`${Styles.dBlockSpan}`}>Events</span>
                </p>
              </div>
              <div
                className={`${Styles.mainEventDiv} ${""} ${Styles.hmMainEvent}`}
              >
                <Swiper
                  loop
                  spaceBetween={0}
                  centeredSlides={true}
                  autoplay={false}
                  modules={[Pagination, Navigation]}
                  slidesPerView={3}
                  className={"lastChildSelector"}
                >
                  <SwiperSlide>
                    <div className={`${Styles.eventDetails} ${"d-flex"}`}>
                      <div className={`${Styles.eventImgMain}`}>
                        <div className={`${Styles.eventImg}`}>
                          <img src={userImage} alt="user" />
                        </div>
                        <div className={`${Styles.eventImg}`}>
                          <img src={userImage} alt="user" />
                        </div>
                        <div className={`${Styles.eventImg}`}>
                          <img src={userImage} alt="user" />
                        </div>
                      </div>
                      <div>
                        <p className={`${Styles.eventName}`}>
                          Best Practices- Co working{" "}
                        </p>
                        <p className={`${Styles.eventTime}`}>
                          8:00 am - 11:30 am
                        </p>
                      </div>
                      <div>
                        <button className={`${Styles.iconBtn}`}>
                          <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            data-icon="magnifying-glass"
                            className="svg-inline--fa fa-magnifying-glass "
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 128 512"
                          >
                            <path d="M64 360c30.9 0 56 25.1 56 56s-25.1 56-56 56s-56-25.1-56-56s25.1-56 56-56zm0-160c30.9 0 56 25.1 56 56s-25.1 56-56 56s-56-25.1-56-56s25.1-56 56-56zM120 96c0 30.9-25.1 56-56 56S8 126.9 8 96S33.1 40 64 40s56 25.1 56 56z" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className={`${Styles.eventDetails} ${"d-flex"}`}>
                      <div className={`${Styles.eventImgMain}`}>
                        <div className={`${Styles.eventImg}`}>
                          <img src={userImage} alt="user" />
                        </div>
                        <div className={`${Styles.eventImg}`}>
                          <img src={userImage} alt="user" />
                        </div>
                        <div className={`${Styles.eventImg}`}>
                          <img src={userImage} alt="user" />
                        </div>
                      </div>
                      <div>
                        <p className={`${Styles.eventName}`}>
                          Best Practices- Co working{" "}
                        </p>
                        <p className={`${Styles.eventTime}`}>
                          8:00 am - 11:30 am
                        </p>
                      </div>
                      <div>
                        <button className={`${Styles.iconBtn}`}>
                          <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            data-icon="magnifying-glass"
                            className="svg-inline--fa fa-magnifying-glass "
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 128 512"
                          >
                            <path d="M64 360c30.9 0 56 25.1 56 56s-25.1 56-56 56s-56-25.1-56-56s25.1-56 56-56zm0-160c30.9 0 56 25.1 56 56s-25.1 56-56 56s-56-25.1-56-56s25.1-56 56-56zM120 96c0 30.9-25.1 56-56 56S8 126.9 8 96S33.1 40 64 40s56 25.1 56 56z" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className={`${Styles.eventDetails} ${"d-flex"}`}>
                      <div className={`${Styles.eventImgMain}`}>
                        <div className={`${Styles.eventImg}`}>
                          <img src={userImage} alt="user" />
                        </div>
                        <div className={`${Styles.eventImg}`}>
                          <img src={userImage} alt="user" />
                        </div>
                        <div className={`${Styles.eventImg}`}>
                          <img src={userImage} alt="user" />
                        </div>
                      </div>
                      <div>
                        <p className={`${Styles.eventName}`}>
                          Best Practices- Co working{" "}
                        </p>
                        <p className={`${Styles.eventTime}`}>
                          8:00 am - 11:30 am
                        </p>
                      </div>
                      <div>
                        <button className={`${Styles.iconBtn}`}>
                          <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            data-icon="magnifying-glass"
                            className="svg-inline--fa fa-magnifying-glass "
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 128 512"
                          >
                            <path d="M64 360c30.9 0 56 25.1 56 56s-25.1 56-56 56s-56-25.1-56-56s25.1-56 56-56zm0-160c30.9 0 56 25.1 56 56s-25.1 56-56 56s-56-25.1-56-56s25.1-56 56-56zM120 96c0 30.9-25.1 56-56 56S8 126.9 8 96S33.1 40 64 40s56 25.1 56 56z" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className={`${Styles.eventDetails} ${"d-flex"}`}>
                      <div className={`${Styles.eventImgMain}`}>
                        <div className={`${Styles.eventImg}`}>
                          <img src={userImage} alt="user" />
                        </div>
                        <div className={`${Styles.eventImg}`}>
                          <img src={userImage} alt="user" />
                        </div>
                        <div className={`${Styles.eventImg}`}>
                          <img src={userImage} alt="user" />
                        </div>
                      </div>
                      <div>
                        <p className={`${Styles.eventName}`}>
                          Best Practices- Co working{" "}
                        </p>
                        <p className={`${Styles.eventTime}`}>
                          8:00 am - 11:30 am
                        </p>
                      </div>
                      <div>
                        <button className={`${Styles.iconBtn}`}>
                          <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            data-icon="magnifying-glass"
                            className="svg-inline--fa fa-magnifying-glass "
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 128 512"
                          >
                            <path d="M64 360c30.9 0 56 25.1 56 56s-25.1 56-56 56s-56-25.1-56-56s25.1-56 56-56zm0-160c30.9 0 56 25.1 56 56s-25.1 56-56 56s-56-25.1-56-56s25.1-56 56-56zM120 96c0 30.9-25.1 56-56 56S8 126.9 8 96S33.1 40 64 40s56 25.1 56 56z" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
              <div className={`${Styles.viewAllEvents}`}>
                <p>
                  View All
                  <span className={`${Styles.dBlockSpan}`}>
                    Events
                    <button className={`${Styles.iconBtn}`}>
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="magnifying-glass"
                        className="svg-inline--fa fa-magnifying-glass"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 320 512"
                      >
                        <path
                          fill="#bf161f"
                          d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"
                        />
                      </svg>
                    </button>
                  </span>
                </p>
              </div>
            </div>
          </section>
        </Col>
      </Row>

      <Row>
        <Col lg={12}>
          <section className="gap-analysis-sec-admin section">
            <Row>
              <Col lg={12}>
                <h3> Gap Analysis </h3>
              </Col>
            </Row>
            <Row>
              <Col lg={9}>
                <div
                  className={`${Styles.gapAnalysisTable} ${Styles.hmAnalysisTable}`}
                >
                  <table>
                    <thead>
                      <tr>
                        <th></th>
                        <th className="bg-red text-white">
                          Current State <span>FROM</span>
                        </th>
                        <th className="bg-black text-white">GAPS</th>
                        <th className={`${Styles.bgBlue} ${Styles.textWhite}`}>
                          Desired Future State <span>TO</span>
                        </th>
                        <th
                          className={`${Styles.bgYellow} ${Styles.textWhite}`}
                        >
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Business Name</td>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                      </tr>
                      <tr>
                        <td> Account Title Here </td>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                      </tr>
                      <tr>
                        <td> Account Title Here </td>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                      </tr>
                      <tr>
                        <td> Account Title Here </td>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                      </tr>
                      <tr>
                        <td> Account Title Here </td>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                      </tr>
                      <tr>
                        <td> Account Title Here </td>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                      </tr>
                      <tr>
                        <td> Account Title Here </td>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                      </tr>
                      <tr>
                        <td> Account Title Here </td>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                      </tr>
                      <tr>
                        <td> Account Title Here </td>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                      </tr>
                      <tr>
                        <td> Account Title Here </td>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </Col>
              <Col lg={3}>
                <div
                  className={`${Styles.hmGapAnalysisNotif} ${Styles.hmGapAnalysisNotif}`}
                >
                  <ul>
                    <li>
                      <div
                        className={`${
                          Styles.gapAnalysisNotifHead
                        } ${"d-flex align-items-center"}`}
                      >
                        <div className={`${Styles.userSmallImg}`}>
                          <img src={adminImg} alt="logo" />
                        </div>
                        <span className={`${Styles.f16Graphik}`}>Bimby</span>
                        <span className={`${Styles.f10Justnow}`}>Just now</span>
                      </div>
                      <div
                        className={`${
                          Styles.gapAnalysisNotifBody
                        } ${"d-flex align-items-center"}`}
                      >
                        <p>Fix lorem ipsum dhjkeafdhuinkjdc</p>
                        <button className={`${Styles.iconBtn}`}>
                          Add to tasks +
                        </button>
                      </div>
                      <div
                        className={`${
                          Styles.gapAnalysisNotifFoot
                        } ${"d-flex align-items-center"}`}
                      >
                        <span>Reply</span>
                        <button className={`${Styles.iconBtn}`}>
                          <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            data-icon="magnifying-glass"
                            className="svg-inline--fa fa-magnifying-glass "
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                          >
                            <path d="M466.27 286.69C475.04 271.84 480 256 480 236.85c0-44.015-37.218-85.58-85.82-85.58H357.7c4.92-12.81 8.85-28.13 8.85-46.54C366.55 31.936 328.86 0 271.28 0c-61.607 0-58.093 94.933-71.76 108.6-22.747 22.747-49.615 66.447-68.76 83.4H32c-17.673 0-32 14.327-32 32v240c0 17.673 14.327 32 32 32h64c14.893 0 27.408-10.174 30.978-23.95 44.509 1.001 75.06 39.94 177.802 39.94 7.22 0 15.22.01 22.22.01 77.117 0 111.986-39.423 112.94-95.33 13.319-18.425 20.299-43.122 17.34-66.99 9.854-18.452 13.664-40.343 8.99-62.99zm-61.75 53.83c12.56 21.13 1.26 49.41-13.94 57.57 7.7 48.78-17.608 65.9-53.12 65.9h-37.82c-71.639 0-118.029-37.82-171.64-37.82V240h10.92c28.36 0 67.98-70.89 94.54-97.46 28.36-28.36 18.91-75.63 37.82-94.54 47.27 0 47.27 32.98 47.27 56.73 0 39.17-28.36 56.72-28.36 94.54h103.99c21.11 0 37.73 18.91 37.82 37.82.09 18.9-12.82 37.81-22.27 37.81 13.489 14.555 16.371 45.236-5.21 65.62zM88 432c0 13.255-10.745 24-24 24s-24-10.745-24-24 10.745-24 24-24 24 10.745 24 24z" />
                          </svg>
                        </button>
                      </div>
                    </li>
                    <li>
                      <div
                        className={`${
                          Styles.gapAnalysisNotifHead
                        } ${"d-flex align-items-center"}`}
                      >
                        <div className={`${Styles.userSmallImg}`}>
                          <img src={adminImg} alt="logo" />
                        </div>
                        <span className={`${Styles.f16Graphik}`}>Bimby</span>
                        <span className={`${Styles.f10Justnow}`}>Just now</span>
                      </div>
                      <div
                        className={`${
                          Styles.gapAnalysisNotifBody
                        } ${"d-flex align-items-center"}`}
                      >
                        <p>Fix lorem ipsum dhjkeafdhuinkjdc</p>
                        <button className={`${Styles.iconBtn}`}>
                          Add to tasks +
                        </button>
                      </div>
                      <div
                        className={`${
                          Styles.gapAnalysisNotifFoot
                        } ${"d-flex align-items-center"}`}
                      >
                        <span>Reply</span>
                        <button className={`${Styles.iconBtn}`}>
                          <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            data-icon="magnifying-glass"
                            className="svg-inline--fa fa-magnifying-glass "
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                          >
                            <path d="M466.27 286.69C475.04 271.84 480 256 480 236.85c0-44.015-37.218-85.58-85.82-85.58H357.7c4.92-12.81 8.85-28.13 8.85-46.54C366.55 31.936 328.86 0 271.28 0c-61.607 0-58.093 94.933-71.76 108.6-22.747 22.747-49.615 66.447-68.76 83.4H32c-17.673 0-32 14.327-32 32v240c0 17.673 14.327 32 32 32h64c14.893 0 27.408-10.174 30.978-23.95 44.509 1.001 75.06 39.94 177.802 39.94 7.22 0 15.22.01 22.22.01 77.117 0 111.986-39.423 112.94-95.33 13.319-18.425 20.299-43.122 17.34-66.99 9.854-18.452 13.664-40.343 8.99-62.99zm-61.75 53.83c12.56 21.13 1.26 49.41-13.94 57.57 7.7 48.78-17.608 65.9-53.12 65.9h-37.82c-71.639 0-118.029-37.82-171.64-37.82V240h10.92c28.36 0 67.98-70.89 94.54-97.46 28.36-28.36 18.91-75.63 37.82-94.54 47.27 0 47.27 32.98 47.27 56.73 0 39.17-28.36 56.72-28.36 94.54h103.99c21.11 0 37.73 18.91 37.82 37.82.09 18.9-12.82 37.81-22.27 37.81 13.489 14.555 16.371 45.236-5.21 65.62zM88 432c0 13.255-10.745 24-24 24s-24-10.745-24-24 10.745-24 24-24 24 10.745 24 24z" />
                          </svg>
                        </button>
                      </div>
                    </li>
                    <li>
                      <div
                        className={`${
                          Styles.gapAnalysisNotifHead
                        } ${"d-flex align-items-center"}`}
                      >
                        <div className="user-small-img">
                          <img src={adminImg} alt="logo" />
                        </div>
                        <span className={`${Styles.f16Graphik}`}>Bimby</span>
                        <span className={`${Styles.f10Justnow}`}>Just now</span>
                      </div>
                      <div
                        className={`${
                          Styles.gapAnalysisNotifBody
                        } ${"d-flex align-items-center"}`}
                      >
                        <p>Fix lorem ipsum dhjkeafdhuinkjdc</p>
                        <button className={`${Styles.iconBtn}`}>
                          Add to tasks +
                        </button>
                      </div>
                      <div
                        className={`${
                          Styles.gapAnalysisNotifFoot
                        } ${"d-flex align-items-center"}`}
                      >
                        <span>Reply</span>
                        <button className={`${Styles.iconBtn}`}>
                          <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            data-icon="magnifying-glass"
                            className="svg-inline--fa fa-magnifying-glass "
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                          >
                            <path d="M466.27 286.69C475.04 271.84 480 256 480 236.85c0-44.015-37.218-85.58-85.82-85.58H357.7c4.92-12.81 8.85-28.13 8.85-46.54C366.55 31.936 328.86 0 271.28 0c-61.607 0-58.093 94.933-71.76 108.6-22.747 22.747-49.615 66.447-68.76 83.4H32c-17.673 0-32 14.327-32 32v240c0 17.673 14.327 32 32 32h64c14.893 0 27.408-10.174 30.978-23.95 44.509 1.001 75.06 39.94 177.802 39.94 7.22 0 15.22.01 22.22.01 77.117 0 111.986-39.423 112.94-95.33 13.319-18.425 20.299-43.122 17.34-66.99 9.854-18.452 13.664-40.343 8.99-62.99zm-61.75 53.83c12.56 21.13 1.26 49.41-13.94 57.57 7.7 48.78-17.608 65.9-53.12 65.9h-37.82c-71.639 0-118.029-37.82-171.64-37.82V240h10.92c28.36 0 67.98-70.89 94.54-97.46 28.36-28.36 18.91-75.63 37.82-94.54 47.27 0 47.27 32.98 47.27 56.73 0 39.17-28.36 56.72-28.36 94.54h103.99c21.11 0 37.73 18.91 37.82 37.82.09 18.9-12.82 37.81-22.27 37.81 13.489 14.555 16.371 45.236-5.21 65.62zM88 432c0 13.255-10.745 24-24 24s-24-10.745-24-24 10.745-24 24-24 24 10.745 24 24z" />
                          </svg>
                        </button>
                      </div>
                    </li>
                  </ul>
                  <form className={`${Styles.writeSomething}`}>
                    <div className={`${Styles.formGroup}`}>
                      <input
                        type="text"
                        name=""
                        id=""
                        placeholder="Write something.."
                        className={`${"form-control"}`}
                      />
                      <button type="submit">
                        <img src={sendIconImg} alt="" />
                      </button>
                    </div>
                  </form>
                </div>
              </Col>
            </Row>
            <Row>
              <Col col={12}>
                <div className="d-flex align-items-end mt-3">
                  <div className={`${Styles.hmFollowers}`}>
                    <h2>Followers</h2>
                    <img src={userFollowers} alt="" />
                  </div>
                  <div className={`${Styles.addFollowers}`}>
                    <h2>
                      <img src={addBtnIcon} alt="" /> Add Followers
                    </h2>
                  </div>
                </div>
              </Col>
            </Row>
          </section>
        </Col>
      </Row>
      <Row>
        <Col lg={12}>
          <section className={`${Styles.hmAnalytics}`}>
            <div className="row mb-5">
              <div className="col-12">
                <h3 className={`${Styles.secHeadingQa}`}> Analytics </h3>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-3">
                <div className={`${Styles.hmCourse}`}>
                  <h2 className={`${Styles.analysisHead}`}>Course</h2>
                  <video poster={courseImg}>
                    <source src="movie.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <h3>Leadership and Organizational Learning</h3>
                </div>
              </div>
              <div className="col-lg-6">
                <div className={`${Styles.hmViews}`}>
                  <img src={graphImg} alt="" />
                </div>
              </div>
              <div className="col-lg-3">
                <div className={`${Styles.statistics}`}>
                  <h2 className={`${Styles.analysisHead}`}>Statistics</h2>
                  <div className={`${Styles.statisticsRow} ${"row"}`}>
                    <div className="col-lg-6">
                      <div className={`${Styles.hmStatBox}`}>
                        <h2>29,876</h2>
                        <h3>Views</h3>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className={`${Styles.hmStatBox}`}>
                        <h2>1,234</h2>
                        <h3>Likes</h3>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className={`${Styles.hmStatBox}`}>
                        <h2>9,234</h2>
                        <h3>Followers</h3>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className={`${Styles.hmStatBox}`}>
                        <h2>2,468</h2>
                        <h3>Shares</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Col>
      </Row>
      <Row>
        <Col lg={12}>
          <section className={`${Styles.mediaReview}`}>
            <div className="row">
              <div className="col-12">
                <h2 className="sec-heading-qa">Media Review</h2>
              </div>
            </div>
            <div className={`${Styles.hmMediaRow} ${"row"}`}>
              <div className="col-lg-8">
                <div className={`${Styles.mediaVideo}`}>
                  <video poster={mediaVideo}>
                    <source src="video.mp4" type="video/mp4" />
                  </video>
                </div>
                <div className={`${Styles.leaveComment}`}>
                  <div
                    className={`${
                      Styles.hmCommentProfile
                    } ${"d-flex align-items-center"}`}
                  >
                    <img src={adminImg} alt="" />
                    <input
                      type="text"
                      placeholder="Leave your comment here..."
                    />
                  </div>
                  <div className={`${Styles.hmCommentBottom}`}>
                    <div className="d-flex align-items-center">
                      <div className={`${Styles.timmer}`}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 448 512"
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="magnifying-glass"
                          className="svg-inline--fa fa-magnifying-glass "
                          role="img"
                        >
                          <path
                            fill="#929292"
                            d="M176 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h16V98.4C92.3 113.8 16 200 16 304c0 114.9 93.1 208 208 208s208-93.1 208-208c0-41.8-12.3-80.7-33.5-113.2l24.1-24.1c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L355.7 143c-28.1-23-62.2-38.8-99.7-44.6V64h16c17.7 0 32-14.3 32-32s-14.3-32-32-32H224 176zm72 192V320c0 13.3-10.7 24-24 24s-24-10.7-24-24V192c0-13.3 10.7-24 24-24s24 10.7 24 24z"
                          />
                        </svg>
                        <span>00:42</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 448 512"
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="magnifying-glass"
                          className="svg-inline--fa fa-magnifying-glass "
                          role="img"
                        >
                          <path
                            fill="#929292"
                            d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM337 209L209 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L303 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                          />
                        </svg>
                      </div>
                      <div className={`${Styles.hmPrivacy}`}>
                        <div className={`${Styles.dropdown}`}>
                          <button
                            type="button"
                            className="dropdown-toggle"
                            data-bs-toggle="dropdown"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 512 512"
                              aria-hidden="true"
                              focusable="false"
                              data-prefix="fas"
                              data-icon="magnifying-glass"
                              className="svg-inline--fa fa-magnifying-glass "
                              role="img"
                            >
                              <path
                                fill="#929292"
                                d="M51.7 295.1l31.7 6.3c7.9 1.6 16-.9 21.7-6.6l15.4-15.4c11.6-11.6 31.1-8.4 38.4 6.2l9.3 18.5c4.8 9.6 14.6 15.7 25.4 15.7c15.2 0 26.1-14.6 21.7-29.2l-6-19.9c-4.6-15.4 6.9-30.9 23-30.9h2.3c13.4 0 25.9-6.7 33.3-17.8l10.7-16.1c5.6-8.5 5.3-19.6-.8-27.7l-16.1-21.5c-10.3-13.7-3.3-33.5 13.4-37.7l17-4.3c7.5-1.9 13.6-7.2 16.5-14.4l16.4-40.9C303.4 52.1 280.2 48 256 48C141.1 48 48 141.1 48 256c0 13.4 1.3 26.5 3.7 39.1zm407.7 4.6c-3-.3-6-.1-9 .8l-15.8 4.4c-6.7 1.9-13.8-.9-17.5-6.7l-2-3.1c-6-9.4-16.4-15.1-27.6-15.1s-21.6 5.7-27.6 15.1l-6.1 9.5c-1.4 2.2-3.4 4.1-5.7 5.3L312 330.1c-18.1 10.1-25.5 32.4-17 51.3l5.5 12.4c8.6 19.2 30.7 28.5 50.5 21.1l2.6-1c10-3.7 21.3-2.2 29.9 4.1l1.5 1.1c37.2-29.5 64.1-71.4 74.4-119.5zM512 256c0 141.4-114.6 256-256 256S0 397.4 0 256S114.6 0 256 0S512 114.6 512 256zM144.5 348.1c-2.1 8.6 3.1 17.3 11.6 19.4l32 8c8.6 2.1 17.3-3.1 19.4-11.6s-3.1-17.3-11.6-19.4l-32-8c-8.6-2.1-17.3 3.1-19.4 11.6zm92-20c-2.1 8.6 3.1 17.3 11.6 19.4s17.3-3.1 19.4-11.6l8-32c2.1-8.6-3.1-17.3-11.6-19.4s-17.3 3.1-19.4 11.6l-8 32zM343.2 113.7c-7.9-4-17.5-.7-21.5 7.2l-16 32c-4 7.9-.7 17.5 7.2 21.5s17.5 .7 21.5-7.2l16-32c4-7.9 .7-17.5-7.2-21.5z"
                              />
                            </svg>
                            Everyone
                          </button>
                          <ul className="dropdown-menu">
                            <li>
                              <a className="dropdown-item" href="#">
                                Only me
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className={`${Styles.sendComment}`}>
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="magnifying-glass"
                          className="svg-inline--fa fa-magnifying-glass "
                          role="img"
                        >
                          <path
                            fill="#929292"
                            d="M256 352C293.2 352 319.2 334.5 334.4 318.1C343.3 308.4 358.5 307.7 368.3 316.7C378 325.7 378.6 340.9 369.6 350.6C347.7 374.5 309.7 400 256 400C202.3 400 164.3 374.5 142.4 350.6C133.4 340.9 133.1 325.7 143.7 316.7C153.5 307.7 168.7 308.4 177.6 318.1C192.8 334.5 218.8 352 256 352zM208.4 208C208.4 225.7 194 240 176.4 240C158.7 240 144.4 225.7 144.4 208C144.4 190.3 158.7 176 176.4 176C194 176 208.4 190.3 208.4 208zM304.4 208C304.4 190.3 318.7 176 336.4 176C354 176 368.4 190.3 368.4 208C368.4 225.7 354 240 336.4 240C318.7 240 304.4 225.7 304.4 208zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z"
                          />
                        </svg>
                      </span>
                      <a href="">
                        <img src={sendIconImg} alt="" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div
                  className={`${Styles.gapAnalysisNotif} ${Styles.hmGapAnalysisNotif} ${Styles.hmMediaNotif}`}
                >
                  <ul>
                    <li className="border-0">
                      <div
                        className={`${
                          Styles.gapAnalysisNotifHead
                        } ${"d-flex align-items-center"}`}
                      >
                        <span className={`${Styles.f16Graphik}`}>Maclin</span>
                        <span className={`${Styles.f10Justnow}`}>
                          uploaded 1h ago
                        </span>
                      </div>
                      <div className={`${Styles.gapAnalysisNotifBody}`}>
                        <p>
                          Sed ut perspiciatis unde omnis iste natus error sit
                          voluptatem accusantium doloremque laudantium, totam
                          rem aperiam, eaque ipsa quae ab illo inventore
                          veritatis.
                        </p>
                        <h2>Show more +</h2>
                      </div>
                    </li>
                    <li>
                      <div
                        className={`${
                          Styles.gapAnalysisNotifHead
                        } ${"d-flex align-items-center"}`}
                      >
                        <div className={`${Styles.userSmallImg}`}>
                          <img src={instructorImg1} alt="logo" />
                        </div>
                        <span className={`${Styles.f16Graphik}`}>Zip</span>
                        <span className={`${Styles.f10Justnow}`}>Just now</span>
                      </div>
                      <div
                        className={`${
                          Styles.gapAnalysisNotifBody
                        } ${"d-flex align-items-center"}`}
                      >
                        <p>
                          We can collaborate with the other teams as well can
                          you message @mack22 to add the others here?
                        </p>
                      </div>
                      <div
                        className={`${
                          Styles.gapAnalysisNotifFoot
                        } ${"d-flex align-items-center"}`}
                      >
                        <span>Reply</span>
                        <button className={`${Styles.iconBtn}`}>
                          <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            data-icon="magnifying-glass"
                            className="svg-inline--fa fa-magnifying-glass "
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                          >
                            <path d="M466.27 286.69C475.04 271.84 480 256 480 236.85c0-44.015-37.218-85.58-85.82-85.58H357.7c4.92-12.81 8.85-28.13 8.85-46.54C366.55 31.936 328.86 0 271.28 0c-61.607 0-58.093 94.933-71.76 108.6-22.747 22.747-49.615 66.447-68.76 83.4H32c-17.673 0-32 14.327-32 32v240c0 17.673 14.327 32 32 32h64c14.893 0 27.408-10.174 30.978-23.95 44.509 1.001 75.06 39.94 177.802 39.94 7.22 0 15.22.01 22.22.01 77.117 0 111.986-39.423 112.94-95.33 13.319-18.425 20.299-43.122 17.34-66.99 9.854-18.452 13.664-40.343 8.99-62.99zm-61.75 53.83c12.56 21.13 1.26 49.41-13.94 57.57 7.7 48.78-17.608 65.9-53.12 65.9h-37.82c-71.639 0-118.029-37.82-171.64-37.82V240h10.92c28.36 0 67.98-70.89 94.54-97.46 28.36-28.36 18.91-75.63 37.82-94.54 47.27 0 47.27 32.98 47.27 56.73 0 39.17-28.36 56.72-28.36 94.54h103.99c21.11 0 37.73 18.91 37.82 37.82.09 18.9-12.82 37.81-22.27 37.81 13.489 14.555 16.371 45.236-5.21 65.62zM88 432c0 13.255-10.745 24-24 24s-24-10.745-24-24 10.745-24 24-24 24 10.745 24 24z"></path>
                          </svg>
                        </button>
                      </div>
                    </li>
                    <li>
                      <div
                        className={`${
                          Styles.gapAnalysisNotifHead
                        } ${"d-flex align-items-center"}`}
                      >
                        <div className={`${Styles.userSmallImg}`}>
                          <img src={adminImg} alt="logo" />
                        </div>
                        <span className={`${Styles.f16Graphik}`}>Bimby</span>
                        <span className={`${Styles.f10Justnow}`}>Just now</span>
                      </div>
                      <div
                        className={`${
                          Styles.gapAnalysisNotifBody
                        } ${"d-flex align-items-center"}`}
                      >
                        <p>
                          Nice Probably we need to add the some red on this,
                          what your thoughts @dai?
                        </p>
                      </div>
                      <div
                        className={`${
                          Styles.gapAnalysisNotifFoot
                        } ${"d-flex align-items-center"}`}
                      >
                        <span>Reply</span>
                        <button className={`${Styles.iconBtn}`}>
                          <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            data-icon="magnifying-glass"
                            className="svg-inline--fa fa-magnifying-glass "
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                          >
                            <path d="M466.27 286.69C475.04 271.84 480 256 480 236.85c0-44.015-37.218-85.58-85.82-85.58H357.7c4.92-12.81 8.85-28.13 8.85-46.54C366.55 31.936 328.86 0 271.28 0c-61.607 0-58.093 94.933-71.76 108.6-22.747 22.747-49.615 66.447-68.76 83.4H32c-17.673 0-32 14.327-32 32v240c0 17.673 14.327 32 32 32h64c14.893 0 27.408-10.174 30.978-23.95 44.509 1.001 75.06 39.94 177.802 39.94 7.22 0 15.22.01 22.22.01 77.117 0 111.986-39.423 112.94-95.33 13.319-18.425 20.299-43.122 17.34-66.99 9.854-18.452 13.664-40.343 8.99-62.99zm-61.75 53.83c12.56 21.13 1.26 49.41-13.94 57.57 7.7 48.78-17.608 65.9-53.12 65.9h-37.82c-71.639 0-118.029-37.82-171.64-37.82V240h10.92c28.36 0 67.98-70.89 94.54-97.46 28.36-28.36 18.91-75.63 37.82-94.54 47.27 0 47.27 32.98 47.27 56.73 0 39.17-28.36 56.72-28.36 94.54h103.99c21.11 0 37.73 18.91 37.82 37.82.09 18.9-12.82 37.81-22.27 37.81 13.489 14.555 16.371 45.236-5.21 65.62zM88 432c0 13.255-10.745 24-24 24s-24-10.745-24-24 10.745-24 24-24 24 10.745 24 24z"></path>
                          </svg>
                        </button>
                      </div>
                    </li>
                    <li>
                      <div
                        className={`${
                          Styles.gapAnalysisNotifHead
                        } ${"d-flex align-items-center"}`}
                      >
                        <div className={`${Styles.userSmallImg}`}>
                          <img src={instructorImg2} alt="logo" />
                        </div>
                        <span className={`${Styles.f16Graphik}`}>Dai</span>
                        <span className={`${Styles.f10Justnow}`}>Just now</span>
                      </div>
                      <div
                        className={`${
                          Styles.gapAnalysisNotifBody
                        } ${"d-flex align-items-center"}`}
                      >
                        <p>@Bimby Yeah I think that's great!</p>
                      </div>
                      <div
                        className={`${
                          Styles.gapAnalysisNotifFoot
                        } ${"d-flex align-items-center"}`}
                      >
                        <span>Reply</span>
                        <button className={`${Styles.iconBtn}`}>
                          <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            data-icon="magnifying-glass"
                            className="svg-inline--fa fa-magnifying-glass "
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                          >
                            <path d="M466.27 286.69C475.04 271.84 480 256 480 236.85c0-44.015-37.218-85.58-85.82-85.58H357.7c4.92-12.81 8.85-28.13 8.85-46.54C366.55 31.936 328.86 0 271.28 0c-61.607 0-58.093 94.933-71.76 108.6-22.747 22.747-49.615 66.447-68.76 83.4H32c-17.673 0-32 14.327-32 32v240c0 17.673 14.327 32 32 32h64c14.893 0 27.408-10.174 30.978-23.95 44.509 1.001 75.06 39.94 177.802 39.94 7.22 0 15.22.01 22.22.01 77.117 0 111.986-39.423 112.94-95.33 13.319-18.425 20.299-43.122 17.34-66.99 9.854-18.452 13.664-40.343 8.99-62.99zm-61.75 53.83c12.56 21.13 1.26 49.41-13.94 57.57 7.7 48.78-17.608 65.9-53.12 65.9h-37.82c-71.639 0-118.029-37.82-171.64-37.82V240h10.92c28.36 0 67.98-70.89 94.54-97.46 28.36-28.36 18.91-75.63 37.82-94.54 47.27 0 47.27 32.98 47.27 56.73 0 39.17-28.36 56.72-28.36 94.54h103.99c21.11 0 37.73 18.91 37.82 37.82.09 18.9-12.82 37.81-22.27 37.81 13.489 14.555 16.371 45.236-5.21 65.62zM88 432c0 13.255-10.745 24-24 24s-24-10.745-24-24 10.745-24 24-24 24 10.745 24 24z"></path>
                          </svg>
                        </button>
                      </div>
                    </li>
                  </ul>
                  <form className={`${Styles.writeSomething}`}>
                    <div className={`${Styles.formGroup}`}>
                      <input
                        type="text"
                        name=""
                        id=""
                        placeholder="Write something.."
                        className="form-control"
                      />
                      <button type="submit">
                        <img src={sendIconImg} alt="" />
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </Col>
      </Row>

      <Row>
        <Col lg={12}>
          <section className={`${Styles.hmMediaCampaign}`}>
            <div className="row">
              <div className="col-12">
                <h2 className="sec-heading-qa">Media Campaign</h2>
              </div>
            </div>
            <div className={`${Styles.medCamRow} ${"row"}`}>
              <div className="col-lg-2">
                <div className={`${Styles.mediaCm1}`}>
                  <img src={imgTeslr} alt="" />
                  <div
                    className={`${
                      Styles.colorCode
                    } ${"d-flex align-items-center"}`}
                  >
                    <span className={`${Styles.blackBg}`}></span>
                    <h3>#111111</h3>
                  </div>
                  <div
                    className={`${
                      Styles.colorCode
                    } ${"d-flex align-items-center"}`}
                  >
                    <span className={`${Styles.redBg}`}></span>
                    <h3>#E31937</h3>
                  </div>
                  <div
                    className={`${
                      Styles.colorCode
                    } ${"d-flex align-items-center"}`}
                  >
                    <span className={`${Styles.blueBg}`}></span>
                    <h3>#144178</h3>
                  </div>
                  <div
                    className={`${
                      Styles.colorCode
                    } ${"d-flex align-items-center"}`}
                  >
                    <span className={`${Styles.grayBg}`}></span>
                    <h3>#D5D5D5</h3>
                  </div>
                  <div
                    className={`${
                      Styles.colorCode
                    } ${"d-flex align-items-center"}`}
                  >
                    <span className={`${Styles.whiteBg}`}></span>
                    <h3>#FFFFFF</h3>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className={`${Styles.medCamSlider}`}>
                  <Swiper
                    loop
                    spaceBetween={0}
                    centeredSlides={true}
                    autoplay={false}
                    modules={[Pagination, Navigation]}
                    slidesPerView={1}
                    className={"lastChildSelector"}
                  >
                    <SwiperSlide>
                      <div>
                        <img src={imageMc1} alt="" />
                      </div>
                    </SwiperSlide>

                    <SwiperSlide>
                      <div>
                        <img src={imageMc2} alt="" />
                      </div>
                    </SwiperSlide>

                    <SwiperSlide>
                      <div>
                        <img src={imageMc1} alt="" />
                      </div>
                    </SwiperSlide>

                    <SwiperSlide>
                      <div>
                        <img src={imageMc2} alt="" />
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
              <div className="col-lg-4">
                <div
                  className={`${Styles.gapAnalysisNotif} ${Styles.hmGapAnalysisNotif} ${Styles.hmMediaNotif}`}
                >
                  <ul>
                    <li className="border-0">
                      <div
                        className={`${
                          Styles.gapAnalysisNotifHead
                        } ${"d-flex align-items-center"}`}
                      >
                        <span className={`${Styles.f16Graphik}`}>Maclin</span>
                        <span className={`${Styles.f10Justnow}`}>
                          uploaded 1h ago
                        </span>
                      </div>
                      <div className={`${Styles.gapAnalysisNotifBody}`}>
                        <p>
                          Sed ut perspiciatis unde omnis iste natus error sit
                          voluptatem accusantium doloremque laudantium, totam
                          rem aperiam, eaque ipsa quae ab illo inventore
                          veritatis.
                        </p>
                        <h2>Show more +</h2>
                      </div>
                    </li>
                    <li>
                      <div
                        className={`${
                          Styles.gapAnalysisNotifHead
                        } ${"d-flex align-items-center"}`}
                      >
                        <div className={`${Styles.userSmallImg}`}>
                          <img src={instructorImg1} alt="logo" />
                        </div>
                        <span className={`${Styles.f16Graphik}`}>Zip</span>
                        <span className={`${Styles.f10Justnow}`}>Just now</span>
                      </div>
                      <div
                        className={`${
                          Styles.gapAnalysisNotifBody
                        } ${"d-flex align-items-center"}`}
                      >
                        <p>
                          We can collaborate with the other teams as well can
                          you message @mack22 to add the others here?
                        </p>
                      </div>
                      <div
                        className={`${
                          Styles.gapAnalysisNotifFoot
                        } ${"d-flex align-items-center"}`}
                      >
                        <span>Reply</span>
                        <button className={`${Styles.iconBtn}`}>
                          <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            data-icon="magnifying-glass"
                            className="svg-inline--fa fa-magnifying-glass "
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                          >
                            <path d="M466.27 286.69C475.04 271.84 480 256 480 236.85c0-44.015-37.218-85.58-85.82-85.58H357.7c4.92-12.81 8.85-28.13 8.85-46.54C366.55 31.936 328.86 0 271.28 0c-61.607 0-58.093 94.933-71.76 108.6-22.747 22.747-49.615 66.447-68.76 83.4H32c-17.673 0-32 14.327-32 32v240c0 17.673 14.327 32 32 32h64c14.893 0 27.408-10.174 30.978-23.95 44.509 1.001 75.06 39.94 177.802 39.94 7.22 0 15.22.01 22.22.01 77.117 0 111.986-39.423 112.94-95.33 13.319-18.425 20.299-43.122 17.34-66.99 9.854-18.452 13.664-40.343 8.99-62.99zm-61.75 53.83c12.56 21.13 1.26 49.41-13.94 57.57 7.7 48.78-17.608 65.9-53.12 65.9h-37.82c-71.639 0-118.029-37.82-171.64-37.82V240h10.92c28.36 0 67.98-70.89 94.54-97.46 28.36-28.36 18.91-75.63 37.82-94.54 47.27 0 47.27 32.98 47.27 56.73 0 39.17-28.36 56.72-28.36 94.54h103.99c21.11 0 37.73 18.91 37.82 37.82.09 18.9-12.82 37.81-22.27 37.81 13.489 14.555 16.371 45.236-5.21 65.62zM88 432c0 13.255-10.745 24-24 24s-24-10.745-24-24 10.745-24 24-24 24 10.745 24 24z"></path>
                          </svg>
                        </button>
                      </div>
                    </li>
                    <li>
                      <div
                        className={`${
                          Styles.gapAnalysisNotifHead
                        } ${"d-flex align-items-center"}`}
                      >
                        <div className={`${Styles.userSmallImg}`}>
                          <img src={adminImg} alt="logo" />
                        </div>
                        <span className={`${Styles.f16Graphik}`}>Bimby</span>
                        <span className={`${Styles.f10Justnow}`}>Just now</span>
                      </div>
                      <div
                        className={`${
                          Styles.gapAnalysisNotifBody
                        } ${"d-flex align-items-center"}`}
                      >
                        <p>
                          Nice Probably we need to add the some red on this,
                          what your thoughts @dai?
                        </p>
                      </div>
                      <div
                        className={`${
                          Styles.gapAnalysisNotifFoot
                        } ${"d-flex align-items-center"}`}
                      >
                        <span>Reply</span>
                        <button className={`${Styles.iconBtn}`}>
                          <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            data-icon="magnifying-glass"
                            className="svg-inline--fa fa-magnifying-glass "
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                          >
                            <path d="M466.27 286.69C475.04 271.84 480 256 480 236.85c0-44.015-37.218-85.58-85.82-85.58H357.7c4.92-12.81 8.85-28.13 8.85-46.54C366.55 31.936 328.86 0 271.28 0c-61.607 0-58.093 94.933-71.76 108.6-22.747 22.747-49.615 66.447-68.76 83.4H32c-17.673 0-32 14.327-32 32v240c0 17.673 14.327 32 32 32h64c14.893 0 27.408-10.174 30.978-23.95 44.509 1.001 75.06 39.94 177.802 39.94 7.22 0 15.22.01 22.22.01 77.117 0 111.986-39.423 112.94-95.33 13.319-18.425 20.299-43.122 17.34-66.99 9.854-18.452 13.664-40.343 8.99-62.99zm-61.75 53.83c12.56 21.13 1.26 49.41-13.94 57.57 7.7 48.78-17.608 65.9-53.12 65.9h-37.82c-71.639 0-118.029-37.82-171.64-37.82V240h10.92c28.36 0 67.98-70.89 94.54-97.46 28.36-28.36 18.91-75.63 37.82-94.54 47.27 0 47.27 32.98 47.27 56.73 0 39.17-28.36 56.72-28.36 94.54h103.99c21.11 0 37.73 18.91 37.82 37.82.09 18.9-12.82 37.81-22.27 37.81 13.489 14.555 16.371 45.236-5.21 65.62zM88 432c0 13.255-10.745 24-24 24s-24-10.745-24-24 10.745-24 24-24 24 10.745 24 24z"></path>
                          </svg>
                        </button>
                      </div>
                    </li>
                    <li>
                      <div
                        className={`${
                          Styles.gapAnalysisNotifHead
                        } ${"d-flex align-items-center"}`}
                      >
                        <div className={`${Styles.userSmallImg}`}>
                          <img src={instructorImg2} alt="logo" />
                        </div>
                        <span className={`${Styles.f16Graphik}`}>Dai</span>
                        <span className={`${Styles.f10Justnow}`}>Just now</span>
                      </div>
                      <div
                        className={`${
                          Styles.gapAnalysisNotifBody
                        } ${"d-flex align-items-center"}`}
                      >
                        <p>@Bimby Yeah I think that's great!</p>
                      </div>
                      <div
                        className={`${
                          Styles.gapAnalysisNotifFoot
                        } ${"d-flex align-items-center"}`}
                      >
                        <span>Reply</span>
                        <button className={`${Styles.iconBtn}`}>
                          <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            data-icon="magnifying-glass"
                            className="svg-inline--fa fa-magnifying-glass "
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                          >
                            <path d="M466.27 286.69C475.04 271.84 480 256 480 236.85c0-44.015-37.218-85.58-85.82-85.58H357.7c4.92-12.81 8.85-28.13 8.85-46.54C366.55 31.936 328.86 0 271.28 0c-61.607 0-58.093 94.933-71.76 108.6-22.747 22.747-49.615 66.447-68.76 83.4H32c-17.673 0-32 14.327-32 32v240c0 17.673 14.327 32 32 32h64c14.893 0 27.408-10.174 30.978-23.95 44.509 1.001 75.06 39.94 177.802 39.94 7.22 0 15.22.01 22.22.01 77.117 0 111.986-39.423 112.94-95.33 13.319-18.425 20.299-43.122 17.34-66.99 9.854-18.452 13.664-40.343 8.99-62.99zm-61.75 53.83c12.56 21.13 1.26 49.41-13.94 57.57 7.7 48.78-17.608 65.9-53.12 65.9h-37.82c-71.639 0-118.029-37.82-171.64-37.82V240h10.92c28.36 0 67.98-70.89 94.54-97.46 28.36-28.36 18.91-75.63 37.82-94.54 47.27 0 47.27 32.98 47.27 56.73 0 39.17-28.36 56.72-28.36 94.54h103.99c21.11 0 37.73 18.91 37.82 37.82.09 18.9-12.82 37.81-22.27 37.81 13.489 14.555 16.371 45.236-5.21 65.62zM88 432c0 13.255-10.745 24-24 24s-24-10.745-24-24 10.745-24 24-24 24 10.745 24 24z"></path>
                          </svg>
                        </button>
                      </div>
                    </li>
                  </ul>
                  <form className={`${Styles.writeSomething}`}>
                    <div className={`${Styles.formGroup}`}>
                      <input
                        type="text"
                        name=""
                        id=""
                        placeholder="Write something.."
                        className="form-control"
                      />
                      <button type="submit">
                        <img src={sendIconImg} alt="" />
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </Col>
      </Row>

      <Row>
        <Col lg={12}>
          <section className={`${Styles.posSec}`}>
            <div className="row">
              <div className="col-12">
                <div className="posSlider">
                  <Swiper
                    loop={false}
                    spaceBetween={0}
                    centeredSlides={false}
                    autoplay={false}
                    modules={[Pagination, Navigation]}
                    slidesPerView={2}
                    // className={"lastChildSelector"}
                  >
                    <SwiperSlide>
                      <div>
                        <img src={Slide01} alt="" />
                      </div>
                    </SwiperSlide>

                    <SwiperSlide>
                      <div>
                        <img src={Slide02} alt="" />
                      </div>
                    </SwiperSlide>

                    <SwiperSlide>
                      <div>
                        <img src={Slide03} alt="" />
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
            </div>
          </section>
        </Col>
      </Row>
    </>
  );
}

export default AdminHome;
