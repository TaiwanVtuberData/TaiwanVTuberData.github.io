import { Fragment, FunctionalComponent, h } from 'preact';
import { useEffect, useMemo, useState } from 'preact/hooks';
import { Text } from 'preact-i18n';
import DataTable, { TableColumn } from 'react-data-table-component';
import SearchBar from '../../components/SearchBar';
import { Dictionary } from '../../i18n/Dictionary';
import * as Api from '../../services/ApiService';
import { SortOrder } from '../../types/ApiTypes';
import DefaultDataTableProps from '../../utils/DefaultDataTableProps';
import '../../style/index.css';
import tableStyle from '../../style/DataTableStyle.module.css';
import ActivityRowStyles from '../../style/ActivityRowStyles';
import { GrowthData } from '../../types/Common/GrowthData';
import { GrowthDisplayDataToString } from '../../utils/NumberUtils';
import { VTuberViewCountGrowthData } from '../../types/ApiData/VTuberViewCountChangeData';
import { VTuberViewCountGrowthDisplayData } from '../../types/TableDisplayData/VTuberViewCountGrowthDisplayData';
import { CompactTableStyle } from '../../style/CompactTableStyle';
import DropDownList from '../../components/DropDownList';
import { YouTubeViewCountGrowthData } from '../../types/ApiData/YouTubeViewCountGrowthData';
import { NameColumn } from '../../tableTypes/NameColumn';
import { PopularVideoColumn } from '../../tableTypes/PopularVideoColumn';
import { GroupColumn } from '../../tableTypes/GroupColumn';
import { NationalityColumn } from '../../tableTypes/NationalityColumn';
import { GoToPage } from '../../utils/TypeSafeRouting';

export interface VTubersViewCountPageProps {
  dictionary: Dictionary;
  modifier: SortOrder;
}

const VTubersViewCountPage: FunctionalComponent<VTubersViewCountPageProps> = (
  props: VTubersViewCountPageProps
) => {
  document.title = `${props.dictionary.header.VTubersViewCount} | ${props.dictionary.header.title}`;

  const columns: Array<TableColumn<VTuberViewCountGrowthDisplayData>> = [
    {
      name: '#',
      selector: (row: { ranking: number }): number => row.ranking,
      compact: true,
      sortable: true,
      wrap: false,
      width: '30px',
    },
    {
      ...NameColumn<VTuberViewCountGrowthDisplayData>(),
      compact: true,
    },
    {
      name: (
        <Text id="table.YouTubeTotalViewCount">YouTube Total View Count</Text>
      ),
      selector: (row: { totalViewCount: number }): number => row.totalViewCount,
      compact: true,
      right: true,
      sortable: true,
    },
    {
      name: <Text id="table._7DaysViewCountGrowth">7 Days Growth</Text>,
      cell: (row: { _7DaysGrowth: GrowthData }): string =>
        GrowthDisplayDataToString(row._7DaysGrowth, props.dictionary.table),
      compact: true,
      right: true,
      width: '100px',
      maxWidth: '200px',
    },
    {
      name: <Text id="table._30DaysViewCountGrowth">30 Days Growth</Text>,
      cell: (row: { _30DaysGrowth: GrowthData }): string =>
        GrowthDisplayDataToString(row._30DaysGrowth, props.dictionary.table),
      compact: true,
      right: true,
      width: '100px',
      maxWidth: '200px',
    },
    {
      ...PopularVideoColumn(),
      width: '100px',
    },
    {
      ...GroupColumn(),
      maxWidth: '100px',
    },
    {
      ...NationalityColumn(),
      minWidth: '40px',
      maxWidth: '100px',
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
      if (filterGroup === '') return true;
      if (item.group === undefined) return false;
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
      value: SortOrder;
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
          onChange={(e: any) =>
            GoToPage({
              type: 'vtubers-view-count',
              viewCountSortOrder: e.target.value,
            })
          }
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

  const GetSortingMethod = (sortBy: SortOrder) => {
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
