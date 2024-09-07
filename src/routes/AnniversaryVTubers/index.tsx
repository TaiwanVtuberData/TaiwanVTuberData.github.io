import * as Api from "../../services/ApiService";
import { FunctionalComponent, JSX } from "preact";
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
import { YouTubeSubscriberCountPlusTwitchFollowerCountAscendingSort } from "../../utils/sort/VTuberSort";
import tableStyle from "../../style/DataTableStyle.module.css";
import { filterFunction } from "../../utils/FilterModelHelper";
import FilterWindow from "../../components/FilterWindow";
import { VTuberAnniversaryDisplayData } from "../../types/TableDisplayData/VTuberAnniversaryDisplayData";
import { VTuberAnniversaryToDisplay } from "../../utils/transform/AnniversaryTransform";
import { VTuberAnniversaryDisplayDataFilterModel } from "../../types/FilterType/VTuberAnniversaryDisplayDataFilterModel";
import { AnniversaryCountColumn } from "../../tableTypes/AnniversaryCountColumn";
import { DebutDateOfTheYearColumn } from "../../tableTypes/DebutDateOfTheYearColumn";
import { DebutDateOfTheYearDescendingCompare } from "../../utils/sort/DebutDateOfTheYearSort";
import DropDownList from "../../components/DropDownList";
import Calendar from "../../components/Calendar";
import style from "./style.module.css";
import { TODAY_DATE } from "../../global/TodayDate";
import { DataViewStyle } from "../../types/DataViewStyle";

export interface AnniversaryVTubersPageProps {
  dictionary: Dictionary;
}

const AnniversaryVTubersPage: FunctionalComponent<
  AnniversaryVTubersPageProps
> = (props: AnniversaryVTubersPageProps) => {
  document.title = `${props.dictionary.header.anniversaryVTubers} | ${props.dictionary.header.title}`;
  const [viewStyle, setViewStyle] = useState<DataViewStyle>("calendar");

  const optionValue: Array<{
    option: JSX.Element;
    value: DataViewStyle;
  }> = [
    {
      option: <Text id="dropDown.calendar">Calendar</Text>,
      value: "calendar",
    },
    {
      option: <Text id="dropDown.table">Table</Text>,
      value: "table",
    },
  ];

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

  const [data, setData] = useState<Array<VTuberAnniversaryDisplayData>>([]);
  // calender data
  const calenderData = data.map((d) => {
    return {
      ...d,
      date: TODAY_DATE.getFullYear() + "-" + d.debutInfo.debutDateOfTheYear,
    };
  });

  // search filter
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
      <div class={style.dropDown}>
        <DropDownList
          tipText={props.dictionary.dropDown.viewStyle}
          value={viewStyle}
          optionValue={optionValue}
          onChange={(e: any) => setViewStyle(e.target.value)}
        />
      </div>
      <div class={viewStyle === "calendar" ? "" : style.hidden}>
        <Calendar displayData={calenderData} dictionary={props.dictionary} />
      </div>
      <div class={viewStyle === "table" ? "" : style.hidden}>
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
      </div>
    </>
  );
};

export default AnniversaryVTubersPage;
