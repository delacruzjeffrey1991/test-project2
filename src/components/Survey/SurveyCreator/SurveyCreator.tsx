import { useState } from "react";
import { SurveyCreatorComponent, SurveyCreator } from "survey-creator-react";
import { registerMyQuestion } from "../SurveyQuestions/SurveyQuestions";
import "survey-core/defaultV2.css";
import "survey-creator-core/survey-creator-core.css";

registerMyQuestion();

export default function SurveyCreatorWidget(props: { json: any; }) {
  let [creator, setCreator] = useState<any>();
  // const [survey, setSurvey] = useState("")

  if (creator === undefined) {
    let options = { showLogicTab: false, showTranslationTab: true, haveCommercialLicense: true, showJSONEditorTab: false };
    creator = new SurveyCreator(options);
    creator.saveSurveyFunc = (no: any, callback: any) => {
      console.log(creator.JSON);
      // setSurvey(JSON.stringify(creator.JSON))
      callback(no, true);
    };
    setCreator(creator);
  }

  creator.JSON = props.json;

  return (
    <div style={{ height: "calc(100% - 70px)" }}>
      {/* <script type="text/html" id="custom-tab-survey-templates">
          {`<div id="test">TEST</div>`}
        </script> */}
      <SurveyCreatorComponent creator={creator} />
    </div>
  );
}
