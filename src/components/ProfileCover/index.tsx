import React from 'react'
import Styles from './styles.module.scss'
import adminImg from '../../assets/images/admin-img.png'


import BasicInfo from '../../components/BasicInfo';
import ProfileCount from '../../components/ProfileCount';
import Button from '../../components/common/Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShare } from '@fortawesome/free-solid-svg-icons'

import { FaHamburger, FaMapMarkerAlt, FaPen } from 'react-icons/fa';

function ProfileCover(props:any) {
  return (
    <div className={Styles.coverMain}>
      <div className={Styles.coverImg}>
        <img src={props.userCoverImg}  alt='cover'/>
      </div>
      <div className={Styles.userInfoMain}>
        <BasicInfo userImg={adminImg} userName='John Doe' designation='Manager' OpenTo='Open to Mentorship' />
        <div>
          <div className={Styles.profileCounts}>
            <ProfileCount count='500+' text='Points Balance' variant='primary' />
            <ProfileCount count='2k+' text='Points to Award' variant='yellow' />
            <ProfileCount count='1k+' text='Followers' variant='secondary' />
            <ProfileCount count='40' text='Following' variant='gray' />
          </div>
          <div className={Styles.profileActionBtns}>
            <Button 
              label='FOOD AND BEVERAGE' 
              icon={<FaHamburger />}
              variant='transparent' 
              color='gray' 
              size='sizeAuto'
            />
            <Button 
              label='ATALANTA GA' 
              icon={<FaMapMarkerAlt />}
              variant='transparent' 
              color='gray'
              size='sizeAuto'
            />
            <Button 
              label='SHARE' 
              icon={<FontAwesomeIcon icon={faShare} />}
              variant='transparent' 
              color='gray' 
              size='sizeAuto'
            />
            <Button
              label='Edit Profile'
              variant='filled'
              color='primary'
              icon={<FaPen />}
            />
            <Button
              label='More'
              variant='outlined'
              color='black'
              size='smallBtn'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileCover