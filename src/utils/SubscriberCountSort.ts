export type SortMethod = 'YouTube+Twitch' | 'YouTube' | 'Twitch';

const YouTubeSubscriberCountDescendingSort = <
  T extends { hasYouTube: boolean; YouTubeSubscriberCount?: number }
>(
  rowA: T,
  rowB: T
): number => {
  const aExist = rowA.hasYouTube;
  const bExist = rowB.hasYouTube;

  if (!aExist && !bExist) return 0;

  if (!bExist) return -1;

  if (!aExist) return 1;

  const aCount = rowA.YouTubeSubscriberCount;
  const bCount = rowB.YouTubeSubscriberCount;

  if (aCount === undefined && bCount === undefined) return 0;

  if (bCount === undefined) return -1;

  if (aCount === undefined) return 1;

  if (aCount > bCount) return -1;

  if (bCount > aCount) return 1;

  return 0;
};

const TwitchFollowerCountDescendingSort = <
  T extends { hasTwitch: boolean; TwitchFollowerCount: number }
>(
  rowA: T,
  rowB: T
): number => {
  const aExist = rowA.hasTwitch;
  const bExist = rowB.hasTwitch;

  if (!aExist && !bExist) return 0;

  if (!bExist) return -1;

  if (!aExist) return 1;

  const aCount = rowA.TwitchFollowerCount;
  const bCount = rowB.TwitchFollowerCount;

  if (aCount > bCount) return -1;

  if (bCount > aCount) return 1;

  return 0;
};

// TODO: Merge the logic of descending and ascending functions
export const YouTubeSubscriberCountPlusTwitchFollowerCountDescendingSort = <
  T extends { YouTubeSubscriberCount?: number; TwitchFollowerCount?: number }
>(
  rowA: T,
  rowB: T
): number => {
  const aCount =
    (rowA.YouTubeSubscriberCount ?? 0) + (rowA.TwitchFollowerCount ?? 0);
  const bCount =
    (rowB.YouTubeSubscriberCount ?? 0) + (rowB.TwitchFollowerCount ?? 0);

  if (aCount > bCount) return -1;

  if (bCount > aCount) return 1;

  return 0;
};

export const YouTubeSubscriberCountPlusTwitchFollowerCountAscendingSort = <
  T extends { YouTubeSubscriberCount?: number; TwitchFollowerCount?: number }
>(
  rowA: T,
  rowB: T
): number => {
  const aCount =
    (rowA.YouTubeSubscriberCount ?? 0) + (rowA.TwitchFollowerCount ?? 0);
  const bCount =
    (rowB.YouTubeSubscriberCount ?? 0) + (rowB.TwitchFollowerCount ?? 0);

  if (aCount > bCount) return 1;

  if (bCount > aCount) return -1;

  return 0;
};

export const SubscriberCountDescendingSort = (sortMethod: SortMethod) => {
  switch (sortMethod) {
    case 'YouTube+Twitch':
      return YouTubeSubscriberCountPlusTwitchFollowerCountDescendingSort;
    case 'YouTube':
      return YouTubeSubscriberCountDescendingSort;
    case 'Twitch':
      return TwitchFollowerCountDescendingSort;
  }
};
