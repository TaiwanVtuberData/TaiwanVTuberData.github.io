import { Fragment, FunctionalComponent, h } from 'preact';
import { useEffect, useMemo, useState } from 'preact/hooks';
import { Text } from 'preact-i18n';
import DataTable, { TableColumn } from 'react-data-table-component';
import baseroute from '../../baseroute';
import ChannelLinks from '../../components/ChannelLinks';
import ProfileImage from '../../components/ProfileImage';
import SearchBar from '../../components/SearchBar';
import { Dictionary } from '../../i18n/Dictionary';
import * as Api from '../../services/ApiService';
import DefaultDataTableProps from '../../utils/DefaultDataTableProps';
import { YouTubeSubscriberCountSort } from '../../utils/YouTubeSubscriberCountSort';
import '../../style/index.css';
import tableStyle from '../../style/DataTableStyle.module.css';
import ActivityRowStyles from '../../style/ActivityRowStyles';
import { getISODateString } from '../../utils/DateTimeUtils';
import IsTodayRowStyle from '../../style/IsTodayRowStyles';
import { VTuberGraduateDisplayData } from '../../types/TableDisplayData/VTuberGraduateDisplayData';
import { VTuberGraduateData } from '../../types/ApiData/VTuberGraduateData';
import QuestionMarkToolTip from '../../components/QuestionMarkToolTip';
import { VideoInfo } from '../../types/Common/VideoInfo';
import { openModal } from '../../global/modalState';

export interface GraduateVTubersPageProps {
  dictionary: Dictionary;
}

const GraduateVTubersPage: FunctionalComponent<GraduateVTubersPageProps> = (
  props: GraduateVTubersPageProps
) => {
  document.title = `${props.dictionary.header.graduateVTubers} | ${props.dictionary.header.title}`;
  const columns: Array<TableColumn<VTuberGraduateDisplayData>> = [
    {
      name: <Text id="table.graduateDate">Graduation Date</Text>,
      width: '100px',
      selector: (row: { graduateDate: string }): string => row.graduateDate,
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
      sortable: true,
      sortFunction: YouTubeSubscriberCountSort,
    },
    {
      name: <Text id="table.TwitchFollowerCount">Twitch Followers</Text>,
      selector: (row: {
        hasTwitch: boolean;
        TwitchFollowerCount: number;
      }): number | string => (row.hasTwitch ? row.TwitchFollowerCount : ''),
      right: true,
      sortable: true,
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
    },
    {
      name: <Text id="table.nationality">Nationality</Text>,
      minWidth: '25px',
      maxWidth: '100px',
      selector: (row: { nationality?: string }): string =>
        row.nationality ?? '',
    },
  ];

  // search filter
  const [data, setData] = useState<Array<VTuberGraduateDisplayData>>([]);
  const [filterDate, setFilterDate] = useState<string>('');
  const [filterName, setFilterName] = useState<string>('');
  const [filterGroup, setFilterGroup] = useState<string>('');
  const [resetPaginationToggle, setResetPaginationToggle] =
    useState<boolean>(false);
  const filteredData = data
    .filter(
      (item) =>
        item.graduateDate &&
        item.graduateDate.toLowerCase().includes(filterDate.toLowerCase())
    )
    .filter(
      (item) =>
        item.name && item.name.toLowerCase().includes(filterName.toLowerCase())
    )
    .filter((item) => {
      if (item.group === undefined) return true;
      return item.group.toLowerCase().includes(filterGroup.toLowerCase());
    });

  const searchBarComponent = useMemo(() => {
    const handleClearDate = (): void => {
      if (filterDate) {
        setResetPaginationToggle(!resetPaginationToggle);
        setFilterDate('');
      }
    };

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
          placeholderText={props.dictionary.table.searchByDate}
          onFilter={(e: any): void => setFilterDate(e.target.value)}
          onClear={handleClearDate}
          filterText={filterDate}
        />
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
  }, [
    filterDate,
    filterName,
    filterGroup,
    resetPaginationToggle,
    props.dictionary,
  ]);

  const dataToDisplayData = (
    e: VTuberGraduateData,
    todayDate: string
  ): VTuberGraduateDisplayData => ({
    id: e.id,
    isToday: e.graduateDate === todayDate,
    graduateDate: e.graduateDate,
    profileImg: ProfileImage({ imgUrl: e.imgUrl }),
    name: e.name,
    channelLinks: ChannelLinks({
      YouTubeId: e.YouTube?.id,
      TwitchId: e.Twitch?.id,
    }),
    hasYouTube: e.YouTube !== undefined,
    YouTubeSubscriberCount: e.YouTube?.subscriberCount,
    hasTwitch: e.Twitch !== undefined,
    TwitchFollowerCount: e.Twitch?.followerCount ?? 0,
    group: e.group ?? '',
    nationality: e.nationality,
    activity: e.activity,
  });

  const [pending, setPending] = useState(true);

  const getVTubers = async (): Promise<void> => {
    const todayDate: string = getISODateString(new Date(), 8);
    await Api.getGraduateVTubers('recent').then((res) => {
      setData(
        res.data.VTubers.map((e) => e)
          .sort((a, b) => b.graduateDate.localeCompare(a.graduateDate))
          .map((e) => dataToDisplayData(e, todayDate))
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
        <Text id="header.graduateVTubers">Graduate VTubers</Text>
        <QuestionMarkToolTip
          width="300px"
          fontSize="13px"
          text={<Text id="toolTip.graduateVTubers">tooltip text</Text>}
        />
      </h1>
      <DataTable
        {...DefaultDataTableProps}
        columns={columns}
        data={filteredData}
        // Typescript does not accept concat two array of different types
        conditionalRowStyles={ActivityRowStyles.concat(
          IsTodayRowStyle as Array<any>
        )}
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

export default GraduateVTubersPage;
