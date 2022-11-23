import React, { FC } from "react";
import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination} from "swiper";
// Import Swiper styles
import 'swiper/swiper-bundle.min.css';
// import 'swiper/components/navigation/navigation.scss';

import "./styles.css";



import sliderLogo from  '../../assets/authImages/images/logo.png';
import sliderImage from '../../assets/authImages/images/image-sliders/slider-image.png';
import trianleGreenImage from  '../../assets/authImages/images/image-sliders/triangle-green.png';
import percentileImage from '../../assets/authImages/images/image-sliders/percentile.png';
import scorecardImage from '../../assets/authImages/images/image-sliders/scorecard.png';
import cardsmImage from '../../assets/authImages/images/image-sliders/cards-multiple.png';
import ArrowlImage from '../../assets/authImages/images/image-sliders/arrows-left-right.png';
import logoBlackImage from '../../assets/authImages/images/logo-black.png';
import sliderImage2Image from '../../assets/authImages/images/image-sliders/slider-image-2.png';
import videoImage from '../../assets/authImages/images/image-sliders/video-image.png';
import eLearningImage from '../../assets/authImages/images/image-sliders/e-learning.png';
import barsProgressImage from '../../assets/authImages/images/image-sliders/bars-progress.png';

import checkRedImage from '../../assets/authImages/images/image-sliders/check-red.png';
import smallTriangleImage from '../../assets/authImages/images/image-sliders/small-triangle.png';
import graduateImage from '../../assets/authImages/images/image-sliders/graduate.png';
import sliderImage3 from '../../assets/authImages/images/image-sliders/slider-image-3.png';
import redeemImage from '../../assets/authImages/images/image-sliders/redeem.png';
import trophyImage from '../../assets/authImages/images/image-sliders/trophy.png';
import handmoneyImage from '../../assets/authImages/images/image-sliders/hand-money.png';
import bullseyeImage from '../../assets/authImages/images/image-sliders/bullseye.png';
import arrowBottomImage from '../../assets/authImages/images/image-sliders/arrow-bottom.png';
import sliderImage4 from '../../assets/authImages/images/image-sliders/slider-image-4.png';
import componentImage from '../../assets/authImages/images/image-sliders/component.png';
import profileImage from '../../assets/authImages/images/image-sliders/profile-image.png';
import heartTickImage from '../../assets/authImages/images/image-sliders/heart-tick.png';
import bookOpenReaderImage from '../../assets/authImages/images/image-sliders/book-open-reader.png';
import sliderImage5 from '../../assets/authImages/images/image-sliders/slider-image-5.png';
import slide5Image from '../../assets/authImages/images/image-sliders/slide5.png';
import aiImage from '../../assets/authImages/images/image-sliders/application-artificial-intelligence-ai.png';
import pathImage from '../../assets/authImages/images/image-sliders/Path.png';
import speakersImage from '../../assets/authImages/images/image-sliders/speakers.png';


