import { Fragment, FunctionalComponent, h } from 'preact';
import { Text } from 'preact-i18n';
import { useEffect, useMemo, useState } from 'preact/hooks';
import DataTable, { TableColumn } from 'react-data-table-component';
import ChannelLinks from '../../components/ChannelLinks';
import ProfileImage from '../../components/ProfileImage';
import SearchBar from '../../components/SearchBar';
import { Dictionary } from '../../i18n/Dictionary';
import { GroupMemberDisplayData } from '../../types/GroupMemberDisplayData';
import { VTuberData } from '../../types/VTuberData';
import { YouTubeSubscriberCountSort } from '../../utils/YouTubeSubscriberCountSort';
import * as Api from '../../services/ApiService';
import '../../style/index.css';
import '../../style/DataTableStyle.css';

export interface GroupPageProps {
  groupName: string;
  dictionary: Dictionary;
}

const GroupPage: FunctionalComponent<GroupPageProps> = (
  props: GroupPageProps
) => {
  document.title = `${props.groupName} | ${props.dictionary.header.title}`;

  const profileImgColumnWidth: number = 75 as const;
  const columns: Array<TableColumn<GroupMemberDisplayData>> = [
    {
      name: '',
      width: `${profileImgColumnWidth}px`,
      cell: (row: { profileImg: h.JSX.Element | null }): h.JSX.Element | null =>
        row.profileImg,
    },
    {
      name: <Text id="table.displayName">Name</Text>,
      width: `calc(${profileImgColumnWidth}px-30%)`,
      wrap: true,
      selector: (row: { name: string }): string => row.name,
    },
    {
      name: <Text id="table.links">Links</Text>,
      width: `calc(${profileImgColumnWidth}px-15%)`,
      cell: (row: {
        channelLinks: h.JSX.Element | null;
      }): h.JSX.Element | null => row.channelLinks,
    },
    {
      name: <Text id="table.YouTubeSubscriberCount">YouTube Subscribers</Text>,
      width: `calc(${profileImgColumnWidth}px-20%)`,
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
      width: `calc(${profileImgColumnWidth}px-20%)`,
      selector: (row: {
        hasTwitch: boolean;
        TwitchFollowerCount: number;
      }): number | string => (row.hasTwitch ? row.TwitchFollowerCount : ''),
      right: true,
      sortable: true,
    },
    {
      name: <Text id="table.nationality">Nationality</Text>,
      width: `calc(${profileImgColumnWidth}px-15%)`,
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
          onFilter={(e: any) => setFilterName(e.target.value)}
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

  const conditionalRowStyles = [
    {
      when: (row: GroupMemberDisplayData) => row.activity === 'preparing',
      style: {
        backgroundColor: 'rgba(248, 148, 6, 0.9)',
        color: 'white',
        '&:hover': {
          cursor: 'pointer',
        },
      },
    },
    {
      when: (row: GroupMemberDisplayData) => row.activity === 'graduate',
      style: {
        backgroundColor: 'rgba(123, 123, 123, 0.9)',
        color: 'white',
        '&:hover': {
          cursor: 'not-allowed',
        },
      },
    },
  ];

  return (
    <Fragment>
      <h1>
        <Text id="header.group">Group</Text>
        <span class="highlightText"> {props.groupName} </span>
        <Text id="header.memberList">members</Text>
      </h1>
      <DataTable
        columns={columns}
        data={filteredData}
        progressPending={pending}
        progressComponent={props.dictionary.table.loading}
        pagination
        paginationComponentOptions={props.dictionary.table.paginationOptions}
        subHeader
        subHeaderComponent={searchBarComponent}
        conditionalRowStyles={conditionalRowStyles}
        fixedHeader
      />
    </Fragment>
  );
};

export default GroupPage;
