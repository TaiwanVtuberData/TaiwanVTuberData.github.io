import * as Api from '../../../services/ApiService';
import { Fragment, FunctionalComponent, h } from 'preact';
import { Text } from 'preact-i18n';
import { useState, useEffect } from 'preact/hooks';
import DataTable, { Media, TableColumn } from 'react-data-table-component';
import ActivityRowStyles from '../../../style/ActivityRowStyles';
import { CompactTableStyle } from '../../../style/CompactTableStyle';
import IsTodayRowStyle from '../../../style/IsTodayRowStyles';
import { NameColumn } from '../../../tableTypes/NameColumn';
import { PopularVideoColumn } from '../../../tableTypes/PopularVideoColumn';
import { YouTubeTwitchCountColumn } from '../../../tableTypes/YouTubeTwitchCountColumn';
import { VTuberDebutDisplayData } from '../../../types/TableDisplayData/VTuberDebutDisplayData';
import DefaultDataTableProps from '../../../utils/DefaultDataTableProps';
import { VTuberDebutToDisplay } from '../../../utils/transform/DebutTransform';
import { DebutDateColumn } from '../../../tableTypes/DebutDateColumn';
import { GetRoute } from '../../../utils/TypeSafeRouting';

const DebutVTubersTable: FunctionalComponent = () => {
  const columns: Array<TableColumn<VTuberDebutDisplayData>> = [
    DebutDateColumn(),
    NameColumn(),
    YouTubeTwitchCountColumn(),
    {
      ...PopularVideoColumn(),
      hide: Media.SM,
    },
  ];

  // search filter
  const [data, setData] = useState<Array<VTuberDebutDisplayData>>([]);

  const [pending, setPending] = useState(true);

  const getVTubers = async (): Promise<void> => {
    await Api.getDebutVTubers('next-7-days').then((res) => {
      setData(
        res.data.VTubers.map((e) => e)
          .sort((a, b) => a.debutDate.localeCompare(b.debutDate))
          .map((e) => VTuberDebutToDisplay(e))
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
        <a href={GetRoute({ type: 'debut-vtubers' })}>
          <Text id="header.debutVTubersIn7Days">VTubers Debut in 7 days</Text>
        </a>
      </h3>
      <DataTable
        {...DefaultDataTableProps}
        columns={columns}
        data={data}
        // Typescript does not accept concat two array of different types
        conditionalRowStyles={ActivityRowStyles.concat(
          IsTodayRowStyle as Array<any>
        )}
        customStyles={CompactTableStyle}
        progressPending={pending}
        progressComponent={<Text id="text.loading">Loading...</Text>}
      />
    </>
  );
};

export default DebutVTubersTable;
