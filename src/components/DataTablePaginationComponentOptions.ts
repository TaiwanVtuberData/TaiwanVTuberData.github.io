import { PaginationOptions } from 'react-data-table-component';

export const DataTablePaginationComponent: PaginationOptions = {
  noRowsPerPage: false,
  rowsPerPageText: '每頁數量',
  rangeSeparatorText: '共有',
  selectAllRowsItem: true,
  selectAllRowsItemText: '所有',
} as const;
