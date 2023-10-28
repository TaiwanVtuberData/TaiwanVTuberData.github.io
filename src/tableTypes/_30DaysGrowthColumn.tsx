import { Text } from "preact-i18n";
import { TableColumn } from "react-data-table-component";
import { GrowthDisplayData } from "../types/TableDisplayData/VTuberGrowthDisplayData";
import { GrowthDisplayDataToString } from "../utils/NumberUtils";

export interface Days30GrowthColumnRowData {
  _30DaysGrowth: GrowthDisplayData;
}

export const _30DaysGrowthColumn = <
  RowData extends Days30GrowthColumnRowData,
>(tableTranslation: {
  noRecord: string;
  atLeast: string;
}): TableColumn<RowData> => {
  return {
    name: <Text id="table._30DaysGrowth">30 Days Growth (Percent)</Text>,
    cell: (row: RowData): string =>
      GrowthDisplayDataToString(row._30DaysGrowth, tableTranslation),
  };
};
