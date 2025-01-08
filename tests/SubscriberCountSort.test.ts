import { CountType } from '../src/types/Common/CountType';
import {
  SubscriberCountDescendingSort,
  YouTubeSubscriberCountPlusTwitchFollowerCountAscendingSort,
  YouTubeSubscriberCountPlusTwitchFollowerCountDescendingSort,
} from '../src/utils/sort/VTuberSort';
import { describe, expect, test } from 'vitest';

describe('SubscriberCountSort Test', () => {
  interface Row {
    id: number;
    YouTubeSubscriber: CountType | null;
    TwitchFollower: CountType | null;
  }

  test('Expected YouTubeSubscriberCountPlusTwitchFollowerCountSort no nullable values to be sorted properly', () => {
    const unsortedData: Array<Row> = [
      {
        id: 0,
        YouTubeSubscriber: { tag: 'has', count: 100 },
        TwitchFollower: { tag: 'has', count: 100 },
      },
      {
        id: 1,
        YouTubeSubscriber: { tag: 'has', count: 200 },
        TwitchFollower: { tag: 'has', count: 100 },
      },
      {
        id: 2,
        YouTubeSubscriber: { tag: 'has', count: 0 },
        TwitchFollower: { tag: 'has', count: 0 },
      },
    ];

    const ascendingSortedData = [...unsortedData].sort(
      YouTubeSubscriberCountPlusTwitchFollowerCountAscendingSort,
    );
    const ascendingSortedId = ascendingSortedData.map((e) => e.id);

    expect(ascendingSortedId).toStrictEqual([2, 0, 1]);

    const descendingSortedData = [...unsortedData].sort(
      YouTubeSubscriberCountPlusTwitchFollowerCountDescendingSort,
    );
    const descendingSortedId = descendingSortedData.map((e) => e.id);

    expect(descendingSortedId).toStrictEqual([1, 0, 2]);
  });

  test('Expected YouTubeSubscriberCountPlusTwitchFollowerCountSort nullable values to be sorted properly', () => {
    const unsortedData: Array<Row> = [
      {
        id: 0,
        YouTubeSubscriber: { tag: 'has', count: 100 },
        TwitchFollower: null,
      },
      {
        id: 1,
        YouTubeSubscriber: null,
        TwitchFollower: { tag: 'has', count: 300 },
      },
      { id: 2, YouTubeSubscriber: null, TwitchFollower: null },
      {
        id: 3,
        YouTubeSubscriber: { tag: 'has', count: 100 },
        TwitchFollower: { tag: 'has', count: 300 },
      },
    ];

    const ascendingSortedData = [...unsortedData].sort(
      YouTubeSubscriberCountPlusTwitchFollowerCountAscendingSort,
    );
    const ascendingSortedId = ascendingSortedData.map((e) => e.id);

    expect(ascendingSortedId).toStrictEqual([2, 0, 1, 3]);

    const descendingSortedData = [...unsortedData].sort(
      YouTubeSubscriberCountPlusTwitchFollowerCountDescendingSort,
    );
    const descendingSortedId = descendingSortedData.map((e) => e.id);

    expect(descendingSortedId).toStrictEqual([3, 1, 0, 2]);
  });

  test('Expected YouTubeSubscriberCountPlusTwitchFollowerCountSort no value types to be sorted properly', () => {
    const unsortedData: Array<Row> = [
      {
        id: 0,
        YouTubeSubscriber: { tag: 'has', count: 100 },
        TwitchFollower: { tag: 'no' },
      },
      {
        id: 1,
        YouTubeSubscriber: { tag: 'hidden' },
        TwitchFollower: { tag: 'has', count: 300 },
      },
      {
        id: 2,
        YouTubeSubscriber: { tag: 'hidden' },
        TwitchFollower: { tag: 'no' },
      },
      {
        id: 3,
        YouTubeSubscriber: { tag: 'has', count: 100 },
        TwitchFollower: { tag: 'has', count: 300 },
      },
    ];

    const ascendingSortedData = [...unsortedData].sort(
      YouTubeSubscriberCountPlusTwitchFollowerCountAscendingSort,
    );
    const ascendingSortedId = ascendingSortedData.map((e) => e.id);

    expect(ascendingSortedId).toStrictEqual([2, 0, 1, 3]);

    const descendingSortedData = [...unsortedData].sort(
      YouTubeSubscriberCountPlusTwitchFollowerCountDescendingSort,
    );
    const descendingSortedId = descendingSortedData.map((e) => e.id);

    expect(descendingSortedId).toStrictEqual([3, 1, 0, 2]);
  });

  test('Expected SubscriberCountDescendingSort YouTube+Twitch to be sorted properly', () => {
    const unsortedData: Array<Row> = [
      {
        id: 0,
        YouTubeSubscriber: { tag: 'has', count: 100 },
        TwitchFollower: { tag: 'no' },
      },
      {
        id: 1,
        YouTubeSubscriber: { tag: 'hidden' },
        TwitchFollower: { tag: 'has', count: 300 },
      },
      {
        id: 2,
        YouTubeSubscriber: { tag: 'hidden' },
        TwitchFollower: { tag: 'no' },
      },
      {
        id: 3,
        YouTubeSubscriber: { tag: 'has', count: 100 },
        TwitchFollower: { tag: 'has', count: 300 },
      },
    ];

    const descendingSortedData = [...unsortedData].sort(
      SubscriberCountDescendingSort('YouTube+Twitch'),
    );
    const descendingSortedId = descendingSortedData.map((e) => e.id);

    expect(descendingSortedId).toStrictEqual([3, 1, 0, 2]);
  });

  test('Expected SubscriberCountDescendingSort YouTube to be sorted properly', () => {
    const testFunction = (
      unsortedData: Array<Row>,
      expectedIds: Array<number>,
    ): void => {
      const descendingSortedData = [...unsortedData].sort(
        SubscriberCountDescendingSort('YouTube'),
      );
      const descendingSortedId = descendingSortedData.map((e) => e.id);

      expect(descendingSortedId).toStrictEqual(expectedIds);
    };

    const unsortedData1: Array<Row> = [
      {
        id: 0,
        YouTubeSubscriber: { tag: 'has', count: 100 },
        TwitchFollower: null,
      },
      {
        id: 1,
        YouTubeSubscriber: { tag: 'no' },
        TwitchFollower: null,
      },
      {
        id: 2,
        YouTubeSubscriber: { tag: 'hidden' },
        TwitchFollower: null,
      },
      {
        id: 3,
        YouTubeSubscriber: { tag: 'has', count: 200 },
        TwitchFollower: null,
      },
    ];

    const expectedIds1: Array<number> = [3, 0, 2, 1];
    testFunction(unsortedData1, expectedIds1);

    const unsortedData2: Array<Row> = [
      {
        id: 0,
        YouTubeSubscriber: { tag: 'has', count: 100 },
        TwitchFollower: null,
      },
      {
        id: 1,
        YouTubeSubscriber: { tag: 'hidden' },
        TwitchFollower: null,
      },
      {
        id: 2,
        YouTubeSubscriber: { tag: 'no' },
        TwitchFollower: null,
      },
      {
        id: 3,
        YouTubeSubscriber: { tag: 'has', count: 200 },
        TwitchFollower: null,
      },
    ];

    const expectedIds2: Array<number> = [3, 0, 1, 2];
    testFunction(unsortedData2, expectedIds2);
  });

  test('Expected SubscriberCountDescendingSort Twitch to be sorted properly', () => {
    const testFunction = (
      unsortedData: Array<Row>,
      expectedIds: Array<number>,
    ): void => {
      const descendingSortedData = [...unsortedData].sort(
        SubscriberCountDescendingSort('Twitch'),
      );
      const descendingSortedId = descendingSortedData.map((e) => e.id);

      expect(descendingSortedId).toStrictEqual(expectedIds);
    };

    const unsortedData1: Array<Row> = [
      {
        id: 0,
        YouTubeSubscriber: null,
        TwitchFollower: { tag: 'has', count: 100 },
      },
      {
        id: 1,
        YouTubeSubscriber: null,
        TwitchFollower: { tag: 'no' },
      },
      {
        id: 2,
        YouTubeSubscriber: null,
        TwitchFollower: { tag: 'hidden' },
      },
      {
        id: 3,
        YouTubeSubscriber: null,
        TwitchFollower: { tag: 'has', count: 200 },
      },
    ];

    const expectedIds1: Array<number> = [3, 0, 2, 1];
    testFunction(unsortedData1, expectedIds1);

    const unsortedData2: Array<Row> = [
      {
        id: 0,
        YouTubeSubscriber: null,
        TwitchFollower: { tag: 'has', count: 100 },
      },
      {
        id: 1,
        YouTubeSubscriber: null,
        TwitchFollower: { tag: 'hidden' },
      },
      {
        id: 2,
        YouTubeSubscriber: null,
        TwitchFollower: { tag: 'no' },
      },
      {
        id: 3,
        YouTubeSubscriber: null,
        TwitchFollower: { tag: 'has', count: 200 },
      },
    ];

    const expectedIds2: Array<number> = [3, 0, 1, 2];
    testFunction(unsortedData2, expectedIds2);
  });
});
