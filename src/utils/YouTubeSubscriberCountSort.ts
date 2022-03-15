import { ColumnSortFunction } from 'react-data-table-component/dist/src/DataTable/types';
import { VTuberDisplayData } from '../types/VTuberDisplayData';

export const YouTubeSubscriberCountSort: ColumnSortFunction<
  VTuberDisplayData
> = (rowA, rowB) => {
  const a = rowA.YouTubeSubscriberCount;
  const b = rowB.YouTubeSubscriberCount;

  if (a === undefined && b === undefined) return 0;

  if (b === undefined) return 1;

  if (a === undefined) return -1;

  if (a > b) return 1;

  if (b > a) return -1;

  return 0;
};
