import axios, { AxiosResponse } from 'axios';
import { GroupDataResponse } from '../types/GroupData';
import { VTuberDataResponse } from '../types/VTuberData';
import { VTuberDebutDataResponse } from '../types/VTuberDebutData';
import { VTuberPopularityDataResponse } from '../types/VTuberPopularityData';

interface CommitDetail {
  sha: string;
  date?: string;
}

let commitDetail: CommitDetail;

const setCommitDetail = async (): Promise<void> => {
  await axios
    .get(
      'https://api.github.com/repos/nh60211as/TaiwanVtuberTrackingDataJson/commits/master'
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

  axios.defaults.baseURL = `https://cdn.statically.io/gh/nh60211as/TaiwanVtuberTrackingDataJson/${commitDetail.sha}/api/v0`;
};

const AxiosGetWrapper = async <DataType>(
  url: string
): Promise<AxiosResponse<DataType>> => {
  if (commitDetail === undefined) await setCommitDetail();

  return axios.get<DataType>(url);
};

export const getVTubers = (): Promise<AxiosResponse<VTuberDataResponse>> => {
  return AxiosGetWrapper<VTuberDataResponse>('/vtubers.json');
};

export const getGroupVTubers = (
  group: string
): Promise<AxiosResponse<VTuberDataResponse>> => {
  return AxiosGetWrapper<VTuberDataResponse>(`/groups/${group}/vtubers.json`);
};

export const getGroups = (): Promise<AxiosResponse<GroupDataResponse>> => {
  return AxiosGetWrapper<GroupDataResponse>(`/groups.json`);
};

export const getPopularVTubers = (): Promise<
  AxiosResponse<VTuberPopularityDataResponse>
> => {
  return AxiosGetWrapper<VTuberPopularityDataResponse>('/popular-vtubers.json');
};

export const getDebutVTubers = (): Promise<
  AxiosResponse<VTuberDebutDataResponse>
> => {
  return AxiosGetWrapper<VTuberDebutDataResponse>('/debut-vtubers.json');
};
