import { CountType } from '../../types/Common/CountType';
import { GetCount } from '../GetCount';

export type SortMethod = 'YouTube+Twitch' | 'YouTube' | 'Twitch';

const YouTubeSubscriberCountDescendingSort = <
  T extends { YouTubeSubscriber?: CountType }
>(
  rowA: T,
  rowB: T
): number => {
  const aExist: boolean = rowA.YouTubeSubscriber !== undefined;
  const bExist: boolean = rowB.YouTubeSubscriber !== undefined;

  if (!aExist && !bExist) return 0;

  if (!bExist) return -1;

  if (!aExist) return 1;

  // this line shouldn't do anything
  // just to stop TypeScript from whining about YouTubeSubscriber might be undefined
  if (!(rowA.YouTubeSubscriber && rowB.YouTubeSubscriber)) return 0;

  const aCount: number | null = GetCount(rowA.YouTubeSubscriber);
  const bCount: number | null = GetCount(rowB.YouTubeSubscriber);

  if (aCount === null && bCount === null) return 0;

  if (bCount === null) return -1;

  if (aCount === null) return 1;

  if (aCount > bCount) return -1;

  if (bCount > aCount) return 1;

  return 0;
};

const TwitchFollowerCountDescendingSort = <
  T extends { TwitchFollowerCount?: number }
>(
  rowA: T,
  rowB: T
): number => {
  const aCount: number | undefined = rowA.TwitchFollowerCount;
  const bCount: number | undefined = rowB.TwitchFollowerCount;

  if (aCount === undefined && bCount === undefined) return 0;

  if (bCount === undefined) return -1;

  if (aCount === undefined) return 1;

  if (aCount > bCount) return -1;

  if (bCount > aCount) return 1;

  return 0;
};

// TODO: Merge the logic of descending and ascending functions
export const YouTubeSubscriberCountPlusTwitchFollowerCountDescendingSort = <
  T extends { YouTubeSubscriber?: CountType; TwitchFollowerCount?: number }
>(
  rowA: T,
  rowB: T
): number => {
  const aCount =
    (GetCount(rowA.YouTubeSubscriber) ?? 0) + (rowA.TwitchFollowerCount ?? 0);
  const bCount =
    (GetCount(rowB.YouTubeSubscriber) ?? 0) + (rowB.TwitchFollowerCount ?? 0);

  if (aCount > bCount) return -1;

  if (bCount > aCount) return 1;

  return 0;
};

export const YouTubeSubscriberCountPlusTwitchFollowerCountAscendingSort = <
  T extends { YouTubeSubscriber?: CountType; TwitchFollowerCount?: number }
>(
  rowA: T,
  rowB: T
): number => {
  const aCount =
    (GetCount(rowA.YouTubeSubscriber) ?? 0) + (rowA.TwitchFollowerCount ?? 0);
  const bCount =
    (GetCount(rowB.YouTubeSubscriber) ?? 0) + (rowB.TwitchFollowerCount ?? 0);

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
