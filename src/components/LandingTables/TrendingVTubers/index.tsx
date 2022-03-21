import { Fragment, FunctionalComponent, h } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import { Text } from 'preact-i18n';
import DataTable, { TableColumn } from 'react-data-table-component';
import { Dictionary } from '../../../i18n/Dictionary';
import * as Api from '../../../services/ApiService';
import DefaultDataTableProps from '../../../utils/DefaultDataTableProps';
import '../../../style/index.css';
import ActivityRowStyles from '../../../style/ActivityRowStyles';
import { VTuberPopularityDisplayData } from '../../../types/TableDisplayData/VTuberPopularityDisplayData';
import { VTuberPopularityToDisplay } from '../../../types/ApiToDisplayData/PopularityTransform';

export interface TrendingVTubersTableProps {
  dictionary: Dictionary;
}

const TrendingVTubersTable: FunctionalComponent<TrendingVTubersTableProps> = (
  props: TrendingVTubersTableProps
) => {
  const columns: Array<TableColumn<VTuberPopularityDisplayData>> = [
    {
      name: '#',
      width: '70px',
      wrap: false,
      selector: (row: { ranking: number }): number => row.ranking,
    },
    {
      name: '',
      width: '75px',
      cell: (row: { profileImg: h.JSX.Element | null }): h.JSX.Element | null =>
        row.profileImg,
    },
    {
      name: <Text id="table.displayName">Name</Text>,
      wrap: true,
      selector: (row: { name: string }): string => row.name,
    },
    {
      name: <Text id="table.popularity">Popularity</Text>,
      selector: (row: { popularity: number }): number => row.popularity,
      right: true,
    },
  ];

  const [data, setData] = useState<Array<VTuberPopularityDisplayData>>([]);

  const [pending, setPending] = useState(true);

  const getVTubers = async (): Promise<void> => {
    await Api.getTrendingVTubers('10').then((res) => {
      // thanks to JavaScript sorting being mutable, I have to convert ReadonlyArray to Array first
      setData(
        res.data.VTubers.map((e) => e)
          .sort((a, b) => b.popularity - a.popularity)
          .map((e, index) => VTuberPopularityToDisplay(e, index + 1))
      );
      setPending(false);
    });
  };

  useEffect(() => {
    getVTubers();
  }, []);

  return (
    <Fragment>
      <DataTable
        {...DefaultDataTableProps}
        columns={columns}
        data={data}
        conditionalRowStyles={ActivityRowStyles}
        fixedHeader
        progressComponent={props.dictionary.table.loading}
        progressPending={pending}
      />
    </Fragment>
  );
};

export default TrendingVTubersTable;
