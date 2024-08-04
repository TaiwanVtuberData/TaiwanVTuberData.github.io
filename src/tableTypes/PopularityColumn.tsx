import { Text } from "preact-i18n";
import { TableColumn } from "react-data-table-component";
import YouTubeTwitchCount from "../components/YouTubeTwitchCount";
import { CountType } from "../types/Common/CountType";
import { ENFORCE_YOUTUBE_COMPLIANCE } from "../Config";
import { JSX } from "preact/jsx-runtime";

const numberToCountType = (popularity: number | null): CountType | null => {
  if (popularity) return { tag: "has", count: popularity };
  return null;
};

export interface PopularityColumnRowData {
  YouTubePopularity: number | null;
  TwitchPopularity: number | null;
}

export const PopularityColumn = <
  RowData extends PopularityColumnRowData,
>(): TableColumn<RowData> => {
  return {
    name: <Text id="table.popularity">Popularity</Text>,
    cell: (row: RowData): JSX.Element => (
      <YouTubeTwitchCount
        YouTubeCount={numberToCountType(row.YouTubePopularity)}
        TwitchCount={numberToCountType(row.TwitchPopularity)}
      />
    ),
    omit: ENFORCE_YOUTUBE_COMPLIANCE,
  };
};
