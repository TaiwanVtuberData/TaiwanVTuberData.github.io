import { h } from 'preact';
import { Text } from 'preact-i18n';
import { TableColumn } from 'react-data-table-component';
import YouTubeTwitchCount from '../components/YouTubeTwitchCount';

export interface PopularityColumnRowData {
  hasYouTube: boolean;
  YouTubePopularity: number;
  hasTwitch: boolean;
  TwitchPopularity: number;
}

export const PopularityColumn = <
  RowData extends PopularityColumnRowData
>(): TableColumn<RowData> => {
  return {
    name: <Text id="table.popularity">Popularity</Text>,
    cell: (row: PopularityColumnRowData): h.JSX.Element => (
      <YouTubeTwitchCount
        hasYouTube={row.hasYouTube}
        YouTubeSubscriberCount={row.YouTubePopularity}
        hasTwitch={row.hasTwitch}
        TwitchFollowerCount={row.TwitchPopularity}
      />
    ),
  };
};
