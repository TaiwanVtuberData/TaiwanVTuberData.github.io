import * as Api from '../../services/ApiService';
import { Fragment, FunctionalComponent, h } from 'preact';
import { Text } from 'preact-i18n';
import { useState, useMemo, useEffect } from 'preact/hooks';
import DataTable, { TableColumn } from 'react-data-table-component';
import QuestionMarkToolTip from '../../components/QuestionMarkToolTip';
import { Dictionary } from '../../i18n/Dictionary';
import ActivityRowStyles from '../../style/ActivityRowStyles';
import IsTodayRowStyle from '../../style/IsTodayRowStyles';
import { GroupColumn } from '../../tableTypes/GroupColumn';
import { NameColumn } from '../../tableTypes/NameColumn';
import { NationalityColumn } from '../../tableTypes/NationalityColumn';
import { PopularVideoColumn } from '../../tableTypes/PopularVideoColumn';
import { YouTubeTwitchCountColumn } from '../../tableTypes/YouTubeTwitchCountColumn';
import { VTuberDebutDisplayData } from '../../types/TableDisplayData/VTuberDebutDisplayData';
import { getISODateString } from '../../utils/DateTimeUtils';
import DefaultDataTableProps from '../../utils/DefaultDataTableProps';
import { GetCurrentNationalitySpan } from '../../utils/NationalityUtils';
import { YouTubeSubscriberCountPlusTwitchFollowerCountAscendingSort } from '../../utils/sort/SubscriberCountSort';
import { VTuberDebutToDisplay } from '../../utils/transform/DebutTransform';
import tableStyle from '../../style/DataTableStyle.module.css';
import { DebutDateColumn } from '../../tableTypes/DebutDateColumn';
import { VTuberDebutDisplayDataFilterModel } from '../../types/FilterType/VTuberDebutDisplayDataFilterModel';
import { filterFunction } from '../../utils/FilterModelHelper';
import FilterWindow from '../../components/FilterWindow';

export interface DebutVTubersPageProps {
  dictionary: Dictionary;
}

const DebutVTubersPage: FunctionalComponent<DebutVTubersPageProps> = (
  props: DebutVTubersPageProps
) => {
  document.title = `${props.dictionary.header.debutVTubers} | ${props.dictionary.header.title}`;
  const columns: Array<TableColumn<VTuberDebutDisplayData>> = [
    {
      ...DebutDateColumn(),
      sortable: true,
    },
    NameColumn(),
    {
      ...YouTubeTwitchCountColumn(),
      sortable: true,
      sortFunction: YouTubeSubscriberCountPlusTwitchFollowerCountAscendingSort,
    },
    PopularVideoColumn(),
    GroupColumn(),
    NationalityColumn(),
  ];

  // search filter
  const [data, setData] = useState<Array<VTuberDebutDisplayData>>([]);
  const [filterModel, setFilterModel] =
    useState<VTuberDebutDisplayDataFilterModel>({
      name: null,
      YouTubeId: null,
      TwitchId: null,
      group: null,
      nationality: null,
      debutDate: null,
    });
  const filteredData = data.filter((e) => filterFunction(e, filterModel));

  const searchBarComponent = useMemo(() => {
    const handleFilterWindow = (
      filterModel: VTuberDebutDisplayDataFilterModel
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
      ['debutDate', props.dictionary.table.searchByDate],
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
    <>
      <h1>
        <Text id="header.debutVTubers">Debut VTubers</Text>
        {GetCurrentNationalitySpan()}
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
        progressComponent={<Text id="text.loading">Loading...</Text>}
        progressPending={pending}
        subHeader
        subHeaderComponent={searchBarComponent}
      />
    </>
  );
};

export default DebutVTubersPage;
