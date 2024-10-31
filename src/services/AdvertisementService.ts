import axios, { AxiosResponse } from "axios";

// TODO: Consider merging with ApiService.ts
interface CommitDetail {
  sha: string;
}

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
  const commitDetail: CommitDetail = await axios
    .get(
      "https://api.github.com/repos/TaiwanVtuberData/TaiwanVTuberDataAdvertisement/commits/master",
    )
    .then((res) => ({
      sha: res.data.sha,
    }))
    .catch(() => ({
      sha: "master",
    }));

  const currentAdvertisementUrl = `https://raw.githubusercontent.com/TaiwanVtuberData/TaiwanVTuberDataAdvertisement/${commitDetail.sha}/api/v1/advertisements/current.json`;

  return await axios.get<AdvertisementDetail>(currentAdvertisementUrl);
};
