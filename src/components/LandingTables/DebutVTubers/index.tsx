import * as Api from '../../../services/ApiService';
import { Fragment, FunctionalComponent, h } from 'preact';
import { Text } from 'preact-i18n';
import { useState, useEffect } from 'preact/hooks';
import DataTable, { TableColumn } from 'react-data-table-component';
import ActivityRowStyles from '../../../style/ActivityRowStyles';
import { CompactTableStyle } from '../../../style/CompactTableStyle';
import IsTodayRowStyle from '../../../style/IsTodayRowStyles';
import { NameColumn } from '../../../tableTypes/NameColumn';
import { PopularVideoColumn } from '../../../tableTypes/PopularVideoColumn';
import { YouTubeTwitchCountColumn } from '../../../tableTypes/YouTubeTwitchCountColumn';
import { VTuberDebutDisplayData } from '../../../types/TableDisplayData/VTuberDebutDisplayData';
import { getISODateString } from '../../../utils/DateTimeUtils';
import DefaultDataTableProps from '../../../utils/DefaultDataTableProps';
import { VTuberDebutToDisplay } from '../../../utils/transform/DebutTransform';

const DebutVTubersTable: FunctionalComponent = () => {
  const columns: Array<TableColumn<VTuberDebutDisplayData>> = [
    {
      name: <Text id="table.debutDate">Debut Date</Text>,
      selector: (row: { debutDate: string }): string => row.debutDate,
      width: '100px',
    },
    NameColumn(),
    YouTubeTwitchCountColumn(),
    PopularVideoColumn(),
  ];

  // search filter
  const [data, setData] = useState<Array<VTuberDebutDisplayData>>([]);

  const [pending, setPending] = useState(true);

  const getVTubers = async (): Promise<void> => {
    const todayDate: string = getISODateString(new Date(), 8);
    await Api.getDebutVTubers('next-7-days').then((res) => {
      setData(
        res.data.VTubers.map((e) => e)
          .sort((a, b) => a.debutDate.localeCompare(b.debutDate))
          .map((e) => VTuberDebutToDisplay(e, todayDate))
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
        <Text id="header.debutVTubersIn7Days">VTubers Debut in 7 days</Text>
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
