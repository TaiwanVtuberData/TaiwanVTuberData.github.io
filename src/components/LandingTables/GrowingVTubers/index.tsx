import { Dictionary } from '../../../i18n/Dictionary';
import * as Api from '../../../services/ApiService';
import ActivityRowStyles from '../../../style/ActivityRowStyles';
import { CompactTableStyle } from '../../../style/CompactTableStyle';
import { NameColumn } from '../../../tableTypes/NameColumn';
import { PopularVideoColumn } from '../../../tableTypes/PopularVideoColumn';
import { YouTubeSubscriberColumn } from '../../../tableTypes/YouTubeSubscriberColumn';
import { _7DaysGrowthColumn } from '../../../tableTypes/_7DaysGrowthColumn';
import { VTuberGrowthDisplayData } from '../../../types/TableDisplayData/VTuberGrowthDisplayData';
import DefaultDataTableProps from '../../../utils/DefaultDataTableProps';
import { GetRoute } from '../../../utils/TypeSafeRouting';
import { VTuberGrowthToDisplay } from '../../../utils/transform/GrowthTransform';
import { FunctionalComponent } from 'preact';
import { Text } from 'preact-i18n';
import { useState, useEffect } from 'preact/hooks';
import DataTable, { Media, TableColumn } from 'react-data-table-component';

export interface GrowingVTubersTableProps {
  dictionary: Dictionary;
}

const GrowingVTubersTable: FunctionalComponent<GrowingVTubersTableProps> = (
  props: GrowingVTubersTableProps,
) => {
  const columns: Array<TableColumn<VTuberGrowthDisplayData>> = [
    NameColumn(),
    YouTubeSubscriberColumn(),
    _7DaysGrowthColumn(props.dictionary.table),
    {
      ...PopularVideoColumn(),
      hide: Media.SM,
    },
  ];

  const [data, setData] = useState<Array<VTuberGrowthDisplayData>>([]);

  const [pending, setPending] = useState(true);

  const getVTubers = async (): Promise<void> => {
    await Api.getGrowingVTubers('10').then((res) => {
      setData(
        res.data.VTubers.map((e) => e)
          .map((e) => VTuberGrowthToDisplay(e))
          .sort(
            (a, b) => b._7DaysGrowth.percentage - a._7DaysGrowth.percentage,
          ),
      );
      setPending(false);
    });
  };

  useEffect(() => {
    getVTubers();
  }, []);

  return (
    <>
      <h3>
        <a href={GetRoute({ type: 'growing-vtubers' })}>
          <Text id="header.growingVTubers">Growing VTubers</Text>
          <> </>
          <Text id="header.top10">Top 10</Text>
        </a>
        {/* <QuestionMarkToolTip
          width="300px"
          fontSize="13px"
          text={<Text id="toolTip.growingVTubers">tooltip text</Text>}
        /> */}
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

export default GrowingVTubersTable;
