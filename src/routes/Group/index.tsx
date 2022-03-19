import { Fragment, FunctionalComponent, h } from 'preact';
import { useEffect, useMemo, useState } from 'preact/hooks';
import { Text } from 'preact-i18n';
import DataTable, { TableColumn } from 'react-data-table-component';
import ChannelLinks from '../../components/ChannelLinks';
import ProfileImage from '../../components/ProfileImage';
import SearchBar from '../../components/SearchBar';
import { Dictionary } from '../../i18n/Dictionary';
import * as Api from '../../services/ApiService';
import { GroupMemberDisplayData } from '../../types/GroupMemberDisplayData';
import { VTuberData } from '../../types/VTuberData';
import DefaultDataTableProps from '../../utils/DefaultDataTableProps';
import { YouTubeSubscriberCountSort } from '../../utils/YouTubeSubscriberCountSort';
import '../../style/index.css';
import '../../style/DataTableStyle.module.css';
import ActivityRowStyles from '../../style/ActivityRowStyles';

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
      name: <Text id="table.nationality">Nationality</Text>,
      minWidth: '25px',
      maxWidth: '100px',
      selector: (row: { nationality?: string }): string =>
        row.nationality ?? '',
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
      <Fragment>
        <SearchBar
          placeholderText={props.dictionary.table.searchByDisplayName}
          onFilter={(e: any): void => setFilterName(e.target.value)}
          onClear={handleClearName}
          filterText={filterName}
        />
      </Fragment>
    );
  }, [filterName, resetPaginationToggle, props.dictionary]);

  const dataToDisplayData = (e: VTuberData): GroupMemberDisplayData => ({
    id: e.id,
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
        progressComponent={props.dictionary.table.loading}
        progressPending={pending}
        subHeader
        subHeaderComponent={searchBarComponent}
      />
    </Fragment>
  );
};

export default GroupPage;
