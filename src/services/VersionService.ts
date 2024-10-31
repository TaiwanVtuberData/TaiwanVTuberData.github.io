import axios from "axios";
import * as GitHubCommitDetailService from "./GitHubCommitDetailService";

interface VersionDetail {
  version: string;
}

export const getVersionDetail = async (): Promise<VersionDetail> => {
  const commitDetail: GitHubCommitDetailService.CommitDetail =
    await GitHubCommitDetailService.getCommitDetail(
      "https://api.github.com/repos/TaiwanVtuberData/TaiwanVTuberData.github.io/commits/master",
    );

  const versionDetailUrl = `https://raw.githubusercontent.com/TaiwanVtuberData/TaiwanVTuberData.github.io/${commitDetail.sha}/package.json`;

  return await axios
    .get(versionDetailUrl)
    .then((res) => ({
      version: res.data.version,
    }))
    .catch(() => ({
      version: "unknown",
    }));
};
