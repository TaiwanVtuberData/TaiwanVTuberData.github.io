import { ColumnSortFunction } from 'react-data-table-component/dist/src/DataTable/types';
import { VTuberDisplayData } from '../types/VTuberDisplayData';

export const YouTubeSubscriberCountSort: ColumnSortFunction<
  VTuberDisplayData
> = (rowA, rowB) => {
  const aExist = rowA.hasYouTube;
  const bExist = rowB.hasYouTube;

  if (!aExist && !bExist) return 0;

  if (!bExist) return 1;

  if (!aExist) return -1;

  const aCount = rowA.YouTubeSubscriberCount;
  const bCount = rowB.YouTubeSubscriberCount;

  if (aCount === undefined && bCount === undefined) return 0;

  if (bCount === undefined) return 1;

  if (aCount === undefined) return -1;

  if (aCount > bCount) return 1;

  if (bCount > aCount) return -1;

  return 0;
};
