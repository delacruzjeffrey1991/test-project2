import { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import Businessinfo1 from "../Businessinfo1";
import Businessinfo2 from "../Businessinfo2";
import Businessinfo3 from "../Businessinfo3";
import { canSendRequest } from "src/business/BusinessProfile";
import { useAuth } from "src/hooks/form/useAuth";

const Comp = () => {

  const [params, setParams] = useSearchParams();
  const tab = params.get("tab") || "";

  const { userBusinessAdd } = useAuth(null)
  const navigate = useNavigate()

  const initialValue = {
    org_chart: "",
    employe_handbook: "",
    turnover_data: "",
    exit_interview: "",
    historical_employee_engagement: "",
    demographic_info: "",
    kickoff_session: "",
    survey_result: "",
    hr_point_person: "",
    business_history_describe: "",
    business_operating_start_date: "",
    known_as: "",
    business_describe: "",
    business_name: ""
  }

  // If Localstorage has business_info key use it else use initial state
  const [businessInfo, setBusinessInfo] = useState(localStorage.getItem("business_info") ? JSON.parse(localStorage.getItem("business_info") || "") : initialValue)

  useEffect(() => {
    if (!tab) setParams({ tab: "1" })
  })

  useEffect(() => {
    localStorage.setItem("business_info", JSON.stringify(businessInfo))
    return () => localStorage.removeItem("business_info")
  }, [businessInfo])


  const onSkip = () => {
    const canSubmit = canSendRequest(businessInfo)
    if (canSubmit) return userBusinessAdd(businessInfo)
    navigate("/")
  }

  const onSubmit = () => {
    userBusinessAdd(businessInfo)
  }

  switch (tab) {
    case "1":
      return <Businessinfo1 onSkip={onSkip} businessInfo={businessInfo} setBusinessInfo={setBusinessInfo} />;
    case "2":
      return <Businessinfo2 onSkip={onSkip} businessInfo={businessInfo} setBusinessInfo={setBusinessInfo} />;
    case "3":
      return <Businessinfo3 onSubmit={onSubmit} onSkip={onSkip} businessInfo={businessInfo} setBusinessInfo={setBusinessInfo} />;
    default:
      return <></>;
  }

};

const BusinessInfoMain = () => {
  return <Comp />
};

export default BusinessInfoMain;
