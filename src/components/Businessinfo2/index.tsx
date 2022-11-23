import React from "react";
import Button from "../common/Button";
import Heading from "../common/Heading";
import TextFieldQa from "../common/TextFieldQa";
import global from "../../global.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import IconButton from "../common/IconButton";
import { useNavigate } from "react-router";
import { BusinessInfoType } from "src/types/auth";

const Businessinfo2 = ({ onSkip, businessInfo, setBusinessInfo }: BusinessInfoType) => {
  const navigate = useNavigate();

  const onChange = (e : any) => {
    setBusinessInfo({
      ...businessInfo,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className={global.businessInfoMain}>
      <div className={global.formsBusiness}>
        <div className={global.prevIconform}>
          <IconButton
            icon={<FontAwesomeIcon icon={faArrowLeft} onClick={() => navigate("/auth/business-info?tab=1")}
            />}
          />
        </div>
        <Heading label="Business Information:" variant="heading1" />
        <TextFieldQa
          label="Describe a brief history of your business:"
          placeholder="Description Here.."
          name="business_history_describe"
          onChange={onChange}
          value={businessInfo.business_history_describe}
        />
        <TextFieldQa
          label="What level of involvement will your HR team have in this engagement? Who is your HR point person?"
          placeholder="Description Here.."
          name="hr_point_person"
          onChange={onChange}
          value={businessInfo.hr_point_person}
        />
        <TextFieldQa
          label="Has your business ever completed a diversity and inclusion survey? If so, can someone provide the survey results?"
          placeholder="Description Here.."
          name="survey_result"
          onChange={onChange}
          value={businessInfo.survey_result}
        />
        <TextFieldQa
          label="When would your company like to conduct an official kickoff session?"
          placeholder="Description Here.."
          name="kickoff_session"
          onChange={onChange}
          value={businessInfo.kickoff_session}
        />
        <div>
          <Button
            variant="filled"
            color="secondary"
            label="Next"
            size="medium"
            onClick={() => navigate("/auth/business-info?tab=3")}
          />
          <Button
            variant="transparent"
            color="gray"
            label="Skip for now"
            size="medium"
            onClick={onSkip}
          />
        </div>
      </div>
    </div>
  );
};

export default Businessinfo2;
