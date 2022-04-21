import { Fragment, FunctionalComponent, h } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import { Text } from 'preact-i18n';
import DataTable, { TableColumn } from 'react-data-table-component';
import * as Api from '../../../services/ApiService';
import DefaultDataTableProps from '../../../utils/DefaultDataTableProps';
import '../../../style/index.css';
import ActivityRowStyles from '../../../style/ActivityRowStyles';
import { VTuberPopularityDisplayData } from '../../../types/TableDisplayData/VTuberPopularityDisplayData';
import { VTuberPopularityToDisplay } from '../../../types/ApiToDisplayData/PopularityTransform';
import { CompactTableStyle } from '../../../style/CompactTableStyle';
import QuestionMarkToolTip from '../../QuestionMarkToolTip';
import { VideoInfo } from '../../../types/Common/VideoInfo';
import { openModal } from '../../../global/modalState';
import { Dictionary } from '../../../i18n/Dictionary';
import { PopularityCountDescendingSort } from '../../../utils/PopularityCountSort';
import YouTubeTwitchCount from '../../YouTubeTwitchCount';
import ProfileImageLink from '../../ProfileImageLink';

export interface TrendingVTubersTableProps {
  dictionary: Dictionary;
}

const TrendingVTubersTable: FunctionalComponent<TrendingVTubersTableProps> = (
  props: TrendingVTubersTableProps
) => {
  const columns: Array<TableColumn<VTuberPopularityDisplayData>> = [
    {
      name: '#',
      selector: (row: { ranking: number }): number => row.ranking,
      wrap: false,
      width: '30px',
    },
    {
      name: <Text id="table.displayName">Name</Text>,
      cell: (row: {
        id: string;
        imgUrl?: string;
        name: string;
        YouTubeId?: string;
        TwitchId?: string;
      }): h.JSX.Element => (
        <ProfileImageLink
          VTuberId={row.id}
          imgUrl={row.imgUrl}
          name={row.name}
          YouTubeId={row.YouTubeId}
          TwitchId={row.TwitchId}
        />
      ),
    },
    {
      name: <Text id="table.popularity">Popularity</Text>,
      cell: (row: {
        hasYouTube: boolean;
        YouTubePopularity: number;
        hasTwitch: boolean;
        TwitchPopularity: number;
      }): h.JSX.Element => (
        <YouTubeTwitchCount
          hasYouTube={row.hasYouTube}
          YouTubeSubscriberCount={row.YouTubePopularity}
          hasTwitch={row.hasTwitch}
          TwitchFollowerCount={row.TwitchPopularity}
        />
      ),
      maxWidth: '250px',
    },
    {
      name: <Text id="table.popularVideo">Popular Video</Text>,
      cell: (row: { popularVideo?: VideoInfo }): h.JSX.Element | null =>
        row.popularVideo !== undefined ? (
          <input
            type="button"
            value={props.dictionary.text.showVideo}
            // TypeScript, I'm pretty sure row.popularVideo is defined here
            onClick={(): void => openModal(row.popularVideo as VideoInfo)}
          />
        ) : null,
      width: '100px',
    },
  ];

  const [data, setData] = useState<Array<VTuberPopularityDisplayData>>([]);

  const [pending, setPending] = useState(true);

  const getVTubers = async (): Promise<void> => {
    await Api.getTrendingVTubers('10').then((res) => {
      setData(
        res.data.VTubers.map((e) => e)
          .map((e, index) => VTuberPopularityToDisplay(e, index + 1))
          .sort(PopularityCountDescendingSort)
          .map((e, index) => ({ ...e, ranking: index + 1 }))
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
        <Text id="header.trendingVTubers">Trending VTubers</Text>
        {/* Yes. Adding a space between two texts require a Fragment */}
        <Fragment> </Fragment>
        <Text id="header.top10">Top 10</Text>
        <QuestionMarkToolTip
          width="300px"
          fontSize="13px"
          text={<Text id="toolTip.trendingVTubers">tooltip text</Text>}
        />
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

export default TrendingVTubersTable;
