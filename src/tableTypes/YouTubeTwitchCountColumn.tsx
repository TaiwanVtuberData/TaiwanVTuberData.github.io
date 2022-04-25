import { h } from 'preact';
import { Text } from 'preact-i18n';
import { TableColumn } from 'react-data-table-component';
import YouTubeTwitchCount from '../components/YouTubeTwitchCount';

export interface YouTubeTwitchCountColumnRowData {
  hasYouTube: boolean;
  YouTubeSubscriberCount?: number;
  hasTwitch: boolean;
  TwitchFollowerCount: number;
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
        hasYouTube={row.hasYouTube}
        YouTubeSubscriberCount={row.YouTubeSubscriberCount}
        hasTwitch={row.hasTwitch}
        TwitchFollowerCount={row.TwitchFollowerCount}
      />
    ),
  };
};
