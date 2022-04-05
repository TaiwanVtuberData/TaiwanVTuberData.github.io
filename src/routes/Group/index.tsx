import { Fragment, FunctionalComponent, h } from 'preact';
import { useEffect, useMemo, useState } from 'preact/hooks';
import { Text } from 'preact-i18n';
import DataTable, { TableColumn } from 'react-data-table-component';
import SearchBar from '../../components/SearchBar';
import { Dictionary } from '../../i18n/Dictionary';
import * as Api from '../../services/ApiService';
import { GroupMemberDisplayData } from '../../types/TableDisplayData/GroupMemberDisplayData';
import { VTuberData } from '../../types/ApiData/VTuberData';
import DefaultDataTableProps from '../../utils/DefaultDataTableProps';
import '../../style/index.css';
import ActivityRowStyles from '../../style/ActivityRowStyles';
import { VideoInfo } from '../../types/Common/VideoInfo';
import { openModal } from '../../global/modalState';
import YouTubeTwitchCount from '../../components/YouTubeTwitchCount';
import ProfileImageLink from '../../components/ProfileImageLink';
import tableStyle from '../../style/DataTableStyle.module.css';

export interface GroupPageProps {
  groupName: string;
  dictionary: Dictionary;
}

const GroupPage: FunctionalComponent<GroupPageProps> = (
  props: GroupPageProps
) => {
  document.title = `${props.groupName} | ${props.dictionary.header.title}`;

  const columns: Array<TableColumn<GroupMemberDisplayData>> = [
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
      name: <Text id="table.nationality">Nationality</Text>,
      selector: (row: { nationality?: string }): string =>
        row.nationality ?? '',
      minWidth: '25px',
      maxWidth: '100px',
    },
  ];

  // search filter
  const [data, setData] = useState<Array<GroupMemberDisplayData>>([]);
  const [filterName, setFilterName] = useState<string>('');
  const [resetPaginationToggle, setResetPaginationToggle] =
    useState<boolean>(false);
  const filteredData = data.filter(
    (item) =>
      item.name && item.name.toLowerCase().includes(filterName.toLowerCase())
  );

  const searchBarComponent = useMemo(() => {
    const handleClearName = (): void => {
      if (filterName) {
        setResetPaginationToggle(!resetPaginationToggle);
        setFilterName('');
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
      </div>
    );
  }, [filterName, resetPaginationToggle, props.dictionary]);

  const dataToDisplayData = (e: VTuberData): GroupMemberDisplayData => ({
    id: e.id,
    name: e.name,
    imgUrl: e.imgUrl,
    hasYouTube: e.YouTube !== undefined,
    YouTubeId: e.YouTube?.id,
    YouTubeSubscriberCount: e.YouTube?.subscriberCount,
    hasTwitch: e.Twitch !== undefined,
    TwitchId: e.Twitch?.id,
    TwitchFollowerCount: e.Twitch?.followerCount ?? 0,
    popularVideo: e.popularVideo,
    nationality: e.nationality,
    activity: e.activity,
  });

  const [pending, setPending] = useState(true);

  const getVTubers = async (): Promise<void> => {
    await Api.getGroupVTubers(props.groupName).then((res) => {
      setData(res.data.VTubers.map((e) => dataToDisplayData(e)));
      setPending(false);
    });
  };

  useEffect(() => {
    getVTubers();
  }, []);

  return (
    <Fragment>
      <h1>
        <Text id="header.group">Group</Text>
        <span class="highlightText"> {props.groupName} </span>
        <Text id="header.memberList">members</Text>
      </h1>
      <DataTable
        {...DefaultDataTableProps}
        columns={columns}
        data={filteredData}
        fixedHeader
        conditionalRowStyles={ActivityRowStyles}
        progressComponent={<Text id="table.loading">Loading...</Text>}
        progressPending={pending}
        subHeader
        subHeaderComponent={searchBarComponent}
      />
    </Fragment>
  );
};

export default GroupPage;
