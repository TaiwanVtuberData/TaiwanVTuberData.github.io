import { TableColumn } from "react-data-table-component";

export interface RankingColumnRowData {
  ranking: number;
}

export const RankingColumn = <
  RowData extends RankingColumnRowData,
>(): TableColumn<RowData> => {
  return {
    name: "#",
    selector: (row: RowData): number => row.ranking,
    wrap: false,
  };
};
