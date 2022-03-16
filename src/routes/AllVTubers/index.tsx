import { Fragment, FunctionalComponent, h } from 'preact';
import DataTable, { TableColumn } from 'react-data-table-component';
import { useEffect, useMemo, useState } from 'preact/hooks';
import * as Api from '../../services/ApiService';
import ProfileImage from '../../components/ProfileImage';
import ChannelLinks from '../../components/ChannelLinks';
import { VTuberData } from '../../types/VTuberData';
import { DataTablePaginationComponent } from '../../components/DataTablePaginationComponentOptions';
import { YouTubeSubscriberCountSort } from '../../utils/YouTubeSubscriberCountSort';
import { VTuberDisplayData } from '../../types/VTuberDisplayData';
import { Text, translate } from 'preact-i18n';
import SearchBar from '../../components/SearchBar';
import { Dictionary } from '../../i18n/Dictionary';

export interface AllVTubersPageProps {
  dictionary: Dictionary;
}

const AllVTubersPage: FunctionalComponent<AllVTubersPageProps> = (
  props: AllVTubersPageProps
) => {
  // translation won't switch on it's own, so pass a locale to trigger useEffect
  const columns: Array<TableColumn<VTuberDisplayData>> = [
    {
      name: '',
      cell: (row: { profileImg: h.JSX.Element | null }): h.JSX.Element | null =>
        row.profileImg,
    },
    {
      name: <Text id="table.displayName">Name</Text>,
      selector: (row: { name: string }): string => row.name,
    },
    {
      name: <Text id="table.links">Links</Text>,
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
      sortable: true,
      sortFunction: YouTubeSubscriberCountSort,
    },
    {
      name: <Text id="table.TwitchFollowerCount">Twitch Followers</Text>,
      selector: (row: {
        hasTwitch: boolean;
        TwitchFollowerCount: number;
      }): number | string => (row.hasTwitch ? row.TwitchFollowerCount : ''),
      sortable: true,
    },
    {
      name: <Text id="table.group">Group</Text>,
      selector: (row: { group?: string }): string => row.group ?? '',
    },
    {
      name: <Text id="table.nationality">Nationality</Text>,
      selector: (row: { nationality?: string }): string =>
        row.nationality ?? '',
    },
  ];

  // search filter
  const [data, setData] = useState<Array<VTuberDisplayData>>([]);
  const [filterName, setFilterName] = useState<string>('');
  const [resetPaginationToggle, setResetPaginationToggle] =
    useState<boolean>(false);
  const filteredData = data.filter(
    (item) =>
      item.name && item.name.toLowerCase().includes(filterName.toLowerCase())
  );

  const searchBarComponent = useMemo(() => {
    const handleClear = (): void => {
      if (filterName) {
        setResetPaginationToggle(!resetPaginationToggle);
        setFilterName('');
      }
    };

    return (
      <Fragment>
        <SearchBar
          placeholderText={translate(
            'table.searchByDisplayName',
            '',
            props.dictionary
          )}
          onFilter={(e: any) => setFilterName(e.target.value)}
          onClear={handleClear}
          filterText={filterName}
        />
      </Fragment>
    );
  }, [filterName, resetPaginationToggle, props.dictionary]);

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
    group: e.group,
    nationality: e.nationality,
  });

  const [pending, setPending] = useState(true);

  const getVTubers = async (): Promise<void> => {
    await Api.getVTubers().then((res) => {
      setData(res.data.VTubers.map((e) => dataToDisplayData(e)));
      setPending(false);
    });
  };

  useEffect(() => {
    getVTubers();
  }, []);

  return (
    <DataTable
      columns={columns}
      data={filteredData}
      progressPending={pending}
      progressComponent={'載入中'}
      pagination
      paginationComponentOptions={DataTablePaginationComponent}
      subHeader
      subHeaderComponent={searchBarComponent}
    />
  );
};

export default AllVTubersPage;
