import * as Api from '../../services/ApiService';
import { Fragment, FunctionalComponent, h } from 'preact';
import { Text } from 'preact-i18n';
import { useState, useMemo, useEffect } from 'preact/hooks';
import DataTable, { TableColumn } from 'react-data-table-component';
import QuestionMarkToolTip from '../../components/QuestionMarkToolTip';
import SearchBar from '../../components/SearchBar';
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
    },
    {
      ..._30DaysGrowthColumn(props.dictionary.table),
      right: true,
      sortable: true,
      sortFunction: _30DaysGrowthSort,
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
