import { h } from 'preact';
import { Text } from 'preact-i18n';
import { TableColumn } from 'react-data-table-component';
import { GetRoute } from '../utils/TypeSafeRouting';
import tableStyle from '../style/DataTableStyle.module.css';

export interface GroupColumnRowData {
  group?: string;
}

export const GroupColumn = <
  RowData extends GroupColumnRowData
>(): TableColumn<RowData> => {
  return {
    name: <Text id="table.group">Group</Text>,
    cell: (row: GroupColumnRowData): h.JSX.Element | null =>
      row.group !== undefined ? (
        <a
          class={tableStyle.groupLink}
          href={GetRoute({ type: 'group', name: row.group })}
        >
          {row.group}
        </a>
      ) : null,
  };
};
