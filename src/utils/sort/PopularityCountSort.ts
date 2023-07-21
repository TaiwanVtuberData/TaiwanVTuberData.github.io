export const PopularityCountAscendingSort = <
  T extends { YouTubePopularity?: number; TwitchPopularity?: number },
>(
  rowA: T,
  rowB: T
): number => {
  const aCount = (rowA.YouTubePopularity ?? 0) + (rowA.TwitchPopularity ?? 0);
  const bCount = (rowB.YouTubePopularity ?? 0) + (rowB.TwitchPopularity ?? 0);

  if (aCount > bCount) return 1;

  if (bCount > aCount) return -1;

  return 0;
};

export const PopularityCountDescendingSort = <
  T extends { YouTubePopularity?: number; TwitchPopularity?: number },
>(
  rowA: T,
  rowB: T
): number => PopularityCountAscendingSort(rowA, rowB) * -1;
