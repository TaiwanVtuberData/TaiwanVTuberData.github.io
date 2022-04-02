import { Fragment, FunctionalComponent, h } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import { Text } from 'preact-i18n';
import DataTable, { TableColumn } from 'react-data-table-component';
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
import { CompactTableStyle } from '../../../style/CompactTableStyle';
import QuestionMarkToolTip from '../../QuestionMarkToolTip';
import { VideoInfo } from '../../../types/Common/VideoInfo';
import { openModal } from '../../../global/modalState';
import ProfileImageLink from '../../ProfileImageLink';

export interface GrowingVTubersTableProps {
  dictionary: Dictionary;
}

const GrowingVTubersTable: FunctionalComponent<GrowingVTubersTableProps> = (
  props: GrowingVTubersTableProps
) => {
  const columns: Array<TableColumn<VTuberGrowthDisplayData>> = [
    {
      name: <Text id="table.displayName">Name</Text>,
      cell: (row: {
        imgUrl?: string;
        name: string;
        YouTubeId?: string;
        TwitchId?: string;
      }): h.JSX.Element => <ProfileImageLink {...row} />,
    },
    {
      name: <Text id="table.YouTubeSubscriberCount">YouTube Subscribers</Text>,
      maxWidth: '250px',
      selector: (row: { YouTubeSubscriberCount: number }): number =>
        row.YouTubeSubscriberCount,
    },
    {
      name: <Text id="table._7DaysGrowth">7 Days Growth (Percent)</Text>,
      maxWidth: '250px',
      cell: (row: { _7DaysGrowth: GrowthDisplayData }): string =>
        GrowthDisplayDataToString(row._7DaysGrowth, props.dictionary.table),
    },
    {
      name: <Text id="table.popularVideo">Popular Video</Text>,
      width: '100px',
      cell: (row: { popularVideo?: VideoInfo }): h.JSX.Element | null =>
        row.popularVideo !== undefined ? (
          <input
            type="button"
            value={props.dictionary.text.showVideo}
            // TypeScript, I'm pretty sure row.popularVideo is defined here
            onClick={(): void => openModal(row.popularVideo as VideoInfo)}
          />
        ) : null,
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
    name: e.name,
    imgUrl: e.imgUrl,
    YouTubeId: e.YouTube.id,
    TwitchId: e.Twitch?.id,
    YouTubeSubscriberCount: e.YouTube.subscriberCount ?? 0,
    _7DaysGrowth: growthDataToDisplayDate(
      e.YouTube._7DaysGrowth,
      e.YouTube.subscriberCount
    ),
    _30DaysGrowth: growthDataToDisplayDate(
      e.YouTube._30DaysGrowth,
      e.YouTube.subscriberCount
    ),
    popularVideo: e.popularVideo,
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
        <QuestionMarkToolTip
          width="300px"
          fontSize="13px"
          text={<Text id="toolTip.growingVTubers">tooltip text</Text>}
        />
      </h3>
      <DataTable
        {...DefaultDataTableProps}
        columns={columns}
        data={data}
        conditionalRowStyles={ActivityRowStyles}
        customStyles={CompactTableStyle}
        fixedHeader
        progressComponent={<Text id="table.loading">Loading...</Text>}
        progressPending={pending}
      />
    </Fragment>
  );
};

export default GrowingVTubersTable;
