import axios, { AxiosResponse } from 'axios';
import { Video } from '../interface/video';

const URL: string = "http://localhost:3000/api";

export const getVideos = ():Promise<AxiosResponse<any>> => {
    const res = axios.get(URL);
    return res;
}

export const postVideo = (video: Video):Promise<AxiosResponse<any>> => {
    const res = axios.post(`${URL}`, video);
    return res;
}

export const deleteVideos = ():Promise<AxiosResponse<any>> => {
    const res = axios.delete(URL);
    return res;
}

export const getVideo = (id: string):Promise<AxiosResponse<any>> => {
    const res = axios.get<Video>(`${URL}/${id}`);
    return res;
}

export const putVideo = (id: string, video: Video):Promise<AxiosResponse<any>> => {
    const res = axios.put(`${URL}/${id}`, video);
    return res;
}

export const deleteVideo = (id: string):Promise<AxiosResponse<any>> => {
    const res = axios.delete(`${URL}/${id}`);
    return res;
}