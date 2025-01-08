import { Text } from 'preact-i18n';
import { TableColumn } from 'react-data-table-component';

export interface NationalityColumnRowData {
  nationality: string | null;
}

export const NationalityColumn = <
  RowData extends NationalityColumnRowData,
>(): TableColumn<RowData> => {
  return {
    name: <Text id="table.nationality">Nationality</Text>,
    selector: (row: RowData): string => row.nationality ?? '',
  };
};
