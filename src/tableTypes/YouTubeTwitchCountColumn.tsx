import { h } from 'preact';
import { Text } from 'preact-i18n';
import { TableColumn } from 'react-data-table-component';
import YouTubeTwitchCount from '../components/YouTubeTwitchCount';
import { CountType } from '../types/Common/CountType';

export interface YouTubeTwitchCountColumnRowData {
  YouTubeSubscriber?: CountType;
  TwitchFollower?: CountType;
}

export const YouTubeTwitchCountColumn = <
  RowData extends YouTubeTwitchCountColumnRowData
>(): TableColumn<RowData> => {
  return {
    name: (
      <Text id="table.YouTubeTwitchCount">
        YouTube Subscribers + Twitch Followers
      </Text>
    ),
    cell: (row: YouTubeTwitchCountColumnRowData): h.JSX.Element => (
      <YouTubeTwitchCount
        YouTubeCount={row.YouTubeSubscriber}
        TwitchCount={row.TwitchFollower}
      />
    ),
  };
};
