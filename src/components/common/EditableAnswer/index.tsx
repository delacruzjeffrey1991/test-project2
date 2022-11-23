import React, { useState } from "react";
import global from "src/global.module.scss";
import Styles from "./styles.module.scss";
import { TbEdit } from "react-icons/tb";
import IconButton from "src/components/common/IconButton";
import Button from "src/components/common/Button";

function EditableAnswer(props: any) {
  const [disabled, setDisabled] = useState(true);
  const [ans, setAns] = useState(props.answer);

  return (
    <>
      <div>
        <div className={`${Styles.ansBox} ${global.grayBox}`}>
          <textarea
            name="answer"
            disabled={disabled}
            value={ans}
            onChange={(e) => setAns(e.target.value)}
          ></textarea>
          <span
            className={`${Styles.editIcon}`}
            onClick={() => setDisabled(false)}
          >
            {disabled ? <IconButton icon={<TbEdit />} /> : ""}
          </span>
          {disabled ? (
            ""
          ) : (
            <span className={Styles.saveBtn}>
              <Button
                label="Save"
                variant="transparent"
                color="primary"
                onClick={() => props.submitAnswer(ans, setDisabled)}
              />
            </span>
          )}
        </div>
      </div>
    </>
  );
}

export default EditableAnswer;
