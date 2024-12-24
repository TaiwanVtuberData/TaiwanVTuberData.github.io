import axios, { AxiosInstance, AxiosResponse } from "axios";
import * as GitHubCommitDetailService from "./GitHubCommitDetailService";
import { getCurrentApiSourceState } from "../global/CurrentApiSource";
import { getNationalityModifierState } from "../global/DisplayNationality";
import {
  YearEndGrowingVTubersModifier,
  YearEndVTubersViewCountChangeModifier,
} from "../types/ApiTypes";
import { YearEndVTuberYouTubeGrowthDataResponse } from "../types/ApiData/YearEndVTuberYouTubeGrowthData";
import { YearEndVTuberTwitchGrowthDataResponse } from "../types/ApiData/YearEndVTuberTwitchGrowthData";
import { YearEndVTuberViewCountChangeDataResponse } from "../types/ApiData/YearEndVTuberYouTubeViewCountGrowthData";

let axiosInstance: AxiosInstance;

const initAxiosInstance = async (): Promise<AxiosInstance> => {
  let commitDetail: GitHubCommitDetailService.CommitDetail =
    await GitHubCommitDetailService.getCommitDetail(
      "https://api.github.com/repos/TaiwanVtuberData/TaiwanVTuberDataYearEndReport/commits/master",
    );

  switch (getCurrentApiSourceState()) {
    case "github":
      return axios.create({
        baseURL: `https://raw.githubusercontent.com/TaiwanVtuberData/TaiwanVTuberDataYearEndReport/${commitDetail.sha}`,
      });
    case "statically":
    default:
      return axios.create({
        baseURL: `https://cdn.statically.io/gh/TaiwanVtuberData/TaiwanVTuberDataYearEndReport/${commitDetail.sha}`,
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
