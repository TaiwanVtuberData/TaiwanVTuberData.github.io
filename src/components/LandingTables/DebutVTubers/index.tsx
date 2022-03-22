import { Fragment, FunctionalComponent, h } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import { Text } from 'preact-i18n';
import DataTable, { TableColumn } from 'react-data-table-component';
import * as Api from '../../../services/ApiService';
import DefaultDataTableProps from '../../../utils/DefaultDataTableProps';
import '../../../style/index.css';
import ActivityRowStyles from '../../../style/ActivityRowStyles';
import { VTuberDebutDisplayData } from '../../../types/TableDisplayData/VTuberDebutDisplayData';
import { getISODateString } from '../../../utils/DateTimeUtils';
import IsTodayRowStyle from '../../../style/IsTodayRowStyles';
import { VTuberDebutToDisplay } from '../../../types/ApiToDisplayData/DebutTransform';
import { CompactTableStyle } from '../../../style/CompactTableStyle';

const DebutVTubersTable: FunctionalComponent = () => {
  const columns: Array<TableColumn<VTuberDebutDisplayData>> = [
    {
      name: <Text id="table.debutDate">Debut Date</Text>,
      width: '100px',
      selector: (row: { debutDate: string }): string => row.debutDate,
      sortable: true,
    },
    {
      name: '',
      width: '75px',
      cell: (row: { profileImg: h.JSX.Element | null }): h.JSX.Element | null =>
        row.profileImg,
    },
    {
      name: <Text id="table.displayName">Name</Text>,
      wrap: true,
      selector: (row: { name: string }): string => row.name,
    },
    {
      name: <Text id="table.links">Links</Text>,
      minWidth: '50px',
      maxWidth: '150px',
      cell: (row: {
        channelLinks: h.JSX.Element | null;
      }): h.JSX.Element | null => row.channelLinks,
    },
    {
      name: <Text id="table.YouTubeSubscriberCount">YouTube Subscribers</Text>,
      cell: (row: {
        hasYouTube: boolean;
        YouTubeSubscriberCount?: number;
      }): h.JSX.Element | number | null =>
        row.hasYouTube
          ? row.YouTubeSubscriberCount ?? (
              <Text id="table.hiddenCount">hidden</Text>
            )
          : null,
      right: true,
    },
  ];

  // search filter
  const [data, setData] = useState<Array<VTuberDebutDisplayData>>([]);

  const [pending, setPending] = useState(true);

  const getVTubers = async (): Promise<void> => {
    const todayDate: string = getISODateString(new Date(), 8);
    await Api.getDebutVTubers('next-7-days').then((res) => {
      setData(
        res.data.VTubers.map((e) => e)
          .sort((a, b) => a.debutDate.localeCompare(b.debutDate))
          .map((e) => VTuberDebutToDisplay(e, todayDate))
      );
      setPending(false);
    });
  };

  useEffect(() => {
    getVTubers();
  }, []);

  return (
    <Fragment>
      <h3>
        <Text id="header.debutVTubers">Debut VTubers</Text>
      </h3>
      <DataTable
        {...DefaultDataTableProps}
        columns={columns}
        data={data}
        // Typescript does not accept concat two array of different types
        conditionalRowStyles={ActivityRowStyles.concat(
          IsTodayRowStyle as Array<any>
        )}
        customStyles={CompactTableStyle}
        fixedHeader
        progressPending={pending}
        progressComponent={<Text id="table.loading">Loading...</Text>}
      />
    </Fragment>
  );
};

export default DebutVTubersTable;
