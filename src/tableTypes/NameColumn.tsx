import { h } from 'preact';
import { Text } from 'preact-i18n';
import { TableColumn } from 'react-data-table-component';
import ProfileImageLink from '../components/ProfileImageLink';

export interface NameColumnRowData {
  id: string;
  imgUrl?: string;
  name: string;
  YouTubeId?: string;
  TwitchId?: string;
}

export const NameColumn = <
  RowData extends NameColumnRowData
>(): TableColumn<RowData> => {
  return {
    name: <Text id="table.displayName">Name</Text>,
    cell: (row: NameColumnRowData): h.JSX.Element => (
      <ProfileImageLink
        VTuberId={row.id}
        imgUrl={row.imgUrl}
        name={row.name}
        YouTubeId={row.YouTubeId}
        TwitchId={row.TwitchId}
      />
    ),
  };
};
