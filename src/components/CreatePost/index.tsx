import React from 'react'
import Styles from './styles.module.scss'
import Inputqa from '../../components/common/Inputqa';
import Button from '../../components/common/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faVideo , faImage , faSmile , faFile , faCalendar } from '@fortawesome/free-solid-svg-icons'
import { FaMoneyBillWave } from 'react-icons/fa';
import { useState, useEffect } from "react";
import { createClient, enableCache, createPost, createQuery, runQuery } from '@amityco/ts-sdk';
import axios from "axios";
import { AxiosResponse } from 'axios';


function CreatePost(
  {
    variant = 'primary',
  }
) {
    const [postText, setPostText] = useState<string>('');

    const updatePostText = (name: string): void => {
        setPostText(name)
    }





    const createPostText = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();

        console.log('jepri clicked2');
        console.log(postText);
        (async () => {
            const response = await getToken();
            console.log(response);

            const response2 = await getSession(response);
            console.log(response2.accessToken);

            const response3 = await createPost(response2.accessToken);
            console.log(response3);
            window.location.reload();
        })();

        //const apiKey = "b0efec0f328df0614a668814540e14d9835adab1b2606c24";
        //const client = createClient(apiKey, "us");
        //enableCache();

        //const query = createQuery(createPost, {

        //    data: {
        //        text: postText,
        //    },
        //    targetType: 'user',
        //    targetId: 'jeffrey-test2',
        //});

        //runQuery(query, result => console.log(result));


    };

    async function getToken(): Promise<string> {
       try {
           const url = "https://api.us.amity.co/api/v3/authentication/token?userId=jeffrey-test2";
           axios.defaults.headers['x-server-key'] = '138fbb2f22e5af367025ee9d6ff02c0d903fd74f560f87b71119197aa125645cd01015cd7b7236193b8fcc7a42a114864a399cd85b55dd2c88d6447055';
           const response = await axios.get<string>(url);
           return response.data;
         } catch (err) {
           return '';
       }
    }

    async function getSession(token: string): Promise<AxiosResponse<any, any>> {
        //try {
            const url = "https://api.us.amity.co/api/v3/sessions";
        axios.defaults.headers['x-api-key'] = 'b0efed533f8df46c18628b1c515e43dd835fd8e6bc366b2c';
            const requestData = {
                "userId": "jeffrey-test2",
                "deviceId": "jeffrey-test2",


                "displayName": "jeffrey-test2",
                "authToken": token
            };

            const response = await axios.post<AxiosResponse<any, any>>(url,requestData);
            return response.data;
        //} catch (err) {
        //    return '';
        //}
    }

    async function createPost(accessToken:string): Promise<string> {
        try {
            const url = "https://api.us.amity.co/api/v3/posts";
            axios.defaults.headers['x-api-key'] = 'b0efed533f8df46c18628b1c515e43dd835fd8e6bc366b2c';
            axios.defaults.headers['Authorization'] = 'Bearer ' + accessToken;
            const now = new Date();
            const requestData = {
                "data": {
                    "text": postText


                },
                "dataType": "upstra.customtype",
                "targetType": "user",
                "targetId": "jeffrey-test2",
                "metadata": {},
                "postId": now + "jeffrey-test2",
                "tags": [
                    "string"
                ],
                "createdAt": "2022-07-07T04:24:20.444Z"
            }

            const response = await axios.post<string>(url, requestData);
            return response.data;
        } catch (err) {
            return '';
        }
    }

  return (
    <>
      <div className={`${Styles.userCreatePost} ${Styles[variant]}`}>
        <Inputqa placeholder='Who Would you like to recognize?' updatePostText={updatePostText} />
        <div className={Styles.createpostBtnsMain}>
          <div className={Styles.createpostBtns}>
            <Button
              label='Reward'
              variant='transparent'
              color='whiteColor'
              icon={<FaMoneyBillWave />}
              size='sizeAuto'
            />
            <Button
              label='Live Video'
              variant='transparent'
              color='whiteColor'
              icon={<FontAwesomeIcon icon={faVideo} />}
              size='sizeAuto'
            />
            <Button
              label='Photo/Video'
              variant='transparent'
              color='whiteColor'
              icon={<FontAwesomeIcon icon={faImage} />}
              size='sizeAuto'
            />
            <Button
              label='Kudos'
              variant='transparent'
              color='whiteColor'
              icon={<FontAwesomeIcon icon={faSmile} />}
              size='sizeAuto'
            />
            <Button
              label='Gif'
              variant='transparent'
              color='whiteColor'
              icon={<FontAwesomeIcon icon={faFile} />}
              size='sizeAuto'
            />
            <Button
              label='Event'
              variant='transparent'
              color='whiteColor'
              icon={<FontAwesomeIcon icon={faCalendar} />}
              size='sizeAuto'
            />
          </div>
          <Button
            onClick={createPostText}
            label='Post'
            variant='white'
            color='black'
            size='smallBtn'
          />
        </div>

      </div>
    </>
  )
}

export default CreatePost
