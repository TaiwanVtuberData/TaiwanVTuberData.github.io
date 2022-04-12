import axios, { AxiosResponse } from 'axios';
import { getNationalityModifierState } from '../global/DisplayNationality';
import { GroupDataResponse } from '../types/ApiData/GroupData';
import { UpdateTimeResponse } from '../types/ApiData/UpdateTime';
import { VideoPopularityDataResponse } from '../types/ApiData/VideoPopularityData';
import { VTuberDataResponse } from '../types/ApiData/VTuberData';
import { VTuberDebutDataResponse } from '../types/ApiData/VTuberDebutData';
import { VTuberGraduateDataResponse } from '../types/ApiData/VTuberGraduateData';
import { VTuberGrowthDataResponse } from '../types/ApiData/VTuberGrowthData';
import { VTuberPopularityDataResponse } from '../types/ApiData/VTuberPopularityData';
import { VTuberViewCountChangeDataResponse } from '../types/ApiData/VTuberViewCountChangeData';

interface CommitDetail {
  sha: string;
  date?: string;
}

let commitDetail: CommitDetail;

const setCommitDetail = async (): Promise<void> => {
  await axios
    .get(
      'https://api.github.com/repos/TaiwanVtuberData/TaiwanVTuberTrackingDataJson/commits/master'
    )
    .then((res) => {
      commitDetail = {
        sha: res.data.sha,
        date: res.data.commit.author.date,
      };
    })
    .catch(() => {
      commitDetail = {
        sha: 'master',
      };
    });

  axios.defaults.baseURL = `https://cdn.statically.io/gh/TaiwanVtuberData/TaiwanVTuberTrackingDataJson/${commitDetail.sha}/api/v0`;
};

export const bootstrapApi = async (): Promise<void> => {
  await setCommitDetail();
};

const AxiosGetWrapperNoNationality = async <DataType>(
  url: string
): Promise<AxiosResponse<DataType>> => {
  if (commitDetail === undefined) await setCommitDetail();

  return axios.get<DataType>(`/${url}`);
};

export const getUpdateTime = (): Promise<AxiosResponse<UpdateTimeResponse>> => {
  return AxiosGetWrapperNoNationality<UpdateTimeResponse>(`update-time.json`);
};

const AxiosGetWrapper = async <DataType>(
  url: string
): Promise<AxiosResponse<DataType>> => {
  if (commitDetail === undefined) await setCommitDetail();

  return axios.get<DataType>(`${getNationalityModifierState()}/${url}`);
};

export type GetVTubersModifier = '10' | 'all';

export const getVTubers = (
  modifier: GetVTubersModifier
): Promise<AxiosResponse<VTuberDataResponse>> => {
  return AxiosGetWrapper<VTuberDataResponse>(`vtubers/${modifier}.json`);
};

export const getGroupVTubers = (
  group: string
): Promise<AxiosResponse<VTuberDataResponse>> => {
  return AxiosGetWrapper<VTuberDataResponse>(`groups/${group}/vtubers.json`);
};

export const getGroups = (): Promise<AxiosResponse<GroupDataResponse>> => {
  return AxiosGetWrapper<GroupDataResponse>(`groups.json`);
};

export type GetTrendingVTubersModifier = '10' | '100';

export const getTrendingVTubers = (
  modifier: GetTrendingVTubersModifier
): Promise<AxiosResponse<VTuberPopularityDataResponse>> => {
  return AxiosGetWrapper<VTuberPopularityDataResponse>(
    `trending-vtubers/${modifier}.json`
  );
};

export type GetGrowingVTubersModifier = '10' | '100' | 'all';

export const getGrowingVTubers = (
  modifier: GetGrowingVTubersModifier
): Promise<AxiosResponse<VTuberGrowthDataResponse>> => {
  return AxiosGetWrapper<VTuberGrowthDataResponse>(
    `growing-vtubers/${modifier}.json`
  );
};

export type SortOrder = '7-days' | '30-days';

export interface GetVTubersViewCountChangeModifier {
  sortBy: SortOrder;
  count: '10' | '100' | 'all';
}

export const getVTubersViewCountChange = (
  para: GetVTubersViewCountChangeModifier
): Promise<AxiosResponse<VTuberViewCountChangeDataResponse>> => {
  return AxiosGetWrapper<VTuberViewCountChangeDataResponse>(
    `vtubers-view-count-change/${para.sortBy}/${para.count}.json`
  );
};

export type GetDebutVTubersModifier = 'next-7-days' | 'recent';

export const getDebutVTubers = (
  modifier: GetDebutVTubersModifier
): Promise<AxiosResponse<VTuberDebutDataResponse>> => {
  return AxiosGetWrapper<VTuberDebutDataResponse>(
    `debut-vtubers/${modifier}.json`
  );
};

export type GetGraduateVTubersModifier = 'next-7-days' | 'recent';

export const getGraduateVTubers = (
  modifier: GetGraduateVTubersModifier
): Promise<AxiosResponse<VTuberGraduateDataResponse>> => {
  return AxiosGetWrapper<VTuberGraduateDataResponse>(
    `graduate-vtubers/${modifier}.json`
  );
};

export type TrendingVideosModifier = 'all' | 'no-duplicate';

export const getTrendingVideos = (
  modifier: TrendingVideosModifier
): Promise<AxiosResponse<VideoPopularityDataResponse>> => {
  return AxiosGetWrapper<VideoPopularityDataResponse>(
    `trending-videos/${modifier}.json`
  );
};
