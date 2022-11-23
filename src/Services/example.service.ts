import requests from './http.service';
import { AxiosResponse } from 'axios'

const Services = {
  getAll(): Promise<AxiosResponse> {
    return requests.get('/posts');
  },
  getById(id: string): Promise<AxiosResponse> {
    return requests.get(`/example/${id}`);
  },
  add(body: any): Promise<AxiosResponse> {
    return requests.post('/example', body);
  },
  update(id: string, body: any): Promise<AxiosResponse> {
    return requests.put(`/example/${id}`, body);
  },
  delete(id: string): Promise<AxiosResponse> {
    return requests.delete(`/example/${id}`);
  },
};

export default Services;
