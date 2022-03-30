import { Fragment, FunctionalComponent, h } from 'preact';
import { useEffect, useMemo, useState } from 'preact/hooks';
import { Text } from 'preact-i18n';
import DataTable, { TableColumn } from 'react-data-table-component';
import baseroute from '../../baseroute';
import SearchBar from '../../components/SearchBar';
import { Dictionary } from '../../i18n/Dictionary';
import * as Api from '../../services/ApiService';
import { VTuberDisplayData } from '../../types/TableDisplayData/VTuberDisplayData';
import DefaultDataTableProps from '../../utils/DefaultDataTableProps';
import '../../style/index.css';
import tableStyle from '../../style/DataTableStyle.module.css';
import ActivityRowStyles from '../../style/ActivityRowStyles';
import { VTuberBasicToDisplay } from '../../types/ApiToDisplayData/BasicTransfrom';
import { openModal } from '../../global/modalState';
import { VideoInfo } from '../../types/Common/VideoInfo';
import YouTubeTwitchCount from '../../components/YouTubeTwitchCount';
import DropDownList from '../../components/DropDownList';
import {
  SortMethod,
  SubscriberCountDescendingSort,
} from '../../utils/SubscriberCountSort';

export interface AllVTubersPageProps {
  dictionary: Dictionary;
}

const AllVTubersPage: FunctionalComponent<AllVTubersPageProps> = (
  props: AllVTubersPageProps
) => {
  document.title = `${props.dictionary.header.allVTubers} | ${props.dictionary.header.title}`;

  const [sortMethod, setSortMethod] = useState<SortMethod>('YouTube+Twitch');

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
      width: 'auto',
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
      width: 'auto',
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
    })
    .sort(SubscriberCountDescendingSort(sortMethod));

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

    const optionValue: Array<{
      option: h.JSX.Element;
      value: SortMethod;
    }> = [
      {
        option: (
          <Text id="table.YouTubeTwitchCount">
            YouTube Subscribers + Twitch Followers
          </Text>
        ),
        value: 'YouTube+Twitch',
      },
      {
        option: (
          <Text id="table.YouTubeSubscriberCount">YouTube Subscribers</Text>
        ),
        value: 'YouTube',
      },
      {
        option: <Text id="table.TwitchFollowerCount">Twitch Followers</Text>,
        value: 'Twitch',
      },
    ];

    return (
      <div class={tableStyle.searchBarGroup}>
        <DropDownList
          tipText={props.dictionary.table.sortingMethod}
          value={sortMethod}
          optionValue={optionValue}
          onChange={(e: any) => setSortMethod(e.target.value)}
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
  }, [filterName, filterGroup, resetPaginationToggle, props.dictionary]);

  const [pending, setPending] = useState(true);

  const getVTubers = async (): Promise<void> => {
    await Api.getVTubers('all').then((res) => {
      setData(res.data.VTubers.map((e) => VTuberBasicToDisplay(e)));
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
        progressComponent={<Text id="table.loading">Loading...</Text>}
        progressPending={pending}
        subHeader
        subHeaderComponent={searchBarComponent}
      />
    </Fragment>
  );
};

export default AllVTubersPage;
