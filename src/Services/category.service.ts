import requests from './http.service';
import { AxiosResponse } from 'axios'

const CategoryServices = {
  getAll(): Promise<AxiosResponse> {
    return requests.get('/category');
  },
  
};

export default CategoryServices;
