import { Fragment, FunctionalComponent, h } from 'preact';
import { useEffect, useMemo, useState } from 'preact/hooks';
import { Text } from 'preact-i18n';
import DataTable, { TableColumn } from 'react-data-table-component';
import { Dictionary } from '../../i18n/Dictionary';
import * as Api from '../../services/ApiService';
import SearchBar from '../../components/SearchBar';
import DefaultDataTableProps from '../../utils/DefaultDataTableProps';
import '../../style/index.css';
import tableStyle from '../../style/DataTableStyle.module.css';
import { VTuberPopularityDisplayData } from '../../types/TableDisplayData/VTuberPopularityDisplayData';
import ActivityRowStyles from '../../style/ActivityRowStyles';
import { VTuberPopularityToDisplay } from '../../types/ApiToDisplayData/PopularityTransform';
import QuestionMarkToolTip from '../../components/QuestionMarkToolTip';
import { YouTubeSubscriberCountPlusTwitchFollowerCountAscendingSort } from '../../utils/SubscriberCountSort';
import {
  PopularityCountAscendingSort,
  PopularityCountDescendingSort,
} from '../../utils/PopularityCountSort';
import { CompactTableStyle } from '../../style/CompactTableStyle';
import { NameColumn } from '../../tableTypes/NameColumn';
import { YouTubeTwitchCountColumn } from '../../tableTypes/YouTubeTwitchCountColumn';
import { PopularVideoColumn } from '../../tableTypes/PopularVideoColumn';
import { GroupColumn } from '../../tableTypes/GroupColumn';
import { NationalityColumn } from '../../tableTypes/NationalityColumn';
import { PopularityColumn } from '../../tableTypes/PopularityColumn';

export interface TrendingVTubersPageProps {
  dictionary: Dictionary;
}

const TrendingVTubersPage: FunctionalComponent<TrendingVTubersPageProps> = (
  props: TrendingVTubersPageProps
) => {
  document.title = `${props.dictionary.header.trendingVTubers} | ${props.dictionary.header.title}`;

  const columns: Array<TableColumn<VTuberPopularityDisplayData>> = [
    {
      name: '#',
      selector: (row: { ranking: number }): number => row.ranking,
      sortable: true,
      wrap: false,
      width: '30px',
    },
    NameColumn<VTuberPopularityDisplayData>(),
    {
      ...PopularityColumn(),
      sortFunction: PopularityCountAscendingSort,
      sortable: true,
      width: '150px',
    },
    {
      ...YouTubeTwitchCountColumn(),
      sortFunction: YouTubeSubscriberCountPlusTwitchFollowerCountAscendingSort,
      sortable: true,
      width: '150px',
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
      minWidth: '25px',
      maxWidth: '100px',
    },
  ];

  // search filter
  const [data, setData] = useState<Array<VTuberPopularityDisplayData>>([]);
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
    <Fragment>
      <h1>
        <Text id="header.trendingVTubers">Trending VTubers</Text>
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
        progressComponent={<Text id="table.loading">Loading...</Text>}
        progressPending={pending}
        subHeader
        subHeaderComponent={searchBarComponent}
      />
    </Fragment>
  );
};

export default TrendingVTubersPage;
