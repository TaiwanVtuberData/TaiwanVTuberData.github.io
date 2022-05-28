import { ColumnSortFunction } from 'react-data-table-component/dist/src/DataTable/types';

export const NameSort: ColumnSortFunction<{ name: string }> = (rowA, rowB) => {
  return rowA.name.localeCompare(rowB.name);
};
