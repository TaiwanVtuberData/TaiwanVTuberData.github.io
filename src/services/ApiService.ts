import { getCurrentApiSourceState } from '../global/CurrentApiSource';
import { getNationalityModifierState } from '../global/DisplayNationality';
import { GroupDataResponse } from '../types/ApiData/GroupData';
import { LivestreamDataResponse } from '../types/ApiData/LivestreamData';
import { UpdateTimeResponse } from '../types/ApiData/UpdateTime';
import { VTuberAnniversaryDataResponse } from '../types/ApiData/VTuberAnniversaryData';
import { VTuberDataResponse } from '../types/ApiData/VTuberData';
import { VTuberDebutDataResponse } from '../types/ApiData/VTuberDebutData';
import { SingleVTuberFullDataResponse } from '../types/ApiData/VTuberFullData';
import { VTuberGraduateDataResponse } from '../types/ApiData/VTuberGraduateData';
import { VTuberGrowthDataResponse } from '../types/ApiData/VTuberGrowthData';
import { VTuberPopularityDataResponse } from '../types/ApiData/VTuberPopularityData';
import { VTuberViewCountChangeDataResponse } from '../types/ApiData/VTuberViewCountChangeData';
import { VideoPopularityDataResponse } from '../types/ApiData/VideoPopularityData';
import {
  AnniversaryVTubersModifier,
  DebutVTubersModifier,
  GraduateVTubersModifier,
  GrowingVTubersModifier,
  LivestreamsModifier,
  TrendingVideosModifier,
  TrendingVTubersModifier,
  VTubersModifier,
  VTubersViewCountChangeModifier,
} from '../types/ApiTypes';
import * as GitHubCommitDetailService from './GitHubCommitDetailService';
import axios, { AxiosInstance, AxiosResponse } from 'axios';

let axiosInstance: AxiosInstance;

const initAxiosInstance = async (): Promise<AxiosInstance> => {
  let commitDetail: GitHubCommitDetailService.CommitDetail =
    await GitHubCommitDetailService.getCommitDetail(
      'https://api.github.com/repos/TaiwanVtuberData/TaiwanVTuberTrackingDataJson/commits/master',
    );

  switch (getCurrentApiSourceState()) {
    case 'github':
      return axios.create({
        baseURL: `https://raw.githubusercontent.com/TaiwanVtuberData/TaiwanVTuberTrackingDataJson/${commitDetail.sha}/api/v2`,
      });
    case 'statically':
    default:
      return axios.create({
        baseURL: `https://cdn.statically.io/gh/TaiwanVtuberData/TaiwanVTuberTrackingDataJson/${commitDetail.sha}/api/v2`,
      });
  }
};

export const bootstrapApi = async (): Promise<boolean> => {
  await initAxiosInstance();

  return true;
};

const AxiosGetWrapperNoNationality = async <DataType>(
  url: string,
): Promise<AxiosResponse<DataType>> => {
  if (axiosInstance === undefined) {
    axiosInstance = await initAxiosInstance();
  }

  return axiosInstance.get<DataType>(`/${url}`);
};

export const getUpdateTime = (): Promise<AxiosResponse<UpdateTimeResponse>> => {
  return AxiosGetWrapperNoNationality<UpdateTimeResponse>(`update-time.json`);
};

export const getVTuber = (
  id: string,
): Promise<AxiosResponse<SingleVTuberFullDataResponse>> => {
  return AxiosGetWrapperNoNationality<SingleVTuberFullDataResponse>(
    `vtubers/${id}.json`,
  );
};

const AxiosGetWrapper = async <DataType>(
  url: string,
): Promise<AxiosResponse<DataType>> => {
  if (axiosInstance === undefined) {
    axiosInstance = await initAxiosInstance();
  }

  return axiosInstance.get<DataType>(`${getNationalityModifierState()}/${url}`);
};

export const getVTubers = (
  modifier: VTubersModifier,
): Promise<AxiosResponse<VTuberDataResponse>> => {
  return AxiosGetWrapper<VTuberDataResponse>(`vtubers/${modifier}.json`);
};

export const getGroupVTubers = (
  group: string,
): Promise<AxiosResponse<VTuberDataResponse>> => {
  return AxiosGetWrapper<VTuberDataResponse>(`groups/${group}/vtubers.json`);
};

export const getGroups = (): Promise<AxiosResponse<GroupDataResponse>> => {
  return AxiosGetWrapper<GroupDataResponse>(`groups.json`);
};

export const getTrendingVTubers = (
  modifier: TrendingVTubersModifier,
): Promise<AxiosResponse<VTuberPopularityDataResponse>> => {
  return AxiosGetWrapper<VTuberPopularityDataResponse>(
    `trending-vtubers/${modifier.sortBy}/${modifier.count}.json`,
  );
};

export const getGrowingVTubers = (
  modifier: GrowingVTubersModifier,
): Promise<AxiosResponse<VTuberGrowthDataResponse>> => {
  return AxiosGetWrapper<VTuberGrowthDataResponse>(
    `growing-vtubers/${modifier}.json`,
  );
};

export const getVTubersViewCountChange = (
  para: VTubersViewCountChangeModifier,
): Promise<AxiosResponse<VTuberViewCountChangeDataResponse>> => {
  return AxiosGetWrapper<VTuberViewCountChangeDataResponse>(
    `vtubers-view-count-change/${para.sortBy}/${para.count}.json`,
  );
};

export const getDebutVTubers = (
  modifier: DebutVTubersModifier,
): Promise<AxiosResponse<VTuberDebutDataResponse>> => {
  return AxiosGetWrapper<VTuberDebutDataResponse>(
    `debut-vtubers/${modifier}.json`,
  );
};

export const getAnniversaryVTubers = (
  modifier: AnniversaryVTubersModifier,
): Promise<AxiosResponse<VTuberAnniversaryDataResponse>> => {
  return AxiosGetWrapper<VTuberAnniversaryDataResponse>(
    `anniversary-vtubers/${modifier}.json`,
  );
};

export const getGraduateVTubers = (
  modifier: GraduateVTubersModifier,
): Promise<AxiosResponse<VTuberGraduateDataResponse>> => {
  return AxiosGetWrapper<VTuberGraduateDataResponse>(
    `graduate-vtubers/${modifier}.json`,
  );
};

export const getTrendingVideos = (
  modifier: TrendingVideosModifier,
): Promise<AxiosResponse<VideoPopularityDataResponse>> => {
  return AxiosGetWrapper<VideoPopularityDataResponse>(
    `trending-videos/${modifier}.json`,
  );
};

export const getLivestreams = (
  modifier: LivestreamsModifier,
): Promise<AxiosResponse<LivestreamDataResponse>> => {
  return AxiosGetWrapper<LivestreamDataResponse>(
    `livestreams/${modifier}.json`,
  );
};
