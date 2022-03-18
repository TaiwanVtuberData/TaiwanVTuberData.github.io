import { ColumnSortFunction } from 'react-data-table-component/dist/src/DataTable/types';
import { GroupDisplayData } from '../types/GroupDisplayData';

export const GroupNameSort: ColumnSortFunction<GroupDisplayData> = (
  rowA,
  rowB
) => {
  return rowA.name.localeCompare(rowB.name);
};
