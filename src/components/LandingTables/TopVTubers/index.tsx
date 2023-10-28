import * as Api from "../../../services/ApiService";
import { FunctionalComponent } from "preact";
import { Text } from "preact-i18n";
import { useState, useEffect } from "preact/hooks";
import DataTable, { TableColumn } from "react-data-table-component";
import ActivityRowStyles from "../../../style/ActivityRowStyles";
import { CompactTableStyle } from "../../../style/CompactTableStyle";
import { NameColumn } from "../../../tableTypes/NameColumn";
import { PopularVideoColumn } from "../../../tableTypes/PopularVideoColumn";
import { YouTubeTwitchCountColumn } from "../../../tableTypes/YouTubeTwitchCountColumn";
import { VTuberDisplayData } from "../../../types/TableDisplayData/VTuberDisplayData";
import DefaultDataTableProps from "../../../utils/DefaultDataTableProps";
import { VTuberBasicToDisplay } from "../../../utils/transform/BasicTransform";
import { GetRoute } from "../../../utils/TypeSafeRouting";

const TopVTubersTable: FunctionalComponent = () => {
  const columns: Array<TableColumn<VTuberDisplayData>> = [
    NameColumn(),
    YouTubeTwitchCountColumn(),
    PopularVideoColumn(),
  ];

  const [data, setData] = useState<Array<VTuberDisplayData>>([]);

  const [pending, setPending] = useState(true);

  const getVTubers = async (): Promise<void> => {
    await Api.getVTubers("10").then((res) => {
      setData(res.data.VTubers.map((e) => VTuberBasicToDisplay(e)));
      setPending(false);
    });
  };

  useEffect(() => {
    getVTubers();
  }, []);

  return (
    <>
      <h3>
        <a href={GetRoute({ type: "all-vtubers" })}>
          <Text id="header.YouTubeSubPlusTwitchFollowers">
            YouTube Subscribers + Twitch Followers
          </Text>
          <> </>
          <Text id="header.top10">Top 10</Text>
        </a>
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

export default TopVTubersTable;
