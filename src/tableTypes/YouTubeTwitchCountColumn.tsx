import YouTubeTwitchCount from '../components/YouTubeTwitchCount';
import { CountType } from '../types/Common/CountType';
import { Text } from 'preact-i18n';
import { JSX } from 'preact/jsx-runtime';
import { TableColumn } from 'react-data-table-component';

export interface YouTubeTwitchCountColumnRowData {
  YouTubeSubscriber: CountType | null;
  TwitchFollower: CountType | null;
}

export const YouTubeTwitchCountColumn = <
  RowData extends YouTubeTwitchCountColumnRowData,
>(): TableColumn<RowData> => {
  return {
    name: (
      <Text id="table.YouTubeTwitchCount">
        YouTube Subscribers + Twitch Followers
      </Text>
    ),
    cell: (row: RowData): JSX.Element => (
      <YouTubeTwitchCount
        YouTubeCount={row.YouTubeSubscriber}
        TwitchCount={row.TwitchFollower}
      />
    ),
  };
};
