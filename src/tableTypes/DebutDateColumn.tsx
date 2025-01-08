import { DebutInfo } from '../types/DebutInfo';
import { getDebutDate } from '../utils/DebutInfoUtils';
import { Text } from 'preact-i18n';
import { TableColumn } from 'react-data-table-component';

export interface DebutDateColumnRowData {
  debutInfo: DebutInfo;
}

export const DebutDateColumn = <
  RowData extends DebutDateColumnRowData,
>(): TableColumn<RowData> => {
  return {
    name: <Text id="table.debutDate">Debut Date</Text>,
    selector: (row: { debutInfo: DebutInfo }): string =>
      getDebutDate(row.debutInfo) ?? '',
  };
};
