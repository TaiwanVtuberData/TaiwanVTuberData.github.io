import { h } from 'preact';
import { Text } from 'preact-i18n';
import { TableColumn } from 'react-data-table-component';

export interface DebutDateColumnRowData {
  debutDate: string;
}

export const DebutDateColumn = <
  RowData extends DebutDateColumnRowData
>(): TableColumn<RowData> => {
  return {
    name: <Text id="table.debutDate">Debut Date</Text>,
    selector: (row: { debutDate: string }): string => row.debutDate,
  };
};
