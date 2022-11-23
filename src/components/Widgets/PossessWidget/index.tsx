import { useEffect, useState } from "react";
import global from "src/global.module.scss";
import Styles from "../styles.module.scss";
import Styles_module from "./styles.module.scss";

import Heading from "src/components/common/Heading";
import PossesCard from "src/components/common/PossesCard";
import Button from "src/components/common/Button";
import { AppDispatch } from "src/store";
import { useDispatch, useSelector } from "react-redux"
import { updateBCSanswer } from "src/store/apps/BCSanswers";

function PossessWidget(props: any) {

  const { categories } = useSelector((state: any) => state.category)
  const [selected_possess, setSelected_possess] = useState([])
  const dispatch = useDispatch<AppDispatch>()

  // Position Answer 
  const question = categories[2]?.subCategories[0]?.questions

  const selectPossess = (e: any, id: string) => {

    const itemExist = selected_possess.findIndex(goal => goal === id);

    if (!e.target.checked) {
      if (itemExist !== -1) return setSelected_possess(selected_possess.filter(x => x !== id))
    } else {
      if (itemExist === -1) return setSelected_possess([...selected_possess, id])
    }

  }

  const onSave = () => {

    const answerBody = {
      answer: selected_possess,
      answer_id: question?.answers?._id,
    }


    dispatch(updateBCSanswer({ answerBody, dispatch }))
  }

  useEffect(() => {
    if (question?.answers?.answer.length) setSelected_possess(question?.answers?.answer)
  }, [])

  return (
    <>
      <div className={Styles.strategyBox}>
        <div className={Styles.strategyImg}>
          <div className={global.roundImg40}>
            <img src={props.image} alt="Question" className={global.fullImg} />
          </div>
        </div>
        <div className={Styles.strategyText}>
          <div className={`${Styles.headingBox} ${global.grayBox}`}>
            <Heading label={props.heading} color="secondaryText" />
          </div>
          {props.question ? (
            <div className={`${Styles.questionBox} ${"mb-0"}`}>
              <p> {props.question} </p>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>

      {
        props.posses_cards_data ?
          <div className={`${global.pl_75}`}>
            <div className={`${Styles.cardsAudit} ${global.grayBox}`}>
              {props.posses_cards_data?.map((posses_cards: any) => {
                const isExist = selected_possess.find(x => x === posses_cards._id)
                return (
                  <PossesCard
                    variant={posses_cards.color}
                    image={posses_cards.image}
                    title={posses_cards.title}
                    text={posses_cards.description}
                    points={posses_cards.points}
                    text_color={posses_cards.text_color}
                    inpId={posses_cards._id}
                    selected_possess={selected_possess}
                    setSelected_possess={setSelected_possess}
                    selectPossess={selectPossess}
                    checked={isExist ? true : false}
                  />
                );
              })}
            </div>
            {
              selected_possess.length ? (
                <div className="text-end">
                  <span className={Styles_module.saveBtn}>
                    <Button
                      label="Save"
                      variant="transparent"
                      color="primary"
                      onClick={onSave}
                    />
                  </span>
                </div>
              )
                :
                null
            }
          </div> : ''
      }

    </>
  );
}

export default PossessWidget;
