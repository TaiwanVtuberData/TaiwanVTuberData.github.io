import { Fragment, FunctionalComponent, h } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import { Text } from 'preact-i18n';
import DataTable, { TableColumn } from 'react-data-table-component';
import * as Api from '../../../services/ApiService';
import { VTuberDisplayData } from '../../../types/TableDisplayData/VTuberDisplayData';
import DefaultDataTableProps from '../../../utils/DefaultDataTableProps';
import '../../../style/index.css';
import ActivityRowStyles from '../../../style/ActivityRowStyles';
import { CompactTableStyle } from '../../../style/CompactTableStyle';
import { NameColumn } from '../../../tableTypes/NameColumn';
import { YouTubeTwitchCountColumn } from '../../../tableTypes/YouTubeTwitchCountColumn';
import { PopularVideoColumn } from '../../../tableTypes/PopularVideoColumn';
import { VTuberBasicToDisplay } from '../../../utils/transform/BasicTransform';

const TopVTubersTable: FunctionalComponent = () => {
  const columns: Array<TableColumn<VTuberDisplayData>> = [
    NameColumn<VTuberDisplayData>(),
    {
      ...YouTubeTwitchCountColumn(),
      maxWidth: '250px',
    },
    {
      ...PopularVideoColumn(),
      width: '100px',
    },
  ];

  const [data, setData] = useState<Array<VTuberDisplayData>>([]);

  const [pending, setPending] = useState(true);

  const getVTubers = async (): Promise<void> => {
    await Api.getVTubers('10').then((res) => {
      setData(res.data.VTubers.map((e) => VTuberBasicToDisplay(e)));
      setPending(false);
    });
  };

  useEffect(() => {
    getVTubers();
  }, []);

  return (
    <Fragment>
      <h3>
        <Text id="header.YouTubeSubPlusTwitchFollowers">
          YouTube Subscribers + Twitch Followers
        </Text>
        <Fragment> </Fragment>
        <Text id="header.top10">Top 10</Text>
      </h3>
      <DataTable
        {...DefaultDataTableProps}
        columns={columns}
        data={data}
        conditionalRowStyles={ActivityRowStyles}
        customStyles={CompactTableStyle}
        progressComponent={<Text id="table.loading">Loading...</Text>}
        progressPending={pending}
      />
    </Fragment>
  );
};

export default TopVTubersTable;
