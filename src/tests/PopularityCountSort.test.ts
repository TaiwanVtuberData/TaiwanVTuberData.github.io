import {
  PopularityCountAscendingSort,
  PopularityCountDescendingSort,
} from '../utils/sort/PopularityCountSort';

describe('PopularityCountSort Test', () => {
  interface Row {
    id: number;
    YouTubePopularity?: number;
    TwitchPopularity?: number;
  }

  test('Expected no nullable values to be sorted properly', () => {
    const unsortedData: Array<Row> = [
      { id: 0, YouTubePopularity: 100, TwitchPopularity: 100 },
      { id: 1, YouTubePopularity: 200, TwitchPopularity: 100 },
      { id: 2, YouTubePopularity: 0, TwitchPopularity: 0 },
    ];

    const ascendingSortedData = [...unsortedData].sort(
      PopularityCountAscendingSort
    );
    const ascendingSortedId = ascendingSortedData.map((e) => e.id);

    expect(ascendingSortedId).toStrictEqual([2, 0, 1]);

    const descendingSortedData = [...unsortedData].sort(
      PopularityCountDescendingSort
    );
    const descendingSortedId = descendingSortedData.map((e) => e.id);

    expect(descendingSortedId).toStrictEqual([1, 0, 2]);
  });

  test('Expected nullable values to be sorted properly', () => {
    const unsortedData: Array<Row> = [
      { id: 0, YouTubePopularity: 100 },
      { id: 1, TwitchPopularity: 300 },
      { id: 2 },
      { id: 3, YouTubePopularity: 100, TwitchPopularity: 300 },
    ];

    const ascendingSortedData = [...unsortedData].sort(
      PopularityCountAscendingSort
    );
    const ascendingSortedId = ascendingSortedData.map((e) => e.id);

    expect(ascendingSortedId).toStrictEqual([2, 0, 1, 3]);

    const descendingSortedData = [...unsortedData].sort(
      PopularityCountDescendingSort
    );
    const descendingSortedId = descendingSortedData.map((e) => e.id);

    expect(descendingSortedId).toStrictEqual([3, 1, 0, 2]);
  });
});
