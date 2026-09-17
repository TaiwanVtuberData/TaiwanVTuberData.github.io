import { Dictionary } from '../../../i18n/Dictionary';
import * as Api from '../../../services/YearEndStatisticApiService';
import { CompactTableStyle } from '../../../style/CompactTableStyle';
import { NameColumn } from '../../../tableTypes/NameColumn';
import { RankingColumn } from '../../../tableTypes/RankingColumn';
import { VideoColumn } from '../../../tableTypes/VideoColumn';
import { _1YearGrowthColumn } from '../../../tableTypes/_1YearGrowthColumn';
import { EstablishTypeModifier } from '../../../types/ApiTypes';
import { VideoPopularityDisplayData } from '../../../types/TableDisplayData/VideoPopularityDisplayData';
import DefaultDataTableProps from '../../../utils/DefaultDataTableProps';
import { PopularVideoToDisplayData } from '../../../utils/transform/PopularVideoTransform';
import { FunctionalComponent } from 'preact';
import { Text } from 'preact-i18n';
import { useState, useEffect } from 'preact/hooks';
import DataTable, { TableColumn } from 'react-data-table-component';

export interface YearEndYouTubeTrendingVideosTableProps {
  dictionary: Dictionary;
  establishTypeModifier: EstablishTypeModifier;
}

const YearEndYouTubeTrendingVideosTable: FunctionalComponent<
  YearEndYouTubeTrendingVideosTableProps
> = (props: YearEndYouTubeTrendingVideosTableProps) => {
  const columns: Array<TableColumn<VideoPopularityDisplayData>> = [
    {
      ...RankingColumn(),
      width: '50px',
    },
    NameColumn(),
    {
      name: <Text id="table.title">Title</Text>,
      selector: (row: { title: string }): string => row.title,
      wrap: true,
    },
    {
      ...VideoColumn(),
      width: '200px',
    },
    {
      name: <Text id="table.viewCount">View Count</Text>,
      selector: (row: { viewCount: number }): number => row.viewCount,
      width: '100px',
    },
  ];

  const [data, setData] = useState<Array<VideoPopularityDisplayData>>([]);

  const [pending, setPending] = useState(true);

  const getVTubers = async (): Promise<void> => {
    await Api.getTrendingYouTubeVideos({
      establishType: props.establishTypeModifier,
      count: '100',
    }).then((res) => {
      setData(
        res.data.videos
          .map((e) => e)
          .sort((a, b) => b.viewCount - a.viewCount)
          .map((e, index) => PopularVideoToDisplayData(e, index + 1)),
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
        <Text id="header.trendingYouTubeVideos">Trending YouTube Videos</Text>
        <> </>
        <Text id="header.top100">Top 100</Text>
      </h3>
      <DataTable
        {...DefaultDataTableProps}
        columns={columns}
        data={data}
        customStyles={CompactTableStyle}
        pagination
        paginationComponentOptions={props.dictionary.table.paginationOptions}
        progressComponent={<Text id="text.loading">Loading...</Text>}
        progressPending={pending}
      />
    </>
  );
};

export default YearEndYouTubeTrendingVideosTable;
