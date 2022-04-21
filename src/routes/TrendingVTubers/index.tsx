import { Fragment, FunctionalComponent, h } from 'preact';
import { useEffect, useMemo, useState } from 'preact/hooks';
import { Text } from 'preact-i18n';
import DataTable, { TableColumn } from 'react-data-table-component';
import baseroute from '../../baseroute';
import { Dictionary } from '../../i18n/Dictionary';
import * as Api from '../../services/ApiService';
import SearchBar from '../../components/SearchBar';
import DefaultDataTableProps from '../../utils/DefaultDataTableProps';
import '../../style/index.css';
import tableStyle from '../../style/DataTableStyle.module.css';
import { VTuberPopularityDisplayData } from '../../types/TableDisplayData/VTuberPopularityDisplayData';
import ActivityRowStyles from '../../style/ActivityRowStyles';
import { VTuberPopularityToDisplay } from '../../types/ApiToDisplayData/PopularityTransform';
import QuestionMarkToolTip from '../../components/QuestionMarkToolTip';
import { openModal } from '../../global/modalState';
import { VideoInfo } from '../../types/Common/VideoInfo';
import YouTubeTwitchCount from '../../components/YouTubeTwitchCount';
import { YouTubeSubscriberCountPlusTwitchFollowerCountAscendingSort } from '../../utils/SubscriberCountSort';
import {
  PopularityCountAscendingSort,
  PopularityCountDescendingSort,
} from '../../utils/PopularityCountSort';
import ProfileImageLink from '../../components/ProfileImageLink';
import { CompactTableStyle } from '../../style/CompactTableStyle';

export interface TrendingVTubersPageProps {
  dictionary: Dictionary;
}

const TrendingVTubersPage: FunctionalComponent<TrendingVTubersPageProps> = (
  props: TrendingVTubersPageProps
) => {
  document.title = `${props.dictionary.header.trendingVTubers} | ${props.dictionary.header.title}`;

  const columns: Array<TableColumn<VTuberPopularityDisplayData>> = [
    {
      name: '#',
      selector: (row: { ranking: number }): number => row.ranking,
      sortable: true,
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
      sortFunction: PopularityCountAscendingSort,
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
      sortable: true,
      width: '150px',
    },
    {
      name: (
        <Text id="table.YouTubeTwitchCount">
          YouTube Subscribers + Twitch Followers
        </Text>
      ),
      sortFunction: YouTubeSubscriberCountPlusTwitchFollowerCountAscendingSort,
      cell: (row: {
        hasYouTube: boolean;
        YouTubeSubscriberCount?: number;
        hasTwitch: boolean;
        TwitchFollowerCount: number;
      }): h.JSX.Element => <YouTubeTwitchCount {...row} />,
      sortable: true,
      width: '150px',
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
    {
      name: <Text id="table.group">Group</Text>,
      cell: (row: { group: string }): h.JSX.Element | null =>
        row.group !== '' ? (
          <a
            class={tableStyle.groupLink}
            href={`${baseroute}/group/${row.group}`}
          >
            {row.group}
          </a>
        ) : null,
      maxWidth: '100px',
    },
    {
      name: <Text id="table.nationality">Nationality</Text>,
      selector: (row: { nationality?: string }): string =>
        row.nationality ?? '',
      minWidth: '25px',
      maxWidth: '100px',
    },
  ];

  // search filter
  const [data, setData] = useState<Array<VTuberPopularityDisplayData>>([]);
  const [filterName, setFilterName] = useState<string>('');
  const [filterGroup, setFilterGroup] = useState<string>('');
  const [resetPaginationToggle, setResetPaginationToggle] =
    useState<boolean>(false);
  const filteredData = data
    .filter(
      (item) =>
        item.name && item.name.toLowerCase().includes(filterName.toLowerCase())
    )
    .filter((item) => {
      if (item.group === undefined) return true;
      return item.group.toLowerCase().includes(filterGroup.toLowerCase());
    });

  const searchBarComponent = useMemo(() => {
    const handleClearName = (): void => {
      if (filterName) {
        setResetPaginationToggle(!resetPaginationToggle);
        setFilterName('');
      }
    };

    const handleClearGroup = (): void => {
      if (filterGroup) {
        setResetPaginationToggle(!resetPaginationToggle);
        setFilterGroup('');
      }
    };

    return (
      <div class={tableStyle.searchBarGroup}>
        <SearchBar
          placeholderText={props.dictionary.table.searchByDisplayName}
          onFilter={(e: any): void => setFilterName(e.target.value)}
          onClear={handleClearName}
          filterText={filterName}
        />
        <SearchBar
          placeholderText={props.dictionary.table.searchByGroup}
          onFilter={(e: any): void => setFilterGroup(e.target.value)}
          onClear={handleClearGroup}
          filterText={filterGroup}
        />
      </div>
    );
  }, [filterName, filterGroup, resetPaginationToggle, props.dictionary]);

  const [pending, setPending] = useState(true);

  const getVTubers = async (): Promise<void> => {
    await Api.getTrendingVTubers('100').then((res) => {
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
      <h1>
        <Text id="header.trendingVTubers">Trending VTubers</Text>
        <QuestionMarkToolTip
          width="300px"
          fontSize="13px"
          text={<Text id="toolTip.trendingVTubers">tooltip text</Text>}
        />
      </h1>
      <DataTable
        {...DefaultDataTableProps}
        columns={columns}
        data={filteredData}
        conditionalRowStyles={ActivityRowStyles}
        customStyles={CompactTableStyle}
        fixedHeader
        pagination
        paginationComponentOptions={props.dictionary.table.paginationOptions}
        progressComponent={<Text id="table.loading">Loading...</Text>}
        progressPending={pending}
        subHeader
        subHeaderComponent={searchBarComponent}
      />
    </Fragment>
  );
};

export default TrendingVTubersPage;
