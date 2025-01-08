import { CountType } from '../src/types/Common/CountType';
import { CountTypeCompare } from '../src/utils/CountTypeUtils';
import { describe, expect, test } from 'vitest';

describe('CountTypeCompare Test', () => {
  test('Expected CountTypeCompare no nullable values to sort properly', () => {
    const unsortedData: Array<CountType> = [
      { tag: 'has', count: 400 },
      { tag: 'has', count: 300 },
      { tag: 'has', count: 200 },
      { tag: 'has', count: 100 },
    ];

    const sortedData = [...unsortedData].sort(CountTypeCompare);

    const expectedData: Array<CountType> = [
      { tag: 'has', count: 100 },
      { tag: 'has', count: 200 },
      { tag: 'has', count: 300 },
      { tag: 'has', count: 400 },
    ];
    expect(sortedData).toStrictEqual(expectedData);
  });

  test('Expected CountTypeCompare to sort properly 1', () => {
    const unsortedData: Array<CountType> = [
      { tag: 'has', count: 100 },
      { tag: 'no' },
      { tag: 'hidden' },
      { tag: 'has', count: 200 },
    ];

    const sortedData = [...unsortedData].sort(CountTypeCompare);

    const expectedData: Array<CountType> = [
      { tag: 'no' },
      { tag: 'hidden' },
      { tag: 'has', count: 100 },
      { tag: 'has', count: 200 },
    ];
    expect(sortedData).toStrictEqual(expectedData);
  });

  test('Expected CountTypeCompare to sort properly 2', () => {
    const unsortedData: Array<CountType> = [
      { tag: 'has', count: 100 },
      { tag: 'hidden' },
      { tag: 'no' },
      { tag: 'has', count: 200 },
    ];

    const sortedData = [...unsortedData].sort(CountTypeCompare);

    const expectedData: Array<CountType> = [
      { tag: 'no' },
      { tag: 'hidden' },
      { tag: 'has', count: 100 },
      { tag: 'has', count: 200 },
    ];
    expect(sortedData).toStrictEqual(expectedData);
  });
});
