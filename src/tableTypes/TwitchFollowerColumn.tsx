import { Text } from "preact-i18n";
import { TableColumn } from "react-data-table-component";
import { HasCountType } from "../types/Common/CountType";

export interface TwitchFollowerColumnRowData {
  TwitchFollower: HasCountType;
}

export const TwitchFollowerColumn = <
  RowData extends TwitchFollowerColumnRowData,
>(): TableColumn<RowData> => {
  return {
    name: <Text id="table.TwitchFollowerCount">Twitch Followers</Text>,
    selector: (row: RowData): number => row.TwitchFollower.count,
  };
};
