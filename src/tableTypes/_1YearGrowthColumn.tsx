import { Text } from "preact-i18n";
import { TableColumn } from "react-data-table-component";
import { GrowthDisplayData } from "../types/TableDisplayData/VTuberGrowthDisplayData";
import { GrowthDisplayDataToString } from "../utils/NumberUtils";

export interface Year1GrowthColumnRowData {
  _365DaysGrowth: GrowthDisplayData;
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
      GrowthDisplayDataToString(row._365DaysGrowth, tableTranslation), // TODO: change to row._1YearGrowth
  };
};