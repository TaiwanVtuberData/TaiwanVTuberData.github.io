import { GetRoute } from '../utils/TypeSafeRouting';
import { JSX } from 'preact';
import { Text } from 'preact-i18n';
import { TableColumn } from 'react-data-table-component';

export interface GroupColumnRowData {
  group: string | null;
}

export const GroupColumn = <
  RowData extends GroupColumnRowData,
>(): TableColumn<RowData> => {
  return {
    name: <Text id="table.group">Group</Text>,
    cell: (row: RowData): JSX.Element | null =>
      row.group !== null ? (
        <a href={GetRoute({ type: 'group', name: row.group })}>{row.group}</a>
      ) : null,
  };
};
