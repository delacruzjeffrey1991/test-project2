import React, { useState } from "react";
import global from "../../global.module.scss";
import Styles from "./styles.module.scss";
import { TbEdit } from "react-icons/tb";
import Heading from "../../components/common/Heading";
import IconButton from "../../components/common/IconButton";
import Button from "../common/Button";

function StrategyBox(props: any) {
  const [editor, setEditor] = useState(false);
  return (
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
          <div className={Styles.questionBox}>
            <p> {props.question} </p>
          </div>
        ) : (
          ""
        )}
        {props.answer ? (
          <div className={`${Styles.ansBox} ${global.grayBox}`}>
            <p contentEditable={editor} className={`${editor ? Styles.editorPara : ""}`}> {props.answer} </p>
            <span
              className={`${Styles.editIcon} ${editor ? Styles.hide : Styles.show}`}
              onClick={() => setEditor(true)}
            >
              <IconButton icon={<TbEdit />} />
            </span>
            {editor ? (
              <span className={Styles.saveBtn}>
                <Button label="Save" variant="transparent" color="primary" onClick={() => setEditor(false)} />
              </span>
            ) : (
              ""
            )}
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default StrategyBox;
