import { getNationalityModifierState } from '../global/DisplayNationality';
import { VideoPopularityDataResponse } from '../types/ApiData/VideoPopularityData';
import { YearEndVTuberTwitchGrowthDataResponse } from '../types/ApiData/YearEndVTuberTwitchGrowthData';
import { YearEndVTuberYouTubeGrowthDataResponse } from '../types/ApiData/YearEndVTuberYouTubeGrowthData';
import { YearEndVTuberViewCountChangeDataResponse } from '../types/ApiData/YearEndVTuberYouTubeViewCountGrowthData';
import {
  YearEndGrowingVTubersModifier,
  YearEndTrendingVideosModifier,
  YearEndVTubersViewCountChangeModifier,
} from '../types/ApiTypes';
import * as ApiSourceService from './ApiSourceService';
import axios, { AxiosInstance, AxiosResponse } from 'axios';

let axiosInstance: AxiosInstance;

const initAxiosInstance = async (): Promise<AxiosInstance> => {
  switch (ApiSourceService.getApiSourceModifier()) {
    case 'apitaiwanvtuberdata':
      return axios.create({
        baseURL: `https://api-taiwanvtuberdata-yearendreport.nh60211.workers.dev`,
      });
    case 'github':
      return axios.create({
        baseURL: `https://raw.githubusercontent.com/TaiwanVtuberData/TaiwanVTuberDataYearEndReport/master`,
      });
  }
};

export const bootstrapApi = async (): Promise<boolean> => {
  await initAxiosInstance();

  return true;
};

const AxiosGetWrapper = async <DataType>(
  url: string,
): Promise<AxiosResponse<DataType>> => {
  if (axiosInstance === undefined) {
    axiosInstance = await initAxiosInstance();
  }

  return axiosInstance.get<DataType>(`${getNationalityModifierState()}/${url}`);
};

export const getGrowingYouTubeVTubers = (
  modifier: YearEndGrowingVTubersModifier,
): Promise<AxiosResponse<YearEndVTuberYouTubeGrowthDataResponse>> => {
  return AxiosGetWrapper<YearEndVTuberYouTubeGrowthDataResponse>(
    `growing-vtubers/youtube/${modifier.establishType}/${modifier.count}.json`,
  );
};

export const getGrowingTwitchVTubers = (
  modifier: YearEndGrowingVTubersModifier,
): Promise<AxiosResponse<YearEndVTuberTwitchGrowthDataResponse>> => {
  return AxiosGetWrapper<YearEndVTuberTwitchGrowthDataResponse>(
    `growing-vtubers/twitch/${modifier.establishType}/${modifier.count}.json`,
  );
};

export const getTrendingYouTubeVideos = (
  modifier: YearEndTrendingVideosModifier,
): Promise<AxiosResponse<VideoPopularityDataResponse>> => {
  return AxiosGetWrapper<VideoPopularityDataResponse>(
    `trending-videos/youtube/${modifier.establishType}/${modifier.count}.json`,
  );
};

export const getVTubersYouTubeViewCountChange = (
  modifier: YearEndVTubersViewCountChangeModifier,
): Promise<AxiosResponse<YearEndVTuberViewCountChangeDataResponse>> => {
  return AxiosGetWrapper<YearEndVTuberViewCountChangeDataResponse>(
    `vtubers-view-count-change/youtube/${modifier.establishType}/${modifier.count}.json`,
  );
};
