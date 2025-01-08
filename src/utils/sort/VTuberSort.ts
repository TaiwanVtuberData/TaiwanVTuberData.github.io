import { CountType } from '../../types/Common/CountType';
import { DebutInfo } from '../../types/DebutInfo';
import { CountTypeCompare, GetCount } from '../CountTypeUtils';
import { getDebutDate } from '../DebutInfoUtils';

export type SortMethod = 'YouTube+Twitch' | 'YouTube' | 'Twitch' | 'debutDate';

const YouTubeSubscriberCountDescendingSort = <
  T extends { YouTubeSubscriber: CountType | null },
>(
  rowA: T,
  rowB: T,
): number => {
  if (rowA.YouTubeSubscriber === null && rowB.YouTubeSubscriber === null) {
    return 0;
  }

  if (rowB.YouTubeSubscriber === null) {
    return -1;
  }

  if (rowA.YouTubeSubscriber === null) {
    return 1;
  }

  return CountTypeCompare(rowA.YouTubeSubscriber, rowB.YouTubeSubscriber) * -1;
};

const TwitchFollowerCountDescendingSort = <
  T extends { TwitchFollower: CountType | null },
>(
  rowA: T,
  rowB: T,
): number => {
  if (rowA.TwitchFollower === null && rowB.TwitchFollower === null) {
    return 0;
  }

  if (rowB.TwitchFollower === null) {
    return -1;
  }

  if (rowA.TwitchFollower === null) {
    return 1;
  }

  return CountTypeCompare(rowA.TwitchFollower, rowB.TwitchFollower) * -1;
};

export const YouTubeSubscriberCountPlusTwitchFollowerCountAscendingSort = <
  T extends {
    YouTubeSubscriber: CountType | null;
    TwitchFollower: CountType | null;
  },
>(
  rowA: T,
  rowB: T,
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

export const YouTubeSubscriberCountPlusTwitchFollowerCountDescendingSort = <
  T extends {
    YouTubeSubscriber: CountType | null;
    TwitchFollower: CountType | null;
  },
>(
  rowA: T,
  rowB: T,
): number =>
  YouTubeSubscriberCountPlusTwitchFollowerCountAscendingSort(rowA, rowB) * -1;

export const debutDateAscendingSort = <T extends { debutInfo: DebutInfo }>(
  rowA: T,
  rowB: T,
): number => {
  const aDebutDate = getDebutDate(rowA.debutInfo);
  const bDebutDate = getDebutDate(rowB.debutInfo);

  if (aDebutDate === null && bDebutDate === null) return 0;

  if (aDebutDate === null) return -1;

  if (bDebutDate === null) return 1;

  if (aDebutDate > bDebutDate) return 1;

  if (bDebutDate > aDebutDate) return -1;

  return 0;
};

export const debutDateDescendingSort = <T extends { debutInfo: DebutInfo }>(
  rowA: T,
  rowB: T,
): number => debutDateAscendingSort(rowA, rowB) * -1;

export const SubscriberCountDescendingSort = (sortMethod: SortMethod) => {
  switch (sortMethod) {
    case 'YouTube+Twitch':
      return YouTubeSubscriberCountPlusTwitchFollowerCountDescendingSort;
    case 'YouTube':
      return YouTubeSubscriberCountDescendingSort;
    case 'Twitch':
      return TwitchFollowerCountDescendingSort;
    // FIXME: debutDate should not be part of SubscriberCountDescendingSort
    case 'debutDate':
      return debutDateDescendingSort;
  }
};
