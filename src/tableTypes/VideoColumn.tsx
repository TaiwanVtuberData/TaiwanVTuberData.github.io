import { Text } from "preact-i18n";
import { TableColumn } from "react-data-table-component";
import VideoLink from "../components/VideoLink";
import { JSX } from "preact/jsx-runtime";

export interface VideoColumnRowData {
  thumbnailUrl: string;
  videoUrl: string;
}

export const VideoColumn = <
  RowData extends VideoColumnRowData,
>(): TableColumn<RowData> => {
  return {
    name: <Text id="table.video">Video</Text>,
    cell: (row: RowData): JSX.Element | null =>
      VideoLink({
        thumbnailUrl: row.thumbnailUrl,
        videoUrl: row.videoUrl,
      }),
  };
};
