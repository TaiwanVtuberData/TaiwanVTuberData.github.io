import * as Api from '../../services/ApiService';
import { Fragment, FunctionalComponent, h } from 'preact';
import { Text } from 'preact-i18n';
import { useState, useMemo, useEffect } from 'preact/hooks';
import DataTable, { TableColumn } from 'react-data-table-component';
import QuestionMarkToolTip from '../../components/QuestionMarkToolTip';
import { Dictionary } from '../../i18n/Dictionary';
import { CompactTableStyle } from '../../style/CompactTableStyle';
import { GroupColumn } from '../../tableTypes/GroupColumn';
import { NameColumn } from '../../tableTypes/NameColumn';
import { NationalityColumn } from '../../tableTypes/NationalityColumn';
import { PopularVideoColumn } from '../../tableTypes/PopularVideoColumn';
import { YouTubeSubscriberColumn } from '../../tableTypes/YouTubeSubscriberColumn';
import { _30DaysGrowthColumn } from '../../tableTypes/_30DaysGrowthColumn';
import { _7DaysGrowthColumn } from '../../tableTypes/_7DaysGrowthColumn';
import { VTuberGrowthDisplayData } from '../../types/TableDisplayData/VTuberGrowthDisplayData';
import DefaultDataTableProps from '../../utils/DefaultDataTableProps';
import { GetCurrentNationalitySpan } from '../../utils/NationalityUtils';
import { VTuberGrowthToDisplay } from '../../utils/transform/GrowthTransform';
import tableStyle from '../../style/DataTableStyle.module.css';
import {
  _30DaysGrowthSort,
  _7DaysGrowthSort,
} from '../../utils/sort/GrowthSort';
import ActivityRowStyles from '../../style/ActivityRowStyles';
import { VTuberGrowthDisplayDataFilterModel } from '../../types/FilterType/VTuberGrowthDisplayDataFilterModel';
import { filterFunction } from '../../utils/FilterModelHelper';
import FilterWindow from '../../components/FilterWindow';
import { ENFORCE_YOUTUBE_COMPLIANCE } from '../../Config';

export interface GrowingVTubersPageProps {
  dictionary: Dictionary;
}

const GrowingVTubersPage: FunctionalComponent<GrowingVTubersPageProps> = (
  props: GrowingVTubersPageProps
) => {
  document.title = `${props.dictionary.header.growingVTubers} | ${props.dictionary.header.title}`;

  const columns: Array<TableColumn<VTuberGrowthDisplayData>> = [
    {
      ...NameColumn(),
      width: '200px',
    },
    {
      ...YouTubeSubscriberColumn(),
      sortable: true,
    },
    {
      ..._7DaysGrowthColumn(props.dictionary.table),
      right: true,
      sortable: true,
      sortFunction: _7DaysGrowthSort,
      omit: ENFORCE_YOUTUBE_COMPLIANCE,
    },
    {
      ..._30DaysGrowthColumn(props.dictionary.table),
      right: true,
      sortable: true,
      sortFunction: _30DaysGrowthSort,
      omit: ENFORCE_YOUTUBE_COMPLIANCE,
    },
    {
      ...PopularVideoColumn(),
      width: '100px',
    },
    {
      ...GroupColumn(),
      width: '100px',
    },
    {
      ...NationalityColumn(),
      width: '100px',
    },
  ];

  // search filter
  const [data, setData] = useState<Array<VTuberGrowthDisplayData>>([]);
  const [filterModel, setFilterModel] =
    useState<VTuberGrowthDisplayDataFilterModel>({
      name: null,
      YouTubeId: null,
      TwitchId: null,
      group: null,
      nationality: null,
    });
  const filteredData = data.filter((e) => filterFunction(e, filterModel));

  const searchBarComponent = useMemo(() => {
    const handleFilterWindow = (
      filterModel: VTuberGrowthDisplayDataFilterModel
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
    await Api.getGrowingVTubers('100').then((res) => {
      setData(
        res.data.VTubers.map((e) => e)
          .map((e) => VTuberGrowthToDisplay(e))
          .sort((a, b) => b._7DaysGrowth.percentage - a._7DaysGrowth.percentage)
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
        <Text id="header.growingVTubers">Growing VTubers</Text>
        {GetCurrentNationalitySpan()}
        <QuestionMarkToolTip
          width="300px"
          fontSize="13px"
          text={<Text id="toolTip.growingVTubers">tooltip text</Text>}
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

export default GrowingVTubersPage;
