import { useEffect, useState } from "react";
import global from "src/global.module.scss";
import Styles from "../styles.module.scss";
import Styles_module from "./styles.module.scss";
import Heading from "src/components/common/Heading";
import IconButton from "src/components/common/IconButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux"
import Button from "src/components/common/Button";
import { updateBCSanswer } from "src/store/apps/BCSanswers";
import { AppDispatch } from "src/store";

function GoalsWidget(props: any) {

  const dispatch = useDispatch<AppDispatch>()

  const { categories } = useSelector((state: any) => state.category)
  const [showDropdown, setShowDropdown] = useState(false);
  const [selected_goals, setSelected_goals] = useState([]);

  // Position Answer 
  const question = categories[1]?.subCategories[0]?.questions

  const selectGoals = (e: any, item: any) => {

    const checked = e.target.checked

    if (!checked) return

    const itemBody = {
      ...item,
      checked: checked
    }

    const itemExist = selected_goals.findIndex(goal => goal._id === itemBody._id);

    if (itemExist === -1) return setSelected_goals([...selected_goals, itemBody])

  }

  const removeGoals = (selectedItem: any) => {

    const goals = [...selected_goals]

    const modified = goals.filter((goal: any) => goal?._id !== selectedItem?._id)

    setSelected_goals(modified)

  }


  const answersExist = (array1, array2) => {

    const answers = array1.filter((goal: any) => {
      return array2.some((answer: any) => {
        return goal._id === answer
      })
    })

    const answersWithChecked = answers.map((ans: any) => Object.assign({}, ans, { checked: true }))

    setSelected_goals(answersWithChecked)
    
  }

  useEffect(() => {

    if (question?.answers?.answer?.length) {

      answersExist(props.goals_list, question?.answers?.answer)

    }

  }, [props.goals_list])


  const onSave = () => {

    const selectedGoalsIDs = []

    selected_goals.forEach((goal) => selectedGoalsIDs.push(goal._id))

    const answerBody = {
      answer: selectedGoalsIDs,
      answer_id: question?.answers?._id,
    }

    dispatch(updateBCSanswer({ answerBody, dispatch }))

  }

  return (
    <>
      <div className={Styles.strategyBox}>
        <div className={Styles.strategyImg}>
          <div className={global.roundImg40}>
            <img src={"https://res.cloudinary.com/dw7nck3bs/image/upload/v1668681605/go-sm_tjabcz.svg"} alt="Question" className={global.fullImg} />
          </div>
        </div>
        <div className={Styles.strategyText}>
          <div className={`${Styles.headingBox} ${global.grayBox}`}>
            <Heading label={props.heading} color="secondaryText" />
          </div>
          {props.question ? (
            <div className={`${Styles.questionBox} ${'mb-0'}`}>
              <p> {props.question} </p>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className={`${global.pl_75}`}>
        <div className={`${Styles_module.MultiSelectBoxWrapper} ${global.grayBox}`}>
          <div className={Styles_module.selectDropdown}>
            <div className={Styles_module.selectboxDisplay}>
              <span className={Styles_module.searchIcon}>
                <IconButton icon={<FontAwesomeIcon icon={faSearch} />} />
              </span>
              <span className={Styles_module.selectedItem}>
                {props.selected_list_top}
              </span>
              <span
                className={Styles_module.dropdownIcon}
                onClick={() => setShowDropdown(!showDropdown)}
              >
                <FontAwesomeIcon icon={faAngleDown} />
              </span>
            </div>
            <ul
              className={`${Styles_module.dropdownMenu} ${showDropdown ? Styles_module.show : ""
                }`}
            >
              {
                props.goals_list.map((goal: any) => {
                  return (
                    <li className={Styles_module.selectList}
                    >
                      <label htmlFor={goal._id} >
                        <input
                          type="checkbox"
                          id={goal._id}
                          onChange={(e) => selectGoals(e, goal)}
                          value={goal.title}
                        />
                        <span> {goal.title} </span>
                      </label>
                    </li>
                  );
                })
              }
            </ul>

          </div>
          <ul className={Styles_module.selectedList}>
            {
              selected_goals.map((selected_goal: any) => {
                return (
                  <li className={Styles_module.selectList}>
                    <label>
                      <input type="checkbox" id={selected_goal.id} checked={selected_goal.checked} onChange={() => removeGoals(selected_goal)} /> <span>{selected_goal.title}</span>
                    </label>
                  </li>
                )
              })
            }
          </ul>
          {
            selected_goals.length ? (
              <div>
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
        </div>
      </div>
    </>
  );
}

export default GoalsWidget;
