import { Fragment, FunctionalComponent, h } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import { Text } from 'preact-i18n';
import DataTable, { TableColumn } from 'react-data-table-component';
import ChannelLinks from '../../../components/ChannelLinks';
import ProfileImage from '../../../components/ProfileImage';
import * as Api from '../../../services/ApiService';
import DefaultDataTableProps from '../../../utils/DefaultDataTableProps';
import '../../../style/index.css';
import ActivityRowStyles from '../../../style/ActivityRowStyles';
import {
  GrowthDisplayData,
  VTuberGrowthDisplayData,
} from '../../../types/TableDisplayData/VTuberGrowthDisplayData';
import { VTuberGrowthData } from '../../../types/ApiData/VTuberGrowthData';
import { GrowthData } from '../../../types/Common/GrowthData';
import { _30DaysGrowthSort, _7DaysGrowthSort } from '../../../utils/GrowthSort';
import { GrowthDisplayDataToString } from '../../../utils/NumberUtils';
import { Dictionary } from '../../../i18n/Dictionary';

export interface GrowingVTubersTableProps {
  dictionary: Dictionary;
}

const GrowingVTubersTable: FunctionalComponent<GrowingVTubersTableProps> = (
  props: GrowingVTubersTableProps
) => {
  const columns: Array<TableColumn<VTuberGrowthDisplayData>> = [
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
      selector: (row: { YouTubeSubscriberCount: number }): number =>
        row.YouTubeSubscriberCount,
      right: true,
    },
    {
      name: <Text id="table._7DaysGrowth">7 Days Growth (Percent)</Text>,
      cell: (row: { _7DaysGrowth: GrowthDisplayData }): string =>
        GrowthDisplayDataToString(row._7DaysGrowth, props.dictionary.table),
      right: true,
    },
  ];

  const [data, setData] = useState<Array<VTuberGrowthDisplayData>>([]);

  const growthDataToDisplayDate = (
    e: GrowthData,
    subCount?: number
  ): GrowthDisplayData => ({
    ...e,
    percentage:
      subCount !== undefined && subCount !== 0 ? e.diff / subCount : 0,
  });

  const dataToDisplayData = (e: VTuberGrowthData): VTuberGrowthDisplayData => ({
    id: e.id,
    profileImg: ProfileImage({ imgUrl: e.imgUrl }),
    name: e.name,
    channelLinks: ChannelLinks({
      YouTubeId: e.YouTube?.id,
      TwitchId: e.Twitch?.id,
    }),
    YouTubeSubscriberCount: e.YouTube.subscriberCount ?? 0,
    _7DaysGrowth: growthDataToDisplayDate(
      e.YouTube._7DaysGrowth,
      e.YouTube.subscriberCount
    ),
    _30DaysGrowth: growthDataToDisplayDate(
      e.YouTube._30DaysGrowth,
      e.YouTube.subscriberCount
    ),
    group: e.group ?? '',
    nationality: e.nationality,
    activity: e.activity,
  });

  const [pending, setPending] = useState(true);

  const getVTubers = async (): Promise<void> => {
    await Api.getGrowingVTubers('10').then((res) => {
      setData(
        res.data.VTubers.map((e) => e)
          .map((e) => dataToDisplayData(e))
          .sort((a, b) => b._7DaysGrowth.percentage - a._7DaysGrowth.percentage)
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
        <Text id="header.growingVTubers">Growing VTubers</Text>
        <Fragment> </Fragment>
        <Text id="header.top10">Top 10</Text>
      </h3>
      <DataTable
        {...DefaultDataTableProps}
        columns={columns}
        data={data}
        conditionalRowStyles={ActivityRowStyles}
        fixedHeader
        progressComponent={<Text id="table.loading">Loading...</Text>}
        progressPending={pending}
      />
    </Fragment>
  );
};

export default GrowingVTubersTable;
