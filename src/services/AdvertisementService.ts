import * as GitHubCommitDetailService from './GitHubCommitDetailService';
import axios, { AxiosResponse } from 'axios';

export interface AdvertisementDetail {
  hasAdvertisement: boolean;
  advertisement: {
    imgUrl: string;
    url: string | null;
  } | null;
}

export const getAdvertisementDetail = async (): Promise<
  AxiosResponse<AdvertisementDetail>
> => {
  const commitDetail: GitHubCommitDetailService.CommitDetail =
    await GitHubCommitDetailService.getCommitDetail(
      'https://api.github.com/repos/TaiwanVtuberData/TaiwanVTuberDataAdvertisement/commits/master',
    );

  const currentAdvertisementUrl = `https://raw.githubusercontent.com/TaiwanVtuberData/TaiwanVTuberDataAdvertisement/${commitDetail.sha}/api/v1/advertisements/current.json`;

  return await axios.get<AdvertisementDetail>(currentAdvertisementUrl);
};
