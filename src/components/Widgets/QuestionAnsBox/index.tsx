import { useEffect, useState } from "react";
import global from "src/global.module.scss";
import Styles from "../styles.module.scss";
import Heading from "src/components/common/Heading";
import EditableAnswer from 'src/components/common/EditableAnswer'
import { updateBCSanswer } from "src/store/apps/BCSanswers";
import { useDispatch } from "react-redux";
import { AppDispatch } from "src/store";

function QuestionAnsBox(props: any) {

  const dispatch = useDispatch<AppDispatch>()

  const submitAnswer = (answer: string, setDisabled: (param: Boolean) => void) => {
    setDisabled(true)

    const answerBody = {
      answer_id: props?.questions?.answers?._id,
      answer: answer,
      question: props.questions._id
    }

    // Put request if answer already exists
    dispatch(updateBCSanswer({ answerBody, dispatch }))
  }

  return (
    <div className={Styles.strategyBox}>
      <div className={Styles.strategyImg}>
        <div className={global.roundImg40}>
          <img src={props.icon} alt="Question" className={global.fullImg} />
        </div>
      </div>
      <div className={Styles.strategyText}>
        <div className={`${Styles.headingBox} ${global.grayBox}`}>
          <Heading label={props.title} color="secondaryText" />
        </div>
        <div className={Styles.questionBox}>
          <p> {props.questions?.question} </p>
        </div>
        <EditableAnswer submitAnswer={submitAnswer}
          answer={props?.questions?.answers?.answer}
        // If answer exists use answer if not use placeholder text
        />
      </div>
    </div>
  );
}

export default QuestionAnsBox;
