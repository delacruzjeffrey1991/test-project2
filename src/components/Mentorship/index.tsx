import React from 'react'
import Styles from './styles.module.scss'
import Heading from '../../components/common/Heading';
// import Paragraph from '../../common/paragraph';
import Skill from '../../components/common/Skill';

import { GiWorld } from 'react-icons/gi';
import { FaRegLightbulb } from 'react-icons/fa';

function Mentorship() {
  return (
    <div className={Styles.mentorshipCard}>
      <Heading label='Mentorship' variant='heading4' />
      {/* <Paragraph
        label={`I have been in the workforce for over 10 years. Throughout that time, I have gained a lot of success, but only after about 5 times as many failures. I am the kind of mentor who is not afraid to tell you when you've failed, but will inspire you to get back up.`}
      /> */}
      <Heading label='Professional Skills' variant='heading4' />
      <ul className={Styles.menList}>
        <Skill icon={<FaRegLightbulb />} label='Writing' />
        <Skill icon={<FaRegLightbulb />} label='Attention to Detail' />
        <Skill icon={<FaRegLightbulb />} label='Strong Vocabulary' />
      </ul>
      <Heading label='Life Experiences' variant='heading4' />
      <ul className={Styles.menList}>
        <Skill icon={<GiWorld />} label='Overcoming adversity' />
        <Skill icon={<GiWorld />} label='Getting a graduate degree' />
        <Skill icon={<GiWorld />} label='Being passed on a promotion' />
      </ul>
    </div>
  )
}
export default Mentorship