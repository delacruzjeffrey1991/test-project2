import React from 'react'
import Styles from './styles.module.scss'
import Heading from '../../components/common/Heading';

import demoGraph from '../../assets/images/app-status-graph.png'
import RecognitionUser from './RecognitionUser'
import inst1Img from '../../assets/images/inst1.png'
import inst2Img from '../../assets/images/inst2.png'
import inst3Img from '../../assets/images/inst3.png'
import inst4Img from '../../assets/images/inst4.png'
function Recognition() {
  return (
    <div className={Styles.recognitionMain}>
      <Heading label='Recognition' />
      <div className={Styles.recogImg}>
        <img src={demoGraph} alt='graph' className={Styles.imgFull} />
      </div>
      <Heading label='Recognition History' />
      <div>
        <RecognitionUser userImg={inst1Img} username='Nu' time='Never' />
        <RecognitionUser userImg={inst2Img} username='Ayaka' time='Never' />
        <RecognitionUser userImg={inst3Img} username='Ju Anderson' time='2 Weeks Ago' />
        <RecognitionUser userImg={inst4Img} username='Benjamin Smith' time='3d ago' />
      </div>
    </div>
  )
}

export default Recognition