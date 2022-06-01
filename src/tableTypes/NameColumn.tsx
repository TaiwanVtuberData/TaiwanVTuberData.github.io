import { h } from 'preact';
import { Text } from 'preact-i18n';
import { TableColumn } from 'react-data-table-component';
import ProfileImagePopup from '../components/ProfileImagePopup';

export interface NameColumnRowData {
  id: string;
  imgUrl?: string;
  name: string;
}

export const NameColumn = <
  RowData extends NameColumnRowData
>(): TableColumn<RowData> => {
  return {
    name: <Text id="table.displayName">Name</Text>,
    cell: (row: NameColumnRowData): h.JSX.Element => (
      <ProfileImagePopup
        VTuberId={row.id}
        imgUrl={row.imgUrl}
        name={row.name}
      />
    ),
  };
};
