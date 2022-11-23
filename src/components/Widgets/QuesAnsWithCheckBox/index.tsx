import React, { useState } from "react";
import global from "src/global.module.scss";
import Styles from "../styles.module.scss";
import Heading from "src/components/common/Heading";
import EditableAnswer from 'src/components/common/EditableAnswer'

function QuesAnsWithCheckBox(props: any) {

  const [answerObj, setanswerObj] = useState(props?.questions?.answers)

  // console.log("=========================", answerObj);


  const onChange = (
    event: any,
    { card, options, subOptions }: { card: any, options: any, subOptions: any }
  ) => {

    // let cloneAnswerObj = { ...answerObj }
    // console.log(cloneAnswerObj);

    // console.log("CARD", card);
    // console.log("options", options);
    // console.log("subOptions", subOptions);

    // const subOptionsClone = { ...subOptions }
    // subOptionsClone.isChecked = true;

    // const optionsClone = { ...options }
    // optionsClone.subOptions[0] = subOptionsClone

    // console.log(optionsClone);


    // const selectedAnswerObjIndex = answerObj.answer.findIndex((c) => c._id === card._id)
    // const selectedOptionObjIndex = card.options.findIndex((item) => item._id === options._id)
    // const selectedSubOptionObjIndex = card.subOptions.findIndex((item) => item._id === options._id)

    // console.log(selectedAnswerObjIndex);
    // console.log(selectedOptionObjIndex);

    // cloneAnswerObj = {
    //   ...cloneAnswerObj,
    //   answer: [
    //     ...cloneAnswerObj.answer,
    //     { ...cloneAnswerObj.answer[0].is }
    //     // 0: {sssss}
    //   ]
    // }
    // console.log(cloneAnswerObj);


    // const kkkk = { ...cloneAnswerObj.answer[selectedAnswerObjIndex].options[selectedOptionObjIndex].subOptions[0] }
    // kkkk.isChecked = true
    // console.log(cloneAnswerObj.answer[selectedAnswerObjIndex].options[selectedOptionObjIndex].subOptions[0]);
    // cloneAnswerObj.answer[selectedAnswerObjIndex].options[selectedOptionObjIndex].subOptions[0].isChecked = true
    // cloneAnswerObj.answer[0].options[0].subOptions[0].isChecked = true

    // cloneAnswerObj.answer[selectedAnswerObjIndex].options[selectedOptionObjIndex].subOptions[0] = { ...cloneAnswerObj.answer[selectedAnswerObjIndex].options[selectedOptionObjIndex].subOptions[0], isSelected: true };

    // console.log(cloneAnswerObj);

    // answerObj.answer[selectedAnswerObjIndex].options[selectedOptionObjIndex] = {}

    // console.log(event.target)

    // console.log(question.questions, "questions")
    // const selectedAnswerIndex = props?.questions?.answers?.answer.findIndex((answer) => answer._id === question.questions._id)
    // const seletedAnswer = props?.questions?.answers?.answer[selectedAnswerIndex]
    // console.log(seletedAnswer);

    // console.log(question.question, "question")
    // console.log(question.subOptions, "subOptions")


  }

  return (
    <>
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
          {props.questions ? (
            <div className={Styles.questionBox}>
              <p> {props?.questions?.question} </p>
            </div>
          ) : (
            ""
          )}
          {props.answer ? (
            <EditableAnswer answer={props.answer} />
          ) : (
            ""
          )}
        </div>
      </div>

      {props?.questions?.answers?.answer?.length ? (
        <div className={`${global.pl_75}`}>
          <div className={`${Styles.cardsAudit} ${global.grayBox}`}>
            {/* First Map */}
            {props?.questions?.answers?.answer?.map((questions: any) => {
              return (
                <div className={Styles.boxQuest}>
                  <div className={Styles.boxHeading}>
                    <Heading label={questions.heading} variant="heading4" />
                  </div>
                  {/* Second Map */}
                  {questions.options.map((question: any) => {
                    return (
                      <div key={question.id} className={Styles.ansRadio}>
                        <p> {question.subHeading} </p>
                        <ul>
                          {/* Third Map */}
                          {question.subOptions.map((subOptions: any, index: any) => {
                            return (
                              <li key={index}>
                                <input id={subOptions._id} type="radio" onChange={(e) => onChange(e, {
                                  card: questions,
                                  options: question,
                                  subOptions
                                })} value={subOptions.value} name={`${subOptions.name}`} />
                                <label htmlFor={`${subOptions.name}`}>
                                  {subOptions.value}
                                </label>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        ""
      )}


    </>
  );
}

export default QuesAnsWithCheckBox;
