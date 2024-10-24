import axios from "axios";

// TODO: Consider merging with ApiService.ts
interface CommitDetail {
  sha: string;
}

interface VersionDetail {
  version: string;
}

export const getVersionDetail = async (): Promise<VersionDetail> => {
  const commitDetail: CommitDetail = await axios
    .get(
      "https://api.github.com/repos/TaiwanVtuberData/TaiwanVTuberData.github.io/commits/master",
    )
    .then((res) => ({
      sha: res.data.sha,
    }))
    .catch(() => ({
      sha: "master",
    }));

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
