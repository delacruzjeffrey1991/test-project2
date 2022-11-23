import React, { Dispatch, SetStateAction } from "react";
import { useNavigate } from "react-router";
import Button from "../common/Button";
import Heading from "../common/Heading";
import TextFieldQa from "../common/TextFieldQa";
import global from '../../global.module.scss'
import { BusinessInfoType } from "src/types/auth";


const Businessinfo1 = ({ onSkip, businessInfo, setBusinessInfo }: BusinessInfoType) => {
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
        <Heading label="Business Information:" variant="heading1" />
        {/* <Input /> */}
        <TextFieldQa label="Business Name:" name="business_name" onChange={onChange}
          value={businessInfo.business_name} placeholder="Description Here.." />
        <TextFieldQa
          label="Briefly describe what your business does:"
          placeholder="Description Here.."
          name="business_describe"
          onChange={onChange}
          value={businessInfo.business_describe}
        />
        <TextFieldQa
          label="Also known as(if applicable):"
          placeholder="Description Here.."
          name="known_as"
          onChange={onChange}
          value={businessInfo.known_as}
        />
        <TextFieldQa
          label="What year did your business start operating:"
          placeholder="Description Here.."
          name="business_operating_start_date"
          onChange={onChange}
          value={businessInfo.business_operating_start_date}
        />
        <div>
          <Button
            variant="filled"
            color="secondary"
            label="Next"
            size="medium"
            onClick={() => navigate("/auth/business-info?tab=2")}
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

export default Businessinfo1;
