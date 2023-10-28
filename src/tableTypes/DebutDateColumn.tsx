import { Text } from "preact-i18n";
import { TableColumn } from "react-data-table-component";
import { HasDebutInfo } from "../types/DebutInfo";

export interface DebutDateColumnRowData {
  debutInfo: HasDebutInfo;
}

export const DebutDateColumn = <
  RowData extends DebutDateColumnRowData,
>(): TableColumn<RowData> => {
  return {
    name: <Text id="table.debutDate">Debut Date</Text>,
    selector: (row: { debutInfo: HasDebutInfo }): string =>
      row.debutInfo.debutDate,
  };
};
