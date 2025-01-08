import { Dictionary } from '../../../i18n/Dictionary';
import * as Api from '../../../services/YearEndStatisticApiService';
import ActivityRowStyles from '../../../style/ActivityRowStyles';
import { CompactTableStyle } from '../../../style/CompactTableStyle';
import { DebutDateColumn } from '../../../tableTypes/DebutDateColumn';
import { GroupColumn } from '../../../tableTypes/GroupColumn';
import { NameColumn } from '../../../tableTypes/NameColumn';
import { NationalityColumn } from '../../../tableTypes/NationalityColumn';
import { RankingColumn } from '../../../tableTypes/RankingColumn';
import { TwitchFollowerColumn } from '../../../tableTypes/TwitchFollowerColumn';
import { _1YearGrowthColumn } from '../../../tableTypes/_1YearGrowthColumn';
import { EstablishTypeModifier } from '../../../types/ApiTypes';
import { YearEndVTuberTwitchGrowthDisplayData } from '../../../types/TableDisplayData/YearEndVTuberTwitchGrowthDisplayData';
import DefaultDataTableProps from '../../../utils/DefaultDataTableProps';
import { YearEndVTuberTwitchGrowthToDisplay } from '../../../utils/transform/GrowthTransform';
import { FunctionalComponent } from 'preact';
import { Text } from 'preact-i18n';
import { useState, useEffect } from 'preact/hooks';
import DataTable, { TableColumn } from 'react-data-table-component';

export interface YearEndTwitchGrowthTableProps {
  dictionary: Dictionary;
  establishTypeModifier: EstablishTypeModifier;
}

const YearEndTwitchGrowthTable: FunctionalComponent<
  YearEndTwitchGrowthTableProps
> = (props: YearEndTwitchGrowthTableProps) => {
  const columns: Array<TableColumn<YearEndVTuberTwitchGrowthDisplayData>> = [
    {
      ...RankingColumn(),
      width: '40px',
    },
    NameColumn(),
    {
      ...TwitchFollowerColumn(),
      compact: true,
    },
    {
      ..._1YearGrowthColumn(props.dictionary.table),
      compact: true,
    },
    DebutDateColumn(),
    {
      ...GroupColumn(),
      width: '150px',
    },
    {
      ...NationalityColumn(),
      width: '125px',
    },
  ];

  const [data, setData] = useState<Array<YearEndVTuberTwitchGrowthDisplayData>>(
    [],
  );

  const [pending, setPending] = useState(true);

  const getVTubers = async (): Promise<void> => {
    await Api.getGrowingTwitchVTubers({
      establishType: props.establishTypeModifier,
      count: '10',
    }).then((res) => {
      setData(
        res.data.VTubers.map((e) => e)
          .map((e, index) => YearEndVTuberTwitchGrowthToDisplay(e, index + 1))
          .sort((a, b) => b._1YearGrowth.diff - a._1YearGrowth.diff),
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
      case 'established':
        return 'header.yearEndEstablished';
      case 'new':
        return 'header.yearEndNewComer';
    }
  };

  return (
    <>
      <h3>
        <Text id={getTitlePrefixId(props.establishTypeModifier)}></Text>
        <> </>
        <Text id="header.growingTwitchFollowerCount">
          Twitch Follower Count Growth
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

export default YearEndTwitchGrowthTable;
