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
import { GrowthData } from '../../types/Common/GrowthData';
import { GrowthDisplayDataToString } from '../../utils/NumberUtils';
import { VideoInfo } from '../../types/Common/VideoInfo';
import { openModal } from '../../global/modalState';
import ProfileImageLink from '../../components/ProfileImageLink';
import { VTuberViewCountGrowthData } from '../../types/ApiData/VTuberViewCountChangeData';
import { VTuberViewCountGrowthDisplayData } from '../../types/TableDisplayData/VTuberViewCountGrowthDisplayData';
import { CompactTableStyle } from '../../style/CompactTableStyle';
import DropDownList from '../../components/DropDownList';
import { YouTubeViewCountGrowthData } from '../../types/ApiData/YouTubeViewCountGrowthData';

export interface VTubersViewCountPageProps {
  dictionary: Dictionary;
  modifier: Api.SortOrder;
}

const VTubersViewCountPage: FunctionalComponent<VTubersViewCountPageProps> = (
  props: VTubersViewCountPageProps
) => {
  document.title = `${props.dictionary.header.VTubersViewCount} | ${props.dictionary.header.title}`;

  const columns: Array<TableColumn<VTuberViewCountGrowthDisplayData>> = [
    {
      name: '#',
      compact: true,
      width: '30px',
      wrap: false,
      selector: (row: { ranking: number }): number => row.ranking,
      sortable: true,
    },
    {
      name: <Text id="table.displayName">Name</Text>,
      compact: true,
      minWidth: '25%',
      cell: (row: {
        imgUrl?: string;
        name: string;
        YouTubeId?: string;
        TwitchId?: string;
      }): h.JSX.Element => <ProfileImageLink {...row} />,
    },
    {
      name: (
        <Text id="table.YouTubeTotalViewCount">YouTube Total View Count</Text>
      ),
      compact: true,
      right: true,
      selector: (row: { totalViewCount: number }): number => row.totalViewCount,
      sortable: true,
    },
    {
      name: <Text id="table._7DaysViewCountGrowth">7 Days Growth</Text>,
      compact: true,
      right: true,
      cell: (row: { _7DaysGrowth: GrowthData }): string =>
        GrowthDisplayDataToString(row._7DaysGrowth, props.dictionary.table),
    },
    {
      name: <Text id="table._30DaysViewCountGrowth">30 Days Growth</Text>,
      compact: true,
      right: true,
      cell: (row: { _30DaysGrowth: GrowthData }): string =>
        GrowthDisplayDataToString(row._30DaysGrowth, props.dictionary.table),
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
      minWidth: '40px',
      maxWidth: '100px',
      selector: (row: { nationality?: string }): string =>
        row.nationality ?? '',
    },
  ];

  // search filter
  const [data, setData] = useState<Array<VTuberViewCountGrowthDisplayData>>([]);
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

    const optionValue: Array<{
      option: h.JSX.Element;
      value: Api.SortOrder;
    }> = [
      {
        option: <Text id="table._7DaysViewCountGrowth">7 Days Growth</Text>,
        value: '7-days',
      },
      {
        option: <Text id="table._30DaysViewCountGrowth">30 Days Growth</Text>,
        value: '30-days',
      },
    ];

    return (
      <div class={tableStyle.searchBarGroup}>
        <DropDownList
          tipText={props.dictionary.table.sortingMethod}
          value={props.modifier}
          optionValue={optionValue}
          onChange={(e: any) => {
            window.location.href = `${baseroute}/vtubers-view-count/${e.target.value}`;
          }}
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
    filterName,
    filterGroup,
    resetPaginationToggle,
    props.modifier,
    props.dictionary,
  ]);

  const dataToDisplayData = (
    e: VTuberViewCountGrowthData,
    ranking: number
  ): VTuberViewCountGrowthDisplayData => ({
    id: e.id,
    name: e.name,
    imgUrl: e.imgUrl,
    YouTubeId: e.YouTube.id,
    TwitchId: e.Twitch?.id,
    totalViewCount: e.YouTube.totalViewCount,
    _7DaysGrowth: e.YouTube._7DaysGrowth,
    _30DaysGrowth: e.YouTube._30DaysGrowth,
    popularVideo: e.popularVideo,
    group: e.group ?? '',
    nationality: e.nationality,
    activity: e.activity,
    ranking: ranking,
  });

  const [pending, setPending] = useState(true);

  const _7DaysDescendingSort = <
    T extends { YouTube: YouTubeViewCountGrowthData }
  >(
    rowA: T,
    rowB: T
  ): number => {
    return rowB.YouTube._7DaysGrowth.diff - rowA.YouTube._7DaysGrowth.diff;
  };

  const _30DaysDescendingSort = <
    T extends { YouTube: YouTubeViewCountGrowthData }
  >(
    rowA: T,
    rowB: T
  ): number => {
    return rowB.YouTube._30DaysGrowth.diff - rowA.YouTube._30DaysGrowth.diff;
  };

  const GetSortingMethod = (sortBy: Api.SortOrder) => {
    switch (sortBy) {
      case '7-days':
        return _7DaysDescendingSort;
      case '30-days':
        return _30DaysDescendingSort;
    }
  };

  const getVTubers = async (): Promise<void> => {
    await Api.getVTubersViewCountChange({
      sortBy: props.modifier,
      count: '100',
    }).then((res) => {
      setData(
        res.data.VTubers.map((e) => e)
          .map((e) => e)
          .sort(GetSortingMethod(props.modifier))
          .map((e, index) => dataToDisplayData(e, index + 1))
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
        <Text id="header.VTubersViewCount">VTubers View Count Change</Text>
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

export default VTubersViewCountPage;
