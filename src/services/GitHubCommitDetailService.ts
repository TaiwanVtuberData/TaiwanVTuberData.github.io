import axios from 'axios';

export interface CommitDetail {
  sha: string;
  date?: string;
}

export const getCommitDetail = async (
  githubRepoApiUrl: string,
): Promise<CommitDetail> => {
  return await axios
    .get(githubRepoApiUrl)
    .then((res) => ({
      sha: res.data.sha,
      date: res.data.commit.author.date,
    }))
    .catch(() => ({
      sha: 'master',
    }));
};
