import { h } from 'preact';
import { Text } from 'preact-i18n';
import { TableColumn } from 'react-data-table-component';
import { GrowthDisplayData } from '../types/TableDisplayData/VTuberGrowthDisplayData';
import { GrowthDisplayDataToString } from '../utils/NumberUtils';

export interface Days7GrowthColumnRowData {
  _7DaysGrowth: GrowthDisplayData;
}

export const _7DaysGrowthColumn = <
  RowData extends Days7GrowthColumnRowData,
>(tableTranslation: {
  noRecord: string;
  atLeast: string;
}): TableColumn<RowData> => {
  return {
    name: <Text id="table._7DaysGrowth">7 Days Growth (Percent)</Text>,
    cell: (row: RowData): string =>
      GrowthDisplayDataToString(row._7DaysGrowth, tableTranslation),
  };
};
