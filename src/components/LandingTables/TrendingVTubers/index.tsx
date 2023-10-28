import * as Api from "../../../services/ApiService";
import { FunctionalComponent } from "preact";
import { Text } from "preact-i18n";
import { useEffect, useState } from "preact/hooks";
import DataTable, { Media, TableColumn } from "react-data-table-component";
import { CompactTableStyle } from "../../../style/CompactTableStyle";
import { NameColumn } from "../../../tableTypes/NameColumn";
import { PopularityColumn } from "../../../tableTypes/PopularityColumn";
import { YouTubeTwitchCountColumn } from "../../../tableTypes/YouTubeTwitchCountColumn";
import { VTuberPopularityDisplayData } from "../../../types/TableDisplayData/VTuberPopularityDisplayData";
import DefaultDataTableProps from "../../../utils/DefaultDataTableProps";
import { PopularityCountDescendingSort } from "../../../utils/sort/PopularityCountSort";
import { VTuberPopularityToDisplay } from "../../../utils/transform/PopularityTransform";
import QuestionMarkToolTip from "../../QuestionMarkToolTip";
import { PopularVideoColumn } from "../../../tableTypes/PopularVideoColumn";
import { RankingColumn } from "../../../tableTypes/RankingColumn";
import ActivityRowStyles from "../../../style/ActivityRowStyles";
import { GetRoute } from "../../../utils/TypeSafeRouting";

const TrendingVTubersTable: FunctionalComponent = () => {
  const columns: Array<TableColumn<VTuberPopularityDisplayData>> = [
    {
      ...RankingColumn(),
      width: "30px",
    },
    NameColumn(),
    PopularityColumn(),
    YouTubeTwitchCountColumn(),
    {
      ...PopularVideoColumn(),
      hide: Media.SM,
    },
  ];

  const [data, setData] = useState<Array<VTuberPopularityDisplayData>>([]);

  const [pending, setPending] = useState(true);

  const getVTubers = async (): Promise<void> => {
    await Api.getTrendingVTubers({ sortBy: "livestream", count: "10" }).then(
      (res) => {
        setData(
          res.data.VTubers.map((e) => e)
            .map((e, index) => VTuberPopularityToDisplay(e, index + 1))
            .sort(PopularityCountDescendingSort)
            .map((e, index) => ({ ...e, ranking: index + 1 })),
        );
        setPending(false);
      },
    );
  };

  useEffect(() => {
    getVTubers();
  }, []);

  return (
    <>
      <h3>
        <a
          href={GetRoute({ type: "trending-vtubers", sortOrder: "livestream" })}
        >
          <Text id="header.trendingVTubers">Trending VTubers</Text>
          {/* Yes. Adding a space between two texts require a Fragment */}
          <> </>
          <Text id="header.top10">Top 10</Text>
        </a>
        <QuestionMarkToolTip
          width="300px"
          fontSize="13px"
          text={<Text id="toolTip.trendingVTubers">tooltip text</Text>}
        />
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

export default TrendingVTubersTable;
