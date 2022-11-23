import React from 'react'
import QuestionAnsBox from '../Widgets/QuestionAnsBox'
import QuesAnsWithCheckBox from '../Widgets/QuesAnsWithCheckBox'
import types from 'src/constants/BcsQuestionTypes'

const Index = (props) => {
    switch (props.questions.type) {
        case types.TEXT:
            return <QuestionAnsBox {...props} />
        case types.BRAND_AUDIT:
            return <QuesAnsWithCheckBox {...props} />
        default:
            break;
    }
}

export default Index