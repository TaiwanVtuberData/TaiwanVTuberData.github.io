import * as Api from "../../../services/YearEndStatisticApiService";
import { FunctionalComponent } from "preact";
import { Text } from "preact-i18n";
import { useState, useEffect } from "preact/hooks";
import DataTable, { TableColumn } from "react-data-table-component";
import { Dictionary } from "../../../i18n/Dictionary";
import ActivityRowStyles from "../../../style/ActivityRowStyles";
import { CompactTableStyle } from "../../../style/CompactTableStyle";
import { NameColumn } from "../../../tableTypes/NameColumn";
import { YouTubeSubscriberColumn } from "../../../tableTypes/YouTubeSubscriberColumn";
import DefaultDataTableProps from "../../../utils/DefaultDataTableProps";
import { EstablishTypeModifier } from "../../../types/ApiTypes";
import { YearEndVTuberYouTubeGrowthDisplayData } from "../../../types/TableDisplayData/YearEndVTuberYouTubeGrowthDisplayData";
import { YearEndVTuberYouTubeGrowthToDisplay } from "../../../utils/transform/GrowthTransform";
import { _1YearGrowthColumn } from "../../../tableTypes/_1YearGrowthColumn";
import { DebutDateColumn } from "../../../tableTypes/DebutDateColumn";
import { GroupColumn } from "../../../tableTypes/GroupColumn";
import { NationalityColumn } from "../../../tableTypes/NationalityColumn";
import { RankingColumn } from "../../../tableTypes/RankingColumn";

export interface YearEndYouTubeGrowthTableProps {
  dictionary: Dictionary;
  establishTypeModifier: EstablishTypeModifier;
}

const YearEndYouTubeGrowthTable: FunctionalComponent<
  YearEndYouTubeGrowthTableProps
> = (props: YearEndYouTubeGrowthTableProps) => {
  const columns: Array<TableColumn<YearEndVTuberYouTubeGrowthDisplayData>> = [
    {
      ...RankingColumn(),
      width: "40px",
    },
    NameColumn(),
    {
      ...YouTubeSubscriberColumn(),
      compact: true,
    },
    {
      ..._1YearGrowthColumn(props.dictionary.table),
      compact: true,
    },
    DebutDateColumn(),
    {
      ...GroupColumn(),
      width: "150px",
    },
    {
      ...NationalityColumn(),
      width: "125px",
    },
  ];

  const [data, setData] = useState<
    Array<YearEndVTuberYouTubeGrowthDisplayData>
  >([]);

  const [pending, setPending] = useState(true);

  const getVTubers = async (): Promise<void> => {
    await Api.getGrowingYouTubeVTubers({
      establishType: props.establishTypeModifier,
      count: "10",
    }).then((res) => {
      setData(
        res.data.VTubers.map((e) => e)
          .map((e, index) => YearEndVTuberYouTubeGrowthToDisplay(e, index + 1))
          .sort((a, b) => b._365DaysGrowth.diff - a._365DaysGrowth.diff),
      );
      setPending(false);
    });
  };

  useEffect(() => {
    getVTubers();
  }, []);

  const getTitlePrefixId = (
    establishTypeModifier: EstablishTypeModifier,
  ): string => {
    switch (establishTypeModifier) {
      case "established":
        return "header.yearEndEstablished";
      case "new":
        return "header.yearEndNewComer";
    }
  };

  return (
    <>
      <h3>
        <Text id={getTitlePrefixId(props.establishTypeModifier)}></Text>
        <> </>
        <Text id="header.growingYouTubeSubscriberCount">
          YouTube Subscriber Count Growth
        </Text>
        <> </>
        <Text id="header.top10">Top 10</Text>
      </h3>
      <DataTable
        {...DefaultDataTableProps}
        columns={columns}
        data={data}
        conditionalRowStyles={ActivityRowStyles}
        customStyles={CompactTableStyle}
        progressComponent={<Text id="text.loading">Loading...</Text>}
        progressPending={pending}
      />
    </>
  );
};

export default YearEndYouTubeGrowthTable;
