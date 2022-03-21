import { GrowthDisplayData } from '../types/TableDisplayData/VTuberGrowthDisplayData';

export const PrependSign = (value: number): string => {
  if (value > 0) return `+${value}`;
  if (value < 0) return `${value}`;

  return '0';
};

const valueToPercentString = (value: number): string =>
  (value * 100).toFixed(2);

export const GrowthDisplayDataToString = (
  e: GrowthDisplayData,
  tableTranslation: { noRecord: string; atLeast: string }
): string => {
  switch (e.recordType) {
    case 'none':
      return tableTranslation.noRecord;
    case 'partial':
      return `${tableTranslation.atLeast} ${PrependSign(
        e.diff
      )} (${valueToPercentString(e.percentage)}%)`;
    case 'full':
      return `${PrependSign(e.diff)} (${valueToPercentString(e.percentage)}%)`;
  }
};
