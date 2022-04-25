import { h } from 'preact';
import { Text, withText } from 'preact-i18n';
import { TableColumn } from 'react-data-table-component';
import { openModal } from '../global/modalState';
import { VideoInfo } from '../types/Common/VideoInfo';

const ShowVideoElement = withText('text.showVideo')(
  (props: { showVideo?: string; popularVideo: VideoInfo }) => (
    <input
      type="button"
      value={props.showVideo}
      onClick={(): void => openModal(props.popularVideo)}
    />
  )
);

export interface PopularVideoColumnRowData {
  popularVideo?: VideoInfo;
}

export const PopularVideoColumn = <
  RowData extends PopularVideoColumnRowData
>(): TableColumn<RowData> => {
  return {
    name: <Text id="table.popularVideo">Popular Video</Text>,
    cell: (row: PopularVideoColumnRowData): h.JSX.Element | null =>
      row.popularVideo !== undefined ? (
        <ShowVideoElement popularVideo={row.popularVideo} />
      ) : null,
  };
};
