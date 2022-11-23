import requests from './http.service';
import { AxiosResponse } from 'axios'

const Services = {
    postBCSanswers(data: any): Promise<AxiosResponse> {
        return requests.post('/bcsanswer', data);
    },
    putBCSanswers(data: any): Promise<AxiosResponse> {
        return requests.put(`/bcsanswer/${data.answer_id}`, { answer: data.answer });
    },
};

export default Services;
