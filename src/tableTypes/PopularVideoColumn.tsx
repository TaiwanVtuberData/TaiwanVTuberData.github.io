import { ENFORCE_YOUTUBE_COMPLIANCE } from '../Config';
import ShowVideoButton from '../components/ShowVideoButton';
import { VideoInfo } from '../types/Common/VideoInfo';
import { Text } from 'preact-i18n';
import { JSX } from 'preact/jsx-runtime';
import { TableColumn } from 'react-data-table-component';

export interface PopularVideoColumnRowData {
  popularVideo: VideoInfo | null;
}

export const PopularVideoColumn = <
  RowData extends PopularVideoColumnRowData,
>(): TableColumn<RowData> => {
  return {
    name: <Text id="table.popularVideo">Popular Video</Text>,
    cell: (row: RowData): JSX.Element | null =>
      row.popularVideo !== undefined ? (
        <ShowVideoButton popularVideo={row.popularVideo} />
      ) : null,
    omit: ENFORCE_YOUTUBE_COMPLIANCE,
  };
};
