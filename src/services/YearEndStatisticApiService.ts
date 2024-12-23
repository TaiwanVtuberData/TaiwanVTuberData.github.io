import axios, { AxiosResponse } from "axios";
import * as GitHubCommitDetailService from "./GitHubCommitDetailService";
import { getCurrentApiSourceState } from "../global/CurrentApiSource";
import { getNationalityModifierState } from "../global/DisplayNationality";
import {
  YearEndGrowingVTubersModifier,
  YearEndVTubersViewCountChangeModifier,
} from "../types/ApiTypes";
import { YearEndVTuberYouTubeGrowthDataResponse } from "../types/ApiData/YearEndVTuberYouTubeGrowthData";
import { YearEndVTuberTwitchGrowthDataResponse } from "../types/ApiData/YearEndVTuberTwitchGrowthData";
import { YearEndVTuberYouTubeViewCountGrowthData } from "../types/ApiData/YearEndVTuberYouTubeViewCountGrowthData";

let commitDetail: GitHubCommitDetailService.CommitDetail;

const setCommitDetail = async (): Promise<void> => {
  commitDetail = await GitHubCommitDetailService.getCommitDetail(
    "https://api.github.com/repos/TaiwanVtuberData/TaiwanVTuberTrackingDataJson/commits/master",
  );

  // TODO: change to actual API URL
  switch (getCurrentApiSourceState()) {
    case "github":
      // axios.defaults.baseURL = `https://raw.githubusercontent.com/TaiwanVtuberData/TaiwanVTuberTrackingDataJson/${commitDetail.sha}/api/v2`;
      axios.defaults.baseURL = `http://127.0.0.1:5500`;
      break;
    case "statically":
    default:
      // axios.defaults.baseURL = `https://cdn.statically.io/gh/TaiwanVtuberData/TaiwanVTuberTrackingDataJson/${commitDetail.sha}/api/v2`;
      axios.defaults.baseURL = `http://127.0.0.1:5500`;
      break;
  }
};

export const bootstrapApi = async (): Promise<boolean> => {
  await setCommitDetail();

  return true;
};

const AxiosGetWrapper = async <DataType>(
  url: string,
): Promise<AxiosResponse<DataType>> => {
  if (commitDetail === undefined) await setCommitDetail();

  return axios.get<DataType>(`${getNationalityModifierState()}/${url}`);
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
): Promise<AxiosResponse<YearEndVTuberYouTubeViewCountGrowthData>> => {
  return AxiosGetWrapper<YearEndVTuberYouTubeViewCountGrowthData>(
    `vtubers-view-count-change/youtube/${modifier.establishType}/${modifier.count}.json`,
  );
};
