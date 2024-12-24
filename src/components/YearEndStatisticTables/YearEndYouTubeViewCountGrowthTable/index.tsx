import * as Api from "../../../services/YearEndStatisticApiService";
import { FunctionalComponent } from "preact";
import { Text } from "preact-i18n";
import { useState, useEffect } from "preact/hooks";
import DataTable, { TableColumn } from "react-data-table-component";
import { Dictionary } from "../../../i18n/Dictionary";
import ActivityRowStyles from "../../../style/ActivityRowStyles";
import { CompactTableStyle } from "../../../style/CompactTableStyle";
import { NameColumn } from "../../../tableTypes/NameColumn";
import DefaultDataTableProps from "../../../utils/DefaultDataTableProps";
import { EstablishTypeModifier } from "../../../types/ApiTypes";
import { _1YearGrowthColumn } from "../../../tableTypes/_1YearGrowthColumn";
import { DebutDateColumn } from "../../../tableTypes/DebutDateColumn";
import { GroupColumn } from "../../../tableTypes/GroupColumn";
import { YearEndVTuberYouTubeViewCountGrowthToDisplay } from "../../../utils/transform/ViewCountTransform";
import { YearEndVTuberViewCountGrowthDisplayData } from "../../../types/TableDisplayData/YearEndVTuberViewCountGrowthDisplayData";
import { RankingColumn } from "../../../tableTypes/RankingColumn";
import { GrowthData } from "../../../types/Common/GrowthData";
import { GrowthDisplayDataToString } from "../../../utils/NumberUtils";
import { NationalityColumn } from "../../../tableTypes/NationalityColumn";

export interface YearEndYouTubeViewCountGrowthTableProps {
  dictionary: Dictionary;
  establishTypeModifier: EstablishTypeModifier;
}

const YearEndYouTubeViewCountGrowthTable: FunctionalComponent<
  YearEndYouTubeViewCountGrowthTableProps
> = (props: YearEndYouTubeViewCountGrowthTableProps) => {
  const columns: Array<TableColumn<YearEndVTuberViewCountGrowthDisplayData>> = [
    {
      ...RankingColumn(),
      sortable: true,
      width: "40px",
    },
    NameColumn(),
    {
      name: (
        <Text id="table.YouTubeTotalViewCount">YouTube Total View Count</Text>
      ),
      selector: (row: { totalViewCount: number }): number => row.totalViewCount,
      compact: true,
    },
    {
      name: <Text id="table._1YearViewCountGrowth">1 Year Growth</Text>,
      cell: (row: { _365DaysGrowth: GrowthData }): string =>
        GrowthDisplayDataToString(row._365DaysGrowth, props.dictionary.table),
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
    Array<YearEndVTuberViewCountGrowthDisplayData>
  >([]);

  const [pending, setPending] = useState(true);

  const getVTubers = async (): Promise<void> => {
    await Api.getVTubersYouTubeViewCountChange({
      establishType: props.establishTypeModifier,
      count: "10",
    }).then((res) => {
      setData(
        res.data.VTubers.map((e) => e)
          .map((e, index) =>
            YearEndVTuberYouTubeViewCountGrowthToDisplay(e, index + 1),
          )
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
        <Text id="header.growingYouTubeViewCount">
          YouTube View Count Growth
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

export default YearEndYouTubeViewCountGrowthTable;
