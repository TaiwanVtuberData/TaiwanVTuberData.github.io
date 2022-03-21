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
import { VTuberData } from '../../types/ApiData/VTuberData';
import { VTuberDisplayData } from '../../types/TableDisplayData/VTuberDisplayData';
import DefaultDataTableProps from '../../utils/DefaultDataTableProps';
import { YouTubeSubscriberCountSort } from '../../utils/YouTubeSubscriberCountSort';
import '../../style/index.css';
import tableStyle from '../../style/DataTableStyle.module.css';
import ActivityRowStyles from '../../style/ActivityRowStyles';

export interface AllVTubersPageProps {
  dictionary: Dictionary;
}

const AllVTubersPage: FunctionalComponent<AllVTubersPageProps> = (
  props: AllVTubersPageProps
) => {
  document.title = `${props.dictionary.header.allVTubers} | ${props.dictionary.header.title}`;
  const columns: Array<TableColumn<VTuberDisplayData>> = [
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
  const [data, setData] = useState<Array<VTuberDisplayData>>([]);
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

  const dataToDisplayData = (e: VTuberData): VTuberDisplayData => ({
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
    group: e.group ?? '',
    nationality: e.nationality,
    activity: e.activity,
  });

  const [pending, setPending] = useState(true);

  const getVTubers = async (): Promise<void> => {
    await Api.getVTubers('all').then((res) => {
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
        <Text id="header.allVTubers">All VTubers</Text>
      </h1>
      <DataTable
        {...DefaultDataTableProps}
        columns={columns}
        data={filteredData}
        conditionalRowStyles={ActivityRowStyles}
        fixedHeader
        pagination
        paginationComponentOptions={props.dictionary.table.paginationOptions}
        progressComponent={props.dictionary.table.loading}
        progressPending={pending}
        subHeader
        subHeaderComponent={searchBarComponent}
      />
    </Fragment>
  );
};

export default AllVTubersPage;
