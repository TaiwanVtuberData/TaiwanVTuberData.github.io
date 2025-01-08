import { AnniversaryDebutInfo } from '../types/DebutInfo';
import { Text } from 'preact-i18n';
import { TableColumn } from 'react-data-table-component';

export interface DebutDateOfTheYearColumnRowData {
  debutInfo: AnniversaryDebutInfo;
}

export const DebutDateOfTheYearColumn = <
  RowData extends DebutDateOfTheYearColumnRowData,
>(): TableColumn<RowData> => {
  return {
    name: <Text id="table.debutDate">Debut Date</Text>,
    selector: (row: { debutInfo: AnniversaryDebutInfo }): string =>
      row.debutInfo.debutDateOfTheYear,
  };
};
