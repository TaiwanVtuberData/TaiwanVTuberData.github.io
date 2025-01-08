import ProfileImagePopup from '../components/ProfileImagePopup';
import { Text } from 'preact-i18n';
import { JSX } from 'preact/jsx-runtime';
import { TableColumn } from 'react-data-table-component';

export interface NameColumnRowData {
  id: string;
  imgUrl: string | null;
  name: string;
}

export const NameColumn = <
  RowData extends NameColumnRowData,
>(): TableColumn<RowData> => {
  return {
    name: <Text id="table.displayName">Name</Text>,
    cell: (row: RowData): JSX.Element => (
      <ProfileImagePopup
        VTuberId={row.id}
        imgUrl={row.imgUrl}
        name={row.name}
      />
    ),
  };
};
