import axios, { AxiosResponse } from 'axios';
import { VTuberDataResponse } from '../types/VTuberData';

const DEPLOY_BASE_URL =
  'https://cdn.statically.io/gh/nh60211as/TaiwanVtuberTrackingDataJson/5976dd9e256296a3931f2dfddb45eeac11fb62dd' as const;
axios.defaults.baseURL = `${DEPLOY_BASE_URL}/api/v0`;

export const getVTubers = (): Promise<AxiosResponse<VTuberDataResponse>> => {
  return axios.get<VTuberDataResponse>('/vtubers.json');
};
