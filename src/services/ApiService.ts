import axios, { AxiosResponse } from 'axios';
import { VTuberDataResponse } from '../types/VTuberData';

axios.defaults.baseURL = '/api/v0';

export const getVTubers = (): Promise<AxiosResponse<VTuberDataResponse>> => {
  return axios.get('/vtubers');
};
