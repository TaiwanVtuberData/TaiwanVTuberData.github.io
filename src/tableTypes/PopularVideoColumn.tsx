import { h } from 'preact';
import { Text } from 'preact-i18n';
import { TableColumn } from 'react-data-table-component';
import ShowVideoButton from '../components/ShowVideoButton';
import { VideoInfo } from '../types/Common/VideoInfo';

export interface PopularVideoColumnRowData {
  popularVideo?: VideoInfo;
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
  };
};
