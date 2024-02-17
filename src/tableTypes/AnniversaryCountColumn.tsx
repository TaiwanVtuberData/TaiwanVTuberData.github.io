import { Text } from "preact-i18n";
import { TableColumn } from "react-data-table-component";

export interface AnniversaryCountColumnRowData {
  anniversaryYearCount: number;
}

export const AnniversaryCountColumn = <
  RowData extends AnniversaryCountColumnRowData,
>(): TableColumn<RowData> => {
  return {
    name: <Text id="table.anniversaryYearCount">Anni. Year Count</Text>,
    selector: (row: { anniversaryYearCount: number }): number =>
      row.anniversaryYearCount,
  };
};
