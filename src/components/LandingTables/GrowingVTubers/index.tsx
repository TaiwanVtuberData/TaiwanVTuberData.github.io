import { Fragment, FunctionalComponent, h } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import { Text } from 'preact-i18n';
import DataTable, { TableColumn } from 'react-data-table-component';
import * as Api from '../../../services/ApiService';
import DefaultDataTableProps from '../../../utils/DefaultDataTableProps';
import '../../../style/index.css';
import ActivityRowStyles from '../../../style/ActivityRowStyles';
import {
  GrowthDisplayData,
  VTuberGrowthDisplayData,
} from '../../../types/TableDisplayData/VTuberGrowthDisplayData';
import { GrowthDisplayDataToString } from '../../../utils/NumberUtils';
import { Dictionary } from '../../../i18n/Dictionary';
import { CompactTableStyle } from '../../../style/CompactTableStyle';
import QuestionMarkToolTip from '../../QuestionMarkToolTip';
import { NameColumn } from '../../../tableTypes/NameColumn';
import { PopularVideoColumn } from '../../../tableTypes/PopularVideoColumn';
import { HasCountType } from '../../../types/Common/CountType';
import { VTuberGrowthToDisplay } from '../../../utils/transform/GrowthTransform';

export interface GrowingVTubersTableProps {
  dictionary: Dictionary;
}

const GrowingVTubersTable: FunctionalComponent<GrowingVTubersTableProps> = (
  props: GrowingVTubersTableProps
) => {
  const columns: Array<TableColumn<VTuberGrowthDisplayData>> = [
    NameColumn<VTuberGrowthDisplayData>(),
    {
      name: <Text id="table.YouTubeSubscriberCount">YouTube Subscribers</Text>,
      selector: (row: { YouTubeSubscriber: HasCountType }): number =>
        row.YouTubeSubscriber.count,
      maxWidth: '250px',
    },
    {
      name: <Text id="table._7DaysGrowth">7 Days Growth (Percent)</Text>,
      cell: (row: { _7DaysGrowth: GrowthDisplayData }): string =>
        GrowthDisplayDataToString(row._7DaysGrowth, props.dictionary.table),
      maxWidth: '250px',
    },
    {
      ...PopularVideoColumn(),
      width: '100px',
    },
  ];

  const [data, setData] = useState<Array<VTuberGrowthDisplayData>>([]);

  const [pending, setPending] = useState(true);

  const getVTubers = async (): Promise<void> => {
    await Api.getGrowingVTubers('10').then((res) => {
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
    <Fragment>
      <h3>
        <Text id="header.growingVTubers">Growing VTubers</Text>
        <Fragment> </Fragment>
        <Text id="header.top10">Top 10</Text>
        <QuestionMarkToolTip
          width="300px"
          fontSize="13px"
          text={<Text id="toolTip.growingVTubers">tooltip text</Text>}
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
    </Fragment>
  );
};

export default GrowingVTubersTable;
