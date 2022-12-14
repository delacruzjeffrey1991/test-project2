import requests from "./http.service";
import { AxiosResponse } from "axios";

const NewCourseFormServices = {
  getAll(): Promise<AxiosResponse> {
    return requests.get("/course");
  },
  getById(id: string): Promise<AxiosResponse> {
    return requests.get(`/course/${id}`);
  },
  add(data: any): Promise<AxiosResponse> {
    return requests.post("/course", data);
  },
  update(data: any): Promise<AxiosResponse> {
    return requests.put(`/course/${data.answer_id}`, { answer: data.answer });
  },
};

export default NewCourseFormServices;
