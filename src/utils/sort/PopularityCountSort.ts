export const PopularityCountDescendingSort = <
  T extends { YouTubePopularity: number; TwitchPopularity: number }
>(
  rowA: T,
  rowB: T
): number => {
  const aCount = rowA.YouTubePopularity + rowA.TwitchPopularity;
  const bCount = rowB.YouTubePopularity + rowB.TwitchPopularity;

  if (aCount > bCount) return -1;

  if (bCount > aCount) return 1;

  return 0;
};

export const PopularityCountAscendingSort = <
  T extends { YouTubePopularity: number; TwitchPopularity: number }
>(
  rowA: T,
  rowB: T
): number => {
  const aCount = rowA.YouTubePopularity + rowA.TwitchPopularity;
  const bCount = rowB.YouTubePopularity + rowB.TwitchPopularity;

  if (aCount > bCount) return 1;

  if (bCount > aCount) return -1;

  return 0;
};
