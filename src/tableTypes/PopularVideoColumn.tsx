import { Text } from "preact-i18n";
import { TableColumn } from "react-data-table-component";
import ShowVideoButton from "../components/ShowVideoButton";
import { VideoInfo } from "../types/Common/VideoInfo";
import { ENFORCE_YOUTUBE_COMPLIANCE } from "../Config";
import { JSX } from "preact/jsx-runtime";

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
    omit: ENFORCE_YOUTUBE_COMPLIANCE,
  };
};
