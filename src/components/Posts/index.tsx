import React from 'react'
import PropTypes from 'prop-types';
import Styles from './styles.module.scss'
import IconButton from '../../components/common/IconButton';
import Button from '../../components/common/Button';
import Input from '../../components/common/Inputqa';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisV, faMoneyBill, faComment, faShare} from '@fortawesome/free-solid-svg-icons'
import { FaRegPaperPlane } from 'react-icons/fa';

function Posts(
  {
    ...props
  }
) {
  return (
    <div className={Styles.postsMain}>

      <div className={Styles.postshead}>
        <div className={Styles.postOwner}>
          <div className={Styles.userImg}>
            <img src={props.postOwnerImg} alt='profile' className={Styles.FullImg} />
          </div>
          <div>
            <h4> {props.postOwner} </h4>
            <p> {props.postTime} </p>
          </div>
        </div>
        <IconButton icon={<FontAwesomeIcon icon={faEllipsisV} />} />
        
      </div>

      {
        props.postText ? 
        <div>
          <p className={Styles.postText}> 
            {props.postText}
          </p>
        </div>
        : ''
      }

      {
        props.postImg ?
          <div className={Styles.postImg}>
            <img src={props.postImg} alt='Post' className={Styles.FullImg} />
          </div>
          : ''
      }

      {
        props.lessonNumber ?
          <div className={`${Styles.LessonDetails} ${Styles.dflexSpaceBt}`}>
            <div>
              <h3> Lesson {props.lessonNumber} </h3>
              <h2> {props.lessonName} </h2>
              <p> Part {props.partNumber} : {props.partName} </p>
            </div>
            {
              props.lessonNextBtn ?
                <div>
                  <Button label={props.lessonNextBtn} variant='transparent' color='gray' icon={ <FontAwesomeIcon icon={props.lessonNextBtnIcon} /> } />
                </div> : ''
            }
          </div>
          : ''
      }

      <div className={`${Styles.reactedUsers} ${Styles.dflexSpaceBt}`}>
        <div className={Styles.allreacteduserImgs}>
          <div className={Styles.reacteduserImgs}>
            <img src={props.reactedUserImg} alt='user' className={Styles.FullImg} />
          </div>
          <div className={Styles.reacteduserImgs}>
            <img src={props.reactedUserImg} alt='user' className={Styles.FullImg} />
          </div>
          <div className={Styles.reacteduserImgs}>
            <img src={props.reactedUserImg} alt='user' className={Styles.FullImg} />
          </div>
        </div>
        <div className={Styles.postCount}>
          <span> {props.commentsCount} Comments </span>
          <span className={Styles.shareText}> {props.shareCount} Share </span>
        </div>
      </div>

      <div className={`${Styles.dflexSpaceBt} ${Styles.postActionBtns}`}>
        <Button
          label='Like'
          variant='transparent'
          color='darkGrayColor'
          icon={<FontAwesomeIcon icon={faMoneyBill} />}
        />
        <Button
          label='Comments'
          variant='transparent'
          color='darkGrayColor'
          icon={<FontAwesomeIcon icon={faComment} />}
        />
        <Button
          label='Share'
          variant='transparent'
          color='darkGrayColor'
          icon={<FontAwesomeIcon icon={faShare} />}
        />
          </div>

          <div className={Styles.comments}>
              <div className={Styles.postshead}>
                  <div className={Styles.commentOwner}>
                      <div className={Styles.commentUserImg}>
                          <img src={props.currentUserImg} alt='CurrentUser' className={Styles.FullImg} />
                      </div>
                      <div>
                          <h5> {props.postOwner} </h5>
      
                        <p className={Styles.comment}>
                            Test Comment
                        </p>

                      </div>
                  </div>
                  

              </div>



          </div> 

      <div className={`${Styles.postCommentBox} ${Styles.dflexSpaceBt}`}>
        <div className={Styles.commentUserImg}>
          <img src={props.currentUserImg}  alt='CurrentUser' className={Styles.FullImg} />
        </div>
        <div className={Styles.commentInp}>
          <Input placeholder='Write a comment' variant='offWhite' />
        </div>
        <IconButton variant='primary' icon={<FaRegPaperPlane />} />
      </div>

    </div>
  )
}



export default Posts
