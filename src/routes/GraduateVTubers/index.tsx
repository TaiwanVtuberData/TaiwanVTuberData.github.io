import { Fragment, FunctionalComponent, h } from 'preact';
import { useEffect, useMemo, useState } from 'preact/hooks';
import { Text } from 'preact-i18n';
import DataTable, { TableColumn } from 'react-data-table-component';
import baseroute from '../../baseroute';
import SearchBar from '../../components/SearchBar';
import { Dictionary } from '../../i18n/Dictionary';
import * as Api from '../../services/ApiService';
import DefaultDataTableProps from '../../utils/DefaultDataTableProps';
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
import YouTubeTwitchCount from '../../components/YouTubeTwitchCount';
import ProfileImageLink from '../../components/ProfileImageLink';

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
      selector: (row: { graduateDate: string }): string => row.graduateDate,
      sortable: true,
      width: '100px',
    },
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
      name: (
        <Text id="table.YouTubeTwitchCount">
          YouTube Subscribers + Twitch Followers
        </Text>
      ),
      cell: (row: {
        hasYouTube: boolean;
        YouTubeSubscriberCount?: number;
        hasTwitch: boolean;
        TwitchFollowerCount: number;
      }): h.JSX.Element => <YouTubeTwitchCount {...row} />,
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
      maxWidth: '150px',
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
    name: e.name,
    imgUrl: e.imgUrl,
    hasYouTube: e.YouTube !== undefined,
    YouTubeId: e.YouTube?.id,
    YouTubeSubscriberCount: e.YouTube?.subscriberCount,
    hasTwitch: e.Twitch !== undefined,
    TwitchId: e.Twitch?.id,
    TwitchFollowerCount: e.Twitch?.followerCount ?? 0,
    popularVideo: e.popularVideo,
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
