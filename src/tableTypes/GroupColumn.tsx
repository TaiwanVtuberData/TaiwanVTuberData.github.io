import { h } from 'preact';
import { Text } from 'preact-i18n';
import { TableColumn } from 'react-data-table-component';
import baseroute from '../baseroute';
import tableStyle from '../style/DataTableStyle.module.css';

export interface GroupColumnRowData {
  group: string;
}

export const GroupColumn = <
  RowData extends GroupColumnRowData
>(): TableColumn<RowData> => {
  return {
    name: <Text id="table.group">Group</Text>,
    cell: (row: GroupColumnRowData): h.JSX.Element | null =>
      row.group !== '' ? (
        <a
          class={tableStyle.groupLink}
          href={`${baseroute}/group/${row.group}`}
        >
          {row.group}
        </a>
      ) : null,
  };
};