const AuthSlider = () => {

  return (
    <div className="mainSliderQa">
            <div className="sign-slider overflow-hidden ">
               <Swiper
                  loop
                  spaceBetween={0}
                  centeredSlides={true}
                  navigation
                  pagination={{ clickable: true }}
                  autoplay={false}
                  modules={[Pagination,Navigation]}
               >
                  <SwiperSlide>
                     <div className="slider-items bg-red">
                        <div className="h-100 padding-settings">
                           <img
                              src={sliderLogo}
                              className="mb-55 image-logo"
                              alt=""
                           />

                           <div className="image-slider text-white-qa">
                              <img
                                 src={sliderImage}
                                 alt=""
                              />
                              <div className="components-slider-images white-bg-op-79 position-white ">
                                 <span>
                                    <img
                                       src={trianleGreenImage}
                                       className="trianglegreen"
                                       alt=""
                                    />
                                 </span>
                                 <span className="color-black fa-18">eNPS</span>
                                 <span className="image-top-right">
                                    <img
                                       src={percentileImage}
                                       className="percentileimg"
                                       alt=""
                                    />
                                 </span>
                              </div>
                              <div className="components-slider-images orange-bg-op-79 position-orange ">
                                 <span>
                                    <img
                                       src={scorecardImage}
                                       className="scorecardimg"
                                       alt=""
                                    />
                                 </span>
                                 <span className="fa-18">Culture Scorecard</span>
                              </div>
                              <div className="components-slider-images black-bg-op-79 position-black ">
                                 <span>
                                    <img
                                       src={cardsmImage}
                                       className="cardsimg"
                                       alt=""
                                    />
                                 </span>
                                 <div className="d-flex flex-column">
                                    <span className="fa-18">Survey Builder</span>
                                    <span className="opacity-70 fa-16">
                                       Question 1{" "}
                                       <span className="color-lightblue">+</span>
                                    </span>
                                 </div>
                              </div>
                              <div className="components-slider-images lightblue-bg-op-79 position-lightblue ">
                                 <span>
                                    <img
                                       src={ArrowlImage}
                                       className="arrowleftimg"
                                       alt=""
                                    />
                                 </span>
                                 <div className="d-flex flex-column">
                                    <span className="fa-18">Bridge the Gap!</span>
                                    <span className="opacity-70 fa-16">Gap Analysis</span>
                                 </div>
                              </div>
                           </div>
                           <div className="max-w-720 ms-0 text-white-qa">
                              <h6 className="text-white-qa fa-28  ">
                                 Work<span className="color-lightblue">.</span> Life.
                                 Culture<span className="color-orange">.</span>
                              </h6>
                              <h1 className="text-white-qa fa-55   fa-graphik-graphiksemibold mb-11">
                                 Culture Check
                              </h1>
                              <p className="fa-28   mb-0">
                                 Discover your culture and your people, and identify
                                 opportunities for improvement by effective
                                 collaboration.
                              </p>
                           </div>
                        </div>
                     </div>
                  </SwiperSlide>
                  <SwiperSlide>
                     <div className="slider-items bg-white">
                        <div className="h-100 padding-settings">
                           <img
                              src={logoBlackImage}
                              className="mb-55 image-logo"
                              alt=""
                           />
                           <div className="image-slider text-white-qa">
                              <img
                                 className=""
                                 src={sliderImage2Image}
                                 alt=""
                              />
                              <div className=" components-slider-images box-shadow-sliderimages white-bg-op-79 slideno2 position-white">
                                 <span>
                                    <img
                                       src={videoImage}
                                       className="videoimg"
                                       alt=""
                                    />
                                 </span>
                                 <div className="d-flex flex-column">
                                    <span className="fa-18 color-black">
                                       Employee Engagement
                                    </span>
                                    <span className="opacity-70 fa-16 color-black">
                                       Culture: Ep 05
                                    </span>
                                 </div>
                              </div>
                              <div className=" components-slider-images orange-bg-op-79 slideno2 position-orange">
                                 <span>
                                    <img
                                       src={eLearningImage}
                                       className="elearningimg"
                                       alt=""
                                    />
                                 </span>
                                 <span className="fa-18">
                                    Leadership and <br /> Organizational Learning
                                 </span>
                              </div>
                              <div className=" components-slider-images red-bg-op-79 slideno2 position-red">
                                 <span>
                                    <img
                                       src={barsProgressImage}
                                       className="barsimg"
                                       alt=""
                                    />
                                 </span>
                                 <span className="fa-18">Almost There</span>
                              </div>
                              <div className=" components-slider-images black-bg-op-79 slideno2 position-black">
                                 <span>
                                    <img
                                       src={checkRedImage}
                                       className="heckredimg"
                                       alt=""
                                    />
                                 </span>
                                 <div className="d-flex flex-column">
                                    <span className="fa-18">Get Culturefy Certified</span>
                                    <span className="align-items-center d-flex fa-14 justify-content-between opacity-70">
                                       Perks &#38; Opportunities
                                       <span className="color-lightblue">
                                          <img
                                             className="d-inline-block"
                                             src={smallTriangleImage}
                                             alt=""
                                          />
                                       </span>
                                    </span>
                                 </div>
                              </div>
                              <div className=" components-slider-images lightblue-bg-op-79 slideno2 position-lightblue">
                                 <span>
                                    <img
                                       src={graduateImage}
                                       alt=""
                                    />
                                 </span>
                                 <div className="d-flex flex-column">
                                    <span className="fa-18">Culture Academy</span>
                                 </div>
                              </div>
                           </div>
                           <div className="max-w-720 ms-0">
                              <h6 className="text-black-qa fa-28 ">
                                 Work<span className="color-lightblue">.</span> Life.
                                 Culture<span className="color-orange">.</span>
                              </h6>
                              <h1 className="text-black-qa fa-55 fa-graphik-graphiksemibold mb-11  ">
                                 Learning and Development
                              </h1>
                              <p className="fa-28 mb-0 ">
                                 Discover your culture and your people, and identify
                                 opportunities for improvement by effective
                                 collaboration.
                              </p>
                           </div>
                        </div>
                     </div>
                  </SwiperSlide>
                  <SwiperSlide>
                     <div className="slider-items bg-lightblue">
                        <div className="h-100 padding-settings">
                           <img
                              src={sliderLogo}
                              className="mb-55 image-logo"
                              alt=""
                           />

                           <div className="image-slider text-white-qa">
                              <img
                                 src={sliderImage3}
                                 alt=""
                              />
                              <div className=" components-slider-images box-shadow-sliderimages white-bg-op-79 slideno3 position-white">
                                 <span>
                                    <img
                                       src={redeemImage}
                                       alt=""
                                    />
                                 </span>
                                 <div className="d-flex flex-column">
                                    <span className="fa-18 color-black">
                                       Redeem Rewards
                                    </span>
                                 </div>
                              </div>
                              <div className=" components-slider-images orange-bg-op-79 slideno3 position-orange">
                                 <span>
                                    <img
                                       src={trophyImage}
                                       className="trophyimg"
                                       alt=""
                                    />
                                 </span>
                                 <span className="fa-18">Award great service</span>
                              </div>
                              <div className=" components-slider-images red-bg-op-79 slideno3 position-red">
                                 <span>
                                    <img
                                       src={handmoneyImage}
                                       className="handmoneyimg"
                                       alt=""
                                    />
                                 </span>
                                 <span className="fa-18">Reward Colleagues</span>
                              </div>
                              <div className=" components-slider-images black-bg-op-79 slideno3 position-black">
                                 <span className="extra-design-slide-3">
                                    <img
                                       src={bullseyeImage}
                                       alt=""
                                    />
                                 </span>
                                 <div className="d-flex flex-column">
                                    <span className="fa-14 opacity-70 pb-2">
                                       <span className="d-inline-block me-2">
                                          <img
                                             src={arrowBottomImage}
                                             alt=""
                                          />
                                       </span>
                                       More Points More Rewards!
                                    </span>
                                    <span className="align-items-center d-flex fa-18 justify-content-between">
                                       Increase productivity <br /> and confidence
                                    </span>
                                 </div>
                              </div>
                           </div>
                           <div className="max-w-720 ms-0 text-white-qa">
                              <h6 className="text-white-qa fa-28 ">
                                 Work<span className="color-lightblue">.</span> Life.
                                 Culture<span className="color-orange">.</span>
                              </h6>
                              <h1 className="text-white-qa fa-55 fa-graphik-graphiksemibold mb-11 ">
                                 Rewards and Recognition
                              </h1>
                              <p className="fa-28 mb-0 ">
                                 Become an employer of choice by creating outstanding
                                 employee experiences from entry to exit.
                              </p>
                           </div>
                        </div>
                     </div>
                  </SwiperSlide>
                  <SwiperSlide>
                     <div className="slider-items bg-orange">
                        <div className="h-100 padding-settings">
                           <img
                              src="images/logo.png"
                              className="mb-55 image-logo"
                              alt=""
                           />
                           <div className="image-slider text-white-qa">
                              <img
                                 src={sliderImage4}
                                 alt=""
                              />

                              <div className=" p-0 components-slider-images white-bg-op-79 slideno4 position-white">
                                 <span>
                                    <img
                                       src={componentImage}
                                       className="componentimgshare"
                                       alt=""
                                    />
                                 </span>
                              </div>
                              <div className=" components-slider-images black-bg-op-79 slideno4 position-black">
                                 <span>
                                    <img
                                       src={profileImage}
                                       alt=""
                                    />
                                 </span>
                                 <div className="d-flex flex-column">
                                    <span className="fa-18">Social Profile</span>
                                    <span className="opacity-70 fa-16">
                                       Connect, chat, share
                                    </span>
                                 </div>
                              </div>
                              <div className=" components-slider-images lightblue-bg-op-79 slideno4 position-lightblue">
                                 <span>
                                    <img
                                       src={heartTickImage}
                                       alt=""
                                    />
                                 </span>
                                 <div className="d-flex flex-column">
                                    <span className="fa-18">Safe Space</span>
                                    <span className="opacity-70 fa-16">
                                       Private. Sound. Safe.
                                    </span>
                                 </div>
                              </div>
                              <div className=" components-slider-images red-bg-op-79  slideno4 position-red">
                                 <span>
                                    <img
                                       src={bookOpenReaderImage}
                                       alt=""
                                    />
                                 </span>
                                 <span className="fa-18">Mentorship</span>
                              </div>
                           </div>
                           <div className="max-w-720 ms-0 text-white-qa">
                              <h6 className="text-white-qa fa-28 ">
                                 Work<span className="color-lightblue">.</span> Life.
                                 Culture<span className="color-orange">.</span>
                              </h6>
                              <h1 className="text-white-qa fa-55 fa-graphik-graphiksemibold mb-11 ">
                                 Community
                              </h1>
                              <p className="fa-28 mb-0 ">
                                 Foster a social community by engaging in Resource
                                 Groups: The foundation of Culturefy is based on building
                                 amazing work-life culture.
                              </p>
                           </div>
                        </div>
                     </div>
                  </SwiperSlide>
                  <SwiperSlide>
                     <div className="slider-items bg-black">
                        <div className="h-100 padding-settings">
                           <img
                              src={sliderLogo}
                              className="mb-55 image-logo"
                              alt=""
                           />

                           <div className="image-slider text-white-qa">
                              <img
                                 src={sliderImage5}
                                 alt=""
                              />
                              <div className=" components-slider-images p-0 white-bg-op-79 slideno5 position-white">
                                 <span>
                                    <img
                                       src={slide5Image}
                                       className="slide5img"
                                       alt=""
                                    />
                                 </span>
                              </div>
                              <div className=" components-slider-images orange-bg-op-79 slideno5 position-orange">
                                 <span>
                                    <img
                                       src={aiImage}
                                       alt=""
                                    />
                                 </span>
                                 <span className="fa-18">
                                    Get Recommendations <br /> From Artificial
                                    Intelligence
                                 </span>
                              </div>
                              <div className=" components-slider-images red-bg-op-79 slideno5 position-red">
                                 <span>
                                    <img
                                       src={bookOpenReaderImage}
                                       alt=""
                                    />
                                 </span>
                                 <div className="d-flex flex-column">
                                    <span className="fa-18">Target Custom Audiences</span>
                                    <span className="opacity-70 fa-14">
                                       <span className="d-inline-block me-1">
                                          <img
                                             src={pathImage}
                                             alt=""
                                          />
                                       </span>
                                       Initiating AI...
                                    </span>
                                 </div>
                              </div>
                              <div className=" components-slider-images lightblue-bg-op-79 slideno5 position-lightblue">
                                 <span>
                                    <img
                                       src={speakersImage}
                                       alt=""
                                    />
                                 </span>
                                 <span className="fa-18">
                                    Create Communication <br /> Campaigns
                                 </span>
                              </div>
                           </div>
                           <div className="max-w-720 ms-0 text-white-qa">
                              <h6 className="text-white-qa fa-28 ">
                                 Work<span className="color-lightblue">.</span> Life.
                                 Culture<span className="color-orange">.</span>
                              </h6>
                              <h1 className="text-white-qa fa-55 fa-graphik-graphiksemibold mb-11 ">
                                 Campaigns
                              </h1>
                              <p className="fa-28 mb-0 ">
                                 Launch communications campaigns and review media files
                                 before launching collaboratively.
                              </p>
                           </div>
                        </div>
                     </div>
                  </SwiperSlide>
               </Swiper>
            </div>
            
         </div>
  );
};

export default AuthSlider;
