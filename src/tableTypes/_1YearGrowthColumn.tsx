import { GrowthDisplayData } from '../types/TableDisplayData/VTuberGrowthDisplayData';
import { GrowthDisplayDataToString } from '../utils/NumberUtils';
import { Text } from 'preact-i18n';
import { TableColumn } from 'react-data-table-component';

export interface Year1GrowthColumnRowData {
  _1YearGrowth: GrowthDisplayData;
}

export const _1YearGrowthColumn = <
  RowData extends Year1GrowthColumnRowData,
>(tableTranslation: {
  noRecord: string;
  atLeast: string;
}): TableColumn<RowData> => {
  return {
    name: <Text id="table._1YearGrowth">1 Year Growth (Percent)</Text>,
    cell: (row: RowData): string =>
      GrowthDisplayDataToString(row._1YearGrowth, tableTranslation),
  };
};
