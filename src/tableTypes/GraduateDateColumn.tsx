import { Text } from "preact-i18n";
import { TableColumn } from "react-data-table-component";

export interface GraduateDateColumnRowData {
  graduateDate: string;
}

export const GraduateDateColumn = <
  RowData extends GraduateDateColumnRowData,
>(): TableColumn<RowData> => {
  return {
    name: <Text id="table.graduateDate">Graduation Date</Text>,
    selector: (row: { graduateDate: string }): string => row.graduateDate,
  };
};
