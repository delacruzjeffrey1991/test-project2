import { useEffect } from "react";
import { RiShareForwardLine } from "react-icons/ri";
import { Col, Row } from "react-bootstrap";
import global from "../../global.module.scss";
import Styles from "./styles.module.scss";

import BrandCategories from "../../components/BrandCategories";
import Heading from "../../components/common/Heading";
import IconButton from "../../components/common/IconButton";

import planeImg from "../../assets/images/plan-circle.svg";
import missionImg from "../../assets/images/mission.svg";

import geoImg from "../../assets/images/go-circle.svg";

import possesImg from "../../assets/images/posses-icon.svg";
import possesSmImg from "../../assets/images/possess-sm.svg";

import FilterBtn from "../../components/common/FilterBtn";
import Recommendation from "../../components/common/Recommendation";

import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "src/store/apps/categories";
import { positionGoalsFetchAction, brandAuditFetchAction, possesCardsFetchAction } from "src/store/apps/global";
import { AppDispatch } from "src/store";

import SkeletonLoading from "src/components/SkeletonLoading";
import PageSkeletonLoader from 'src/components/SkeltonLoaders/PageSkeletonLoader'

import GoalsWidget from "src/components/Widgets/GoalsWidget";
import PossessWidget from "src/components/Widgets/PossessWidget";
import SelectWidget from "src/components/SelectWidget"

function BrandCultureStartegy() {

  const dispatch = useDispatch<AppDispatch>();

  const { categories } = useSelector((state: any) => state.category);

  const { position_goals, brand_audits, posses_cards } = useSelector((state: any) => state.global);

  const store = useSelector((state: any) => state.category);

  const filterOptions = [
    {
      value: "1",
      label: "1",
    },
    {
      value: "2",
      label: "2",
    },
    {
      value: "3",
      label: "3",
    },
  ];

  useEffect(() => {
    dispatch(fetchCategories(dispatch));
    dispatch(positionGoalsFetchAction(dispatch));
    dispatch(possesCardsFetchAction(dispatch));
  }, []);


  return (
    <SkeletonLoading loaded={store.status === 'pending' ? false : true} loader={<PageSkeletonLoader />}>
      <Row>
        <Col md={8}>

          <div className={`${Styles.brandingBox}`}>
            <BrandCategories />
            <div className={`${Styles.keyActions} ${global.dflexCenter}`}>
              <Heading label="Key Actions" variant="heading4" />
              <IconButton icon={<RiShareForwardLine />} />
            </div>
          </div>

          <div
            className={`${Styles.strRightMain} ${global.maxheight65} ${global.scrollbarNone}`}
          >

            <div className={`${Styles.headingWithImg} ${global.dflexCenter}`}>
              <div className={global.roundImg55}>
                <img src={planeImg} alt="headingImg" className={global.fullImg} />
              </div>
              <div className="graphik-semibold">
                <Heading label={categories[0]?.title} variant="heading2" />
              </div>
            </div>

            {/* Normal Questions */}
            {categories[0]?.subCategories?.map((sub_category: any) => <SelectWidget {...sub_category} />)}

            <div className={Styles.planMain}>
              <div className={`${Styles.headingWithImg} ${global.dflexCenter}`}>
                <div className={global.roundImg55}>
                  <img src={geoImg} alt="headingImg" className={global.fullImg} />
                </div>
                <div>
                  <Heading label="Position" variant="heading2" />
                </div>
              </div>
              {/* Position Goals */}
              <GoalsWidget
                image={missionImg}
                heading="Goals"
                question="Select at least one goal you want to achieve with your brand strategy."
                selected_list_top="Build a DE-I-mature Organization Build a DE-I-mature"
                goals_list={position_goals}

              />
            </div>

            <div className={Styles.planMain}>
              <div className={`${Styles.headingWithImg} ${global.dflexCenter}`}>
                <div className={global.roundImg55}>
                  <img
                    src={possesImg}
                    alt="headingImg"
                    className={global.fullImg}
                  />
                </div>
                <div>
                  <Heading label="Possess" variant="heading2" />
                </div>
              </div>
              {/* Possess Cards */}
              <PossessWidget
                image={possesSmImg}
                heading="Campaigns, Activations, and Tactics"
                question={`You might not be fully aware of the reputation your company has among job seekers or even your own employees. Send out internal surveys, conduct social media searches, check out sites like Glassdoor to read reviews, or hire a firm that administers reputation monitoring. 
                              Ultimately, your research should uncover your employees’ favorite aspects of your company culture that you can focus on highlighting as well as any areas for improvement to ensure a strong employer brand.`}
                posses_cards_data={posses_cards}
              />

            </div>
          </div>
        </Col>

        <Col md={4}>
          <div className={Styles.recommendationsMain}>
            <Heading label="Recommendations" variant="heading3" />
          </div>
          <div className={Styles.filterBtnsGroup}>
            <FilterBtn label="Filter" option={filterOptions} />
            <FilterBtn label="Sort" option={filterOptions} />
          </div>
          <div className={`${global.maxheight65} ${global.scrollbarNone}`}>
            <Recommendation
              subHeading="CULTURE CHECK"
              heading="Conduct a Survey"
              text="Uncover your employees’ favorite aspects of your company culture."
            />
            <Recommendation
              subHeading="CULTURE CHECK"
              heading="Check Employee NPS"
              text="Find your Employee Net Promoter Score"
            />
            <Recommendation
              subHeading="CULTURE CHECK"
              heading="View Culture Scorecard"
              text="Short description here, perspic unde omnis iste natus"
            />
            <Recommendation
              subHeading="CULTURE CHECK"
              heading="Provide Social and Monetary Rewards"
              text="Short description here"
            />
            <Recommendation
              subHeading="REWARDS AND RECOGNITION"
              heading="Reward Organizational Accomplishments"
              text="Short description here, perspic unde omnis iste natus"
            />
            <Recommendation
              subHeading="LEARNING AND DEVELOPMENT"
              heading="Teach Employees with Courses"
              text="Short description here, perspic unde omnis iste natus"
              buttonLabel="Take Action"
            />

          </div>
        </Col>
      </Row>
    </SkeletonLoading>
  );
}


export default BrandCultureStartegy;