import DropDownList from '../../components/DropDownList';
import FilterWindow from '../../components/FilterWindow';
import { Dictionary } from '../../i18n/Dictionary';
import * as Api from '../../services/ApiService';
import ActivityRowStyles from '../../style/ActivityRowStyles';
import { CompactTableStyle } from '../../style/CompactTableStyle';
import tableStyle from '../../style/DataTableStyle.module.css';
import { GroupColumn } from '../../tableTypes/GroupColumn';
import { NameColumn } from '../../tableTypes/NameColumn';
import { NationalityColumn } from '../../tableTypes/NationalityColumn';
import { PopularVideoColumn } from '../../tableTypes/PopularVideoColumn';
import { RankingColumn } from '../../tableTypes/RankingColumn';
import { DayRangeSortOrder } from '../../types/ApiTypes';
import { GrowthData } from '../../types/Common/GrowthData';
import { YouTubeViewCountGrowthData } from '../../types/Common/YouTube/YouTubeViewCountGrowthData';
import { VTuberViewCountGrowthDisplayDataFilterModel } from '../../types/FilterType/VTuberViewCountGrowthDisplayDataFilterModel';
import { VTuberViewCountGrowthDisplayData } from '../../types/TableDisplayData/VTuberViewCountGrowthDisplayData';
import DefaultDataTableProps from '../../utils/DefaultDataTableProps';
import { filterFunction } from '../../utils/FilterModelHelper';
import { GetCurrentNationalitySpan } from '../../utils/NationalityUtils';
import { GrowthDisplayDataToString } from '../../utils/NumberUtils';
import { GoToPage } from '../../utils/TypeSafeRouting';
import { VTuberViewCountToDisplay } from '../../utils/transform/ViewCountTransform';
import { FunctionalComponent, JSX } from 'preact';
import { Text } from 'preact-i18n';
import { useState, useMemo, useEffect } from 'preact/hooks';
import DataTable, { TableColumn } from 'react-data-table-component';

export interface VTubersViewCountPageProps {
  dictionary: Dictionary;
  modifier: DayRangeSortOrder;
}

const VTubersViewCountPage: FunctionalComponent<VTubersViewCountPageProps> = (
  props: VTubersViewCountPageProps,
) => {
  document.title = `${props.dictionary.header.VTubersViewCount} | ${props.dictionary.header.title}`;

  const columns: Array<TableColumn<VTuberViewCountGrowthDisplayData>> = [
    {
      ...RankingColumn(),
      sortable: true,
      width: '40px',
    },
    {
      ...NameColumn(),
      width: '200px',
    },
    {
      name: (
        <Text id="table.YouTubeTotalViewCount">YouTube Total View Count</Text>
      ),
      selector: (row: { totalViewCount: number }): number => row.totalViewCount,
      compact: true,
      sortable: true,
    },
    {
      name: <Text id="table._7DaysViewCountGrowth">7 Days Growth</Text>,
      cell: (row: { _7DaysGrowth: GrowthData }): string =>
        GrowthDisplayDataToString(row._7DaysGrowth, props.dictionary.table),
      compact: true,
      right: true,
    },
    {
      name: <Text id="table._30DaysViewCountGrowth">30 Days Growth</Text>,
      cell: (row: { _30DaysGrowth: GrowthData }): string =>
        GrowthDisplayDataToString(row._30DaysGrowth, props.dictionary.table),
      compact: true,
      right: true,
    },
    {
      ...PopularVideoColumn(),
      width: '100px',
    },
    {
      ...GroupColumn(),
      width: '150px',
    },
    {
      ...NationalityColumn(),
      width: '125px',
    },
  ];

  // search filter
  const [data, setData] = useState<Array<VTuberViewCountGrowthDisplayData>>([]);
  const [filterModel, setFilterModel] =
    useState<VTuberViewCountGrowthDisplayDataFilterModel>({
      name: null,
      YouTubeId: null,
      TwitchId: null,
      group: null,
      nationality: null,
    });
  const filteredData = data.filter((e) => filterFunction(e, filterModel));

  const searchBarComponent = useMemo(() => {
    const optionValue: Array<{
      option: JSX.Element;
      value: DayRangeSortOrder;
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

    const handleFilterWindow = (
      filterModel: VTuberViewCountGrowthDisplayDataFilterModel,
    ): void => {
      setFilterModel(filterModel);
    };

    const fieldPlaceHolderMappings: Map<string, string> = new Map<
      string,
      string
    >([
      ['name', props.dictionary.table.searchByDisplayName],
      ['YouTubeId', props.dictionary.table.searchByYouTubeId],
      ['TwitchId', props.dictionary.table.searchByTwitchId],
      ['group', props.dictionary.table.searchByGroup],
      ['nationality', props.dictionary.table.searchByNationality],
    ]);

    return (
      <div class={tableStyle.searchBarGroup}>
        <DropDownList
          tipText={props.dictionary.table.sortingMethod}
          value={props.modifier}
          optionValue={optionValue}
          onChange={(e: any) =>
            GoToPage({
              type: 'vtubers-view-count',
              sortOrder: e.target.value,
            })
          }
        />
        <FilterWindow
          filterModel={filterModel}
          fieldPlaceHolderMappings={fieldPlaceHolderMappings}
          openSearchText={props.dictionary.text.openSearch}
          closeSearchText={props.dictionary.text.closeSearch}
          onChange={handleFilterWindow}
        />
      </div>
    );
  }, [filterModel, props.modifier, props.dictionary]);

  const [pending, setPending] = useState(true);

  const _7DaysDescendingSort = <
    T extends { YouTube: YouTubeViewCountGrowthData },
  >(
    rowA: T,
    rowB: T,
  ): number => {
    return rowB.YouTube._7DaysGrowth.diff - rowA.YouTube._7DaysGrowth.diff;
  };

  const _30DaysDescendingSort = <
    T extends { YouTube: YouTubeViewCountGrowthData },
  >(
    rowA: T,
    rowB: T,
  ): number => {
    return rowB.YouTube._30DaysGrowth.diff - rowA.YouTube._30DaysGrowth.diff;
  };

  const GetSortingMethod = (sortBy: DayRangeSortOrder) => {
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
          .sort(GetSortingMethod(props.modifier))
          .map((e, index) => VTuberViewCountToDisplay(e, index + 1)),
      );
      setPending(false);
    });
  };

  useEffect(() => {
    getVTubers();
  }, []);

  return (
    <>
      <h1>
        <Text id="header.VTubersViewCount">VTubers View Count Change</Text>
        {GetCurrentNationalitySpan()}
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
        progressComponent={<Text id="text.loading">Loading...</Text>}
        progressPending={pending}
        subHeader
        subHeaderComponent={searchBarComponent}
      />
    </>
  );
};

export default VTubersViewCountPage;
