import * as Api from '../../services/ApiService';
import { Fragment, FunctionalComponent, h } from 'preact';
import { Text } from 'preact-i18n';
import { useState, useMemo, useEffect } from 'preact/hooks';
import DataTable, { TableColumn } from 'react-data-table-component';
import { Dictionary } from '../../i18n/Dictionary';
import { CompactTableStyle } from '../../style/CompactTableStyle';
import { GroupColumn } from '../../tableTypes/GroupColumn';
import { NameColumn } from '../../tableTypes/NameColumn';
import { NationalityColumn } from '../../tableTypes/NationalityColumn';
import { PopularityColumn } from '../../tableTypes/PopularityColumn';
import { PopularVideoColumn } from '../../tableTypes/PopularVideoColumn';
import { YouTubeTwitchCountColumn } from '../../tableTypes/YouTubeTwitchCountColumn';
import { VTuberPopularityDisplayData } from '../../types/TableDisplayData/VTuberPopularityDisplayData';
import DefaultDataTableProps from '../../utils/DefaultDataTableProps';
import { GetCurrentNationalitySpan } from '../../utils/NationalityUtils';
import {
  PopularityCountAscendingSort,
  PopularityCountDescendingSort,
} from '../../utils/sort/PopularityCountSort';
import { YouTubeSubscriberCountPlusTwitchFollowerCountAscendingSort } from '../../utils/sort/SubscriberCountSort';
import { VTuberPopularityToDisplay } from '../../utils/transform/PopularityTransform';
import QuestionMarkToolTip from '../../components/QuestionMarkToolTip';
import tableStyle from '../../style/DataTableStyle.module.css';
import { RankingColumn } from '../../tableTypes/RankingColumn';
import ActivityRowStyles from '../../style/ActivityRowStyles';
import FilterWindow from '../../components/FilterWindow';
import { VTuberPopularityDisplayDataFilterModel } from '../../types/TableDisplayData/VTuberPopularityDisplayDataFilterModel';
import { filterFunction } from '../../utils/FilterModelHelper';

export interface TrendingVTubersPageProps {
  dictionary: Dictionary;
}

const TrendingVTubersPage: FunctionalComponent<TrendingVTubersPageProps> = (
  props: TrendingVTubersPageProps
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
    const handleFilterWindow = (
      filterModel: VTuberPopularityDisplayDataFilterModel
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
        <FilterWindow
          filterModel={filterModel}
          fieldPlaceHolderMappings={fieldPlaceHolderMappings}
          openSearchText={props.dictionary.text.openSearch}
          closeSearchText={props.dictionary.text.closeSearch}
          onChange={handleFilterWindow}
        />
      </div>
    );
  }, [filterModel, props.dictionary]);

  const [pending, setPending] = useState(true);

  const getVTubers = async (): Promise<void> => {
    await Api.getTrendingVTubers('100').then((res) => {
      setData(
        res.data.VTubers.map((e) => e)
          .map((e, index) => VTuberPopularityToDisplay(e, index + 1))
          .sort(PopularityCountDescendingSort)
          .map((e, index) => ({ ...e, ranking: index + 1 }))
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
