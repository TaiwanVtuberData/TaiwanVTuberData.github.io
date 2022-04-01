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
import { VTuberDebutDisplayData } from '../../types/TableDisplayData/VTuberDebutDisplayData';
import { getISODateString } from '../../utils/DateTimeUtils';
import IsTodayRowStyle from '../../style/IsTodayRowStyles';
import { VTuberDebutToDisplay } from '../../types/ApiToDisplayData/DebutTransform';
import QuestionMarkToolTip from '../../components/QuestionMarkToolTip';
import { openModal } from '../../global/modalState';
import { VideoInfo } from '../../types/Common/VideoInfo';
import YouTubeTwitchCount from '../../components/YouTubeTwitchCount';
import ProfileImageLink from '../../components/ProfileImageLink';

export interface DebutVTubersPageProps {
  dictionary: Dictionary;
}

const DebutVTubersPage: FunctionalComponent<DebutVTubersPageProps> = (
  props: DebutVTubersPageProps
) => {
  document.title = `${props.dictionary.header.debutVTubers} | ${props.dictionary.header.title}`;
  const columns: Array<TableColumn<VTuberDebutDisplayData>> = [
    {
      name: <Text id="table.debutDate">Debut Date</Text>,
      width: '100px',
      selector: (row: { debutDate: string }): string => row.debutDate,
      sortable: true,
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
      width: '100px',
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
      maxWidth: '150px',
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
  const [data, setData] = useState<Array<VTuberDebutDisplayData>>([]);
  const [filterDate, setFilterDate] = useState<string>('');
  const [filterName, setFilterName] = useState<string>('');
  const [filterGroup, setFilterGroup] = useState<string>('');
  const [resetPaginationToggle, setResetPaginationToggle] =
    useState<boolean>(false);
  const filteredData = data
    .filter(
      (item) =>
        item.debutDate &&
        item.debutDate.toLowerCase().includes(filterDate.toLowerCase())
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

  const [pending, setPending] = useState(true);

  const getVTubers = async (): Promise<void> => {
    const todayDate: string = getISODateString(new Date(), 8);
    await Api.getDebutVTubers('recent').then((res) => {
      setData(
        res.data.VTubers.map((e) => e)
          .sort((a, b) => b.debutDate.localeCompare(a.debutDate))
          .map((e) => VTuberDebutToDisplay(e, todayDate))
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
        <Text id="header.debutVTubers">Debut VTubers</Text>
        <QuestionMarkToolTip
          width="300px"
          fontSize="13px"
          text={<Text id="toolTip.debutVTubers">tooltip text</Text>}
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

export default DebutVTubersPage;
