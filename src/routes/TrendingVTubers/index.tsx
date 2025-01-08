import { ENFORCE_YOUTUBE_COMPLIANCE } from '../../Config';
import DropDownList from '../../components/DropDownList';
import FilterWindow from '../../components/FilterWindow';
import QuestionMarkToolTip from '../../components/QuestionMarkToolTip';
import { Dictionary } from '../../i18n/Dictionary';
import * as Api from '../../services/ApiService';
import ActivityRowStyles from '../../style/ActivityRowStyles';
import { CompactTableStyle } from '../../style/CompactTableStyle';
import tableStyle from '../../style/DataTableStyle.module.css';
import { GroupColumn } from '../../tableTypes/GroupColumn';
import { NameColumn } from '../../tableTypes/NameColumn';
import { NationalityColumn } from '../../tableTypes/NationalityColumn';
import { PopularVideoColumn } from '../../tableTypes/PopularVideoColumn';
import { PopularityColumn } from '../../tableTypes/PopularityColumn';
import { RankingColumn } from '../../tableTypes/RankingColumn';
import { YouTubeTwitchCountColumn } from '../../tableTypes/YouTubeTwitchCountColumn';
import { TrendingVTuberSortOrder } from '../../types/ApiTypes';
import { VTuberPopularityDisplayDataFilterModel } from '../../types/FilterType/VTuberPopularityDisplayDataFilterModel';
import { VTuberPopularityDisplayData } from '../../types/TableDisplayData/VTuberPopularityDisplayData';
import DefaultDataTableProps from '../../utils/DefaultDataTableProps';
import { filterFunction } from '../../utils/FilterModelHelper';
import { GetCurrentNationalitySpan } from '../../utils/NationalityUtils';
import { GoToPage } from '../../utils/TypeSafeRouting';
import {
  PopularityCountAscendingSort,
  PopularityCountDescendingSort,
} from '../../utils/sort/PopularityCountSort';
import { YouTubeSubscriberCountPlusTwitchFollowerCountAscendingSort } from '../../utils/sort/VTuberSort';
import { VTuberPopularityToDisplay } from '../../utils/transform/PopularityTransform';
import { FunctionalComponent, JSX } from 'preact';
import { Text } from 'preact-i18n';
import { useState, useMemo, useEffect } from 'preact/hooks';
import DataTable, { TableColumn } from 'react-data-table-component';

export interface TrendingVTubersPageProps {
  dictionary: Dictionary;
  modifier: TrendingVTuberSortOrder;
}

const TrendingVTubersPage: FunctionalComponent<TrendingVTubersPageProps> = (
  props: TrendingVTubersPageProps,
) => {
  document.title = `${props.dictionary.header.trendingVTubers} | ${props.dictionary.header.title}`;

  const columns: Array<TableColumn<VTuberPopularityDisplayData>> = [
    {
      ...RankingColumn(),
      sortable: true,
      width: '40px',
    },
    NameColumn(),
    {
      ...PopularityColumn(),
      sortFunction: PopularityCountAscendingSort,
      sortable: true,
      omit: ENFORCE_YOUTUBE_COMPLIANCE,
    },
    {
      ...YouTubeTwitchCountColumn(),
      sortFunction: YouTubeSubscriberCountPlusTwitchFollowerCountAscendingSort,
      sortable: true,
    },
    PopularVideoColumn(),
    GroupColumn(),
    NationalityColumn(),
  ];

  // search filter
  const [data, setData] = useState<Array<VTuberPopularityDisplayData>>([]);
  const [filterModel, setFilterModel] =
    useState<VTuberPopularityDisplayDataFilterModel>({
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
      value: TrendingVTuberSortOrder;
    }> = [
      {
        option: <Text id="table.livestream">Livestream</Text>,
        value: 'livestream',
      },
      {
        option: <Text id="table.video">Video</Text>,
        value: 'video',
      },
      {
        option: <Text id="table.combined">Combined</Text>,
        value: 'combined',
      },
    ];

    const handleFilterWindow = (
      filterModel: VTuberPopularityDisplayDataFilterModel,
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
              type: 'trending-vtubers',
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

  const getVTubers = async (): Promise<void> => {
    await Api.getTrendingVTubers({
      sortBy: props.modifier,
      count: '100',
    }).then((res) => {
      setData(
        res.data.VTubers.map((e) => e)
          .map((e, index) => VTuberPopularityToDisplay(e, index + 1))
          .sort(PopularityCountDescendingSort)
          .map((e, index) => ({ ...e, ranking: index + 1 })),
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
        <Text id="header.trendingVTubers">Trending VTubers</Text>
        {GetCurrentNationalitySpan()}
        <QuestionMarkToolTip
          width="300px"
          fontSize="13px"
          text={<Text id="toolTip.trendingVTubers">tooltip text</Text>}
        />
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

export default TrendingVTubersPage;
