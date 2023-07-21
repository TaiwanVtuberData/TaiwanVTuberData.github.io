import { CountType } from '../../types/Common/CountType';
import { CountTypeCompare, GetCount } from '../CountTypeUtils';

export type SortMethod = 'YouTube+Twitch' | 'YouTube' | 'Twitch';

const YouTubeSubscriberCountDescendingSort = <
  T extends { YouTubeSubscriber?: CountType },
>(
  rowA: T,
  rowB: T
): number => {
  const aExist: boolean = rowA.YouTubeSubscriber !== undefined;
  const bExist: boolean = rowB.YouTubeSubscriber !== undefined;

  if (!aExist && !bExist) return 0;

  if (!bExist) return -1;

  if (!aExist) return 1;

  // This line does nothing but to stop TypeScript from
  // whining about YouTubeSubscriber might be undefined
  if (!(rowA.YouTubeSubscriber && rowB.YouTubeSubscriber)) return 0;

  return CountTypeCompare(rowA.YouTubeSubscriber, rowB.YouTubeSubscriber) * -1;
};

const TwitchFollowerCountDescendingSort = <
  T extends { TwitchFollower?: CountType },
>(
  rowA: T,
  rowB: T
): number => {
  const aExist: boolean = rowA.TwitchFollower !== undefined;
  const bExist: boolean = rowB.TwitchFollower !== undefined;

  if (!aExist && !bExist) return 0;

  if (!bExist) return -1;

  if (!aExist) return 1;

  // This line does nothing but to stop TypeScript from
  // whining about TwitchFollower might be undefined
  if (!(rowA.TwitchFollower && rowB.TwitchFollower)) return 0;

  return CountTypeCompare(rowA.TwitchFollower, rowB.TwitchFollower) * -1;
};

export const YouTubeSubscriberCountPlusTwitchFollowerCountAscendingSort = <
  T extends { YouTubeSubscriber?: CountType; TwitchFollower?: CountType },
>(
  rowA: T,
  rowB: T
): number => {
  const aCount =
    (GetCount(rowA.YouTubeSubscriber) ?? 0) +
    (GetCount(rowA.TwitchFollower) ?? 0);
  const bCount =
    (GetCount(rowB.YouTubeSubscriber) ?? 0) +
    (GetCount(rowB.TwitchFollower) ?? 0);

  if (aCount > bCount) return 1;

  if (bCount > aCount) return -1;

  return 0;
};

// TODO: Merge the logic of descending and ascending functions
export const YouTubeSubscriberCountPlusTwitchFollowerCountDescendingSort = <
  T extends { YouTubeSubscriber?: CountType; TwitchFollower?: CountType },
>(
  rowA: T,
  rowB: T
): number =>
  YouTubeSubscriberCountPlusTwitchFollowerCountAscendingSort(rowA, rowB) * -1;

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
