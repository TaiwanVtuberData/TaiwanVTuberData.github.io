import { ColumnSortFunction } from 'react-data-table-component/dist/src/DataTable/types';
import { GrowthDisplayData } from '../types/VTuberGrowthDisplayData';

// TODO: how do I inject field name _7DaysGrowth using template?
export const _7DaysGrowthSort: ColumnSortFunction<{
  _7DaysGrowth: GrowthDisplayData;
}> = (rowA, rowB) => {
  const aCount = rowA._7DaysGrowth.percentage;
  const bCount = rowB._7DaysGrowth.percentage;

  if (aCount > bCount) return 1;

  if (bCount > aCount) return -1;

  return 0;
};

export const _30DaysGrowthSort: ColumnSortFunction<{
  _30DaysGrowth: GrowthDisplayData;
}> = (rowA, rowB) => {
  const aCount = rowA._30DaysGrowth.percentage;
  const bCount = rowB._30DaysGrowth.percentage;

  if (aCount > bCount) return 1;

  if (bCount > aCount) return -1;

  return 0;
};
