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

const Businessinfo3 = ({ onSubmit, onSkip, businessInfo, setBusinessInfo }: BusinessInfoType) => {
  const navigate = useNavigate();

  const onChange = (e: any) => {
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
            icon={<FontAwesomeIcon icon={faArrowLeft} onClick={() => navigate("/auth/business-info?tab=2")} />}
          />
        </div>
        <Heading
          label="Who should we work with to collect the following data elements:"
          variant="heading1"
        />
        <TextFieldQa
          label='A. Demographic information for all 200 "in scope" employees (includes role, tenure, start date, age, race/ethnicity, highest education, annual compensation, performance evaluations for prior 3 years, work location):'
          placeholder="Description Here.."
          name="demographic_info"
          onChange={onChange}
          value={businessInfo.demographic_info}
        />
        <TextFieldQa
          label="B. Historical employee engagement results:"
          placeholder="Description Here.."
          name="historical_employee_engagement"
          onChange={onChange}
          value={businessInfo.historical_employee_engagement}
        />
        <TextFieldQa label="C. Org Charts:" placeholder="Description Here.." name="org_chart"
          onChange={onChange}
          value={businessInfo.org_chart}
        />
        <TextFieldQa
          label="D. Employee handbook / HR policies:"
          placeholder="Description Here.."
          name="employe_handbook"
          onChange={onChange}
          value={businessInfo.employe_handbook}
        />
        <TextFieldQa
          label="E. Turnover data (prior 3 years):"
          placeholder="Description Here.."
          name="turnover_data"
          onChange={onChange}
          value={businessInfo.turnover_data}
        />
        <TextFieldQa
          label="F. Exit interview data (prior 3 years):"
          placeholder="Description Here.."
          name="exit_interview"
          onChange={onChange}
          value={businessInfo.exit_interview}
        />
        <div>
          <Button
            variant="filled"
            color="secondary"
            label="Submit"
            size="medium"
            onClick={onSubmit}
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


export default Businessinfo3;