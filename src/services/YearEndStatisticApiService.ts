import { getCurrentApiSourceState } from '../global/CurrentApiSource';
import { getNationalityModifierState } from '../global/DisplayNationality';
import { YearEndVTuberTwitchGrowthDataResponse } from '../types/ApiData/YearEndVTuberTwitchGrowthData';
import { YearEndVTuberYouTubeGrowthDataResponse } from '../types/ApiData/YearEndVTuberYouTubeGrowthData';
import { YearEndVTuberViewCountChangeDataResponse } from '../types/ApiData/YearEndVTuberYouTubeViewCountGrowthData';
import {
  YearEndGrowingVTubersModifier,
  YearEndVTubersViewCountChangeModifier,
} from '../types/ApiTypes';
import * as GitHubCommitDetailService from './GitHubCommitDetailService';
import axios, { AxiosInstance, AxiosResponse } from 'axios';

let axiosInstance: AxiosInstance;

const initAxiosInstance = async (): Promise<AxiosInstance> => {
  let commitDetail: GitHubCommitDetailService.CommitDetail =
    await GitHubCommitDetailService.getCommitDetail(
      'https://api.github.com/repos/TaiwanVtuberData/TaiwanVTuberDataYearEndReport/commits/master',
    );

  switch (getCurrentApiSourceState()) {
    case 'jsdelivr':
      return axios.create({
        baseURL: `https://cdn.jsdelivr.net/gh/TaiwanVtuberData/TaiwanVTuberDataYearEndReport@${commitDetail.sha}`,
      });
      case 'statically':
        return axios.create({
          baseURL: `https://cdn.statically.io/gh/TaiwanVtuberData/TaiwanVTuberDataYearEndReport/${commitDetail.sha}`,
        });
    case 'github':
      return axios.create({
        baseURL: `https://raw.githubusercontent.com/TaiwanVtuberData/TaiwanVTuberDataYearEndReport/${commitDetail.sha}`,
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

export const getVTubersYouTubeViewCountChange = (
  modifier: YearEndVTubersViewCountChangeModifier,
): Promise<AxiosResponse<YearEndVTuberViewCountChangeDataResponse>> => {
  return AxiosGetWrapper<YearEndVTuberViewCountChangeDataResponse>(
    `vtubers-view-count-change/youtube/${modifier.establishType}/${modifier.count}.json`,
  );
};
