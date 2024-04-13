import * as Api from "../../services/ApiService";
import { FunctionalComponent } from "preact";
import { Text } from "preact-i18n";
import { useState, useMemo, useEffect } from "preact/hooks";
import DataTable, { TableColumn } from "react-data-table-component";
import QuestionMarkToolTip from "../../components/QuestionMarkToolTip";
import { Dictionary } from "../../i18n/Dictionary";
import ActivityRowStyles from "../../style/ActivityRowStyles";
import IsTodayRowStyle from "../../style/IsTodayRowStyles";
import { GroupColumn } from "../../tableTypes/GroupColumn";
import { NameColumn } from "../../tableTypes/NameColumn";
import { NationalityColumn } from "../../tableTypes/NationalityColumn";
import { PopularVideoColumn } from "../../tableTypes/PopularVideoColumn";
import { YouTubeTwitchCountColumn } from "../../tableTypes/YouTubeTwitchCountColumn";
import DefaultDataTableProps from "../../utils/DefaultDataTableProps";
import { GetCurrentNationalitySpan } from "../../utils/NationalityUtils";
import { YouTubeSubscriberCountPlusTwitchFollowerCountAscendingSort } from "../../utils/sort/SubscriberCountSort";
import tableStyle from "../../style/DataTableStyle.module.css";
import { filterFunction } from "../../utils/FilterModelHelper";
import FilterWindow from "../../components/FilterWindow";
import { VTuberAnniversaryDisplayData } from "../../types/TableDisplayData/VTuberAnniversaryDisplayData";
import { VTuberAnniversaryToDisplay } from "../../utils/transform/AnniversaryTransform";
import { VTuberAnniversaryDisplayDataFilterModel } from "../../types/FilterType/VTuberAnniversaryDisplayDataFilterModel";
import { AnniversaryCountColumn } from "../../tableTypes/AnniversaryCountColumn";
import { DebutDateOfTheYearColumn } from "../../tableTypes/DebutDateOfTheYearColumn";
import { DebutDateOfTheYearDescendingCompare } from "../../utils/sort/DebutDateOfTheYearSort";

export interface AnniversaryVTubersPageProps {
  dictionary: Dictionary;
}

const AnniversaryVTubersPage: FunctionalComponent<
  AnniversaryVTubersPageProps
> = (props: AnniversaryVTubersPageProps) => {
  document.title = `${props.dictionary.header.anniversaryVTubers} | ${props.dictionary.header.title}`;
  const columns: Array<TableColumn<VTuberAnniversaryDisplayData>> = [
    {
      ...DebutDateOfTheYearColumn(),
      sortable: true,
      width: "100px",
    },
    {
      ...AnniversaryCountColumn(),
      sortable: true,
      width: "85px",
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
  const [data, setData] = useState<Array<VTuberAnniversaryDisplayData>>([]);
  const [filterModel, setFilterModel] =
    useState<VTuberAnniversaryDisplayDataFilterModel>({
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
      filterModel: VTuberAnniversaryDisplayDataFilterModel,
    ): void => {
      setFilterModel(filterModel);
    };

    const fieldPlaceHolderMappings: Map<string, string> = new Map<
      string,
      string
    >([
      ["name", props.dictionary.table.searchByDisplayName],
      ["YouTubeId", props.dictionary.table.searchByYouTubeId],
      ["TwitchId", props.dictionary.table.searchByTwitchId],
      ["group", props.dictionary.table.searchByGroup],
      ["nationality", props.dictionary.table.searchByNationality],
      ["debutDate", props.dictionary.table.searchByDate],
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
    await Api.getAnniversaryVTubers("recent").then((res) => {
      setData(
        res.data.VTubers.map((e) => e)
          .sort(DebutDateOfTheYearDescendingCompare)
          .map((e) => VTuberAnniversaryToDisplay(e)),
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
        <Text id="header.anniversaryVTubers">Anniversary VTubers</Text>
        {GetCurrentNationalitySpan()}
        <QuestionMarkToolTip
          width="300px"
          fontSize="13px"
          text={<Text id="toolTip.anniversaryVTubers">tooltip text</Text>}
        />
      </h1>
      <DataTable
        {...DefaultDataTableProps}
        columns={columns}
        data={filteredData}
        // Typescript does not accept concat two array of different types
        conditionalRowStyles={ActivityRowStyles.concat(
          IsTodayRowStyle as Array<any>,
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

export default AnniversaryVTubersPage;
