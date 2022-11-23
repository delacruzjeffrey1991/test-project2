import requests from './http.service';
import { AxiosResponse } from 'axios'

const Services = {
  getPositionGoals(): Promise<AxiosResponse> {
    return requests.get('/postiongoal');
  },
  getBrandAudits(): Promise<AxiosResponse> {
    return requests.get('/brandaudit');
  },
  getPossesCards(): Promise<AxiosResponse> {
    return requests.get('/possescards');
  },
};

export default Services;
