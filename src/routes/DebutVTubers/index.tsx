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
import { VTuberDebutDisplayData } from "../../types/TableDisplayData/VTuberDebutDisplayData";
import DefaultDataTableProps from "../../utils/DefaultDataTableProps";
import { GetCurrentNationalitySpan } from "../../utils/NationalityUtils";
import { YouTubeSubscriberCountPlusTwitchFollowerCountAscendingSort } from "../../utils/sort/VTuberSort";
import { VTuberDebutToDisplay } from "../../utils/transform/DebutTransform";
import tableStyle from "../../style/DataTableStyle.module.css";
import { DebutDateColumn } from "../../tableTypes/DebutDateColumn";
import { VTuberDebutDisplayDataFilterModel } from "../../types/FilterType/VTuberDebutDisplayDataFilterModel";
import { filterFunction } from "../../utils/FilterModelHelper";
import FilterWindow from "../../components/FilterWindow";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import DropDownList from "../../components/DropDownList";
import style from "./style.module.css";

export interface DebutVTubersPageProps {
  dictionary: Dictionary;
}

type ViewStyle = "table" | "calendar";

const DebutVTubersPage: FunctionalComponent<DebutVTubersPageProps> = (
  props: DebutVTubersPageProps,
) => {
  document.title = `${props.dictionary.header.debutVTubers} | ${props.dictionary.header.title}`;
  const [viewStyle, setViewStyle] = useState<ViewStyle>("table");

  const optionValue: Array<{
    option: JSX.Element;
    value: ViewStyle;
  }> = [
    {
      option: <Text id="dropDown.table">Table</Text>,
      value: "table",
    },
    {
      option: <Text id="dropDown.calendar">Calendar</Text>,
      value: "calendar",
    },
  ];

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
      filterModel: VTuberDebutDisplayDataFilterModel,
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
    await Api.getDebutVTubers("recent").then((res) => {
      setData(
        res.data.VTubers.map((e) => e)
          .sort((a, b) => b.debutDate.localeCompare(a.debutDate))
          .map((e) => VTuberDebutToDisplay(e)),
      );
      setPending(false);
    });
  };

  useEffect(() => {
    getVTubers();
  }, []);

  const debutEvents = data.map((d) => ({ title: d.name, date: d.debutDate }));

  const Calendar = () => (
    <FullCalendar
      plugins={[dayGridPlugin, interactionPlugin]}
      initialView="dayGridMonth"
      weekends={true}
      events={debutEvents}
      height={"85vh"}
    />
  );

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
      <div class={style.dropDown}>
        <DropDownList
          tipText={props.dictionary.dropDown.viewStyle}
          value={viewStyle}
          optionValue={optionValue}
          onChange={(e: any) => setViewStyle(e.target.value)}
        />
      </div>
      <div class={viewStyle === "calendar" ? "" : style.hidden}>
        <Calendar />
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

export default DebutVTubersPage;
