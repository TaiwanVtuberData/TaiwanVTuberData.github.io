import DropDownList from '../../components/DropDownList';
import FilterWindow from '../../components/FilterWindow';
import { Dictionary } from '../../i18n/Dictionary';
import * as Api from '../../services/ApiService';
import tableStyle from '../../style/DataTableStyle.module.css';
import { NameColumn } from '../../tableTypes/NameColumn';
import { RankingColumn } from '../../tableTypes/RankingColumn';
import { VideoColumn } from '../../tableTypes/VideoColumn';
import { TrendingVideosModifier } from '../../types/ApiTypes';
import { VideoPopularityDisplayDataFilterModel } from '../../types/FilterType/VideoPopularityDisplayDataFilterModel';
import { VideoPopularityDisplayData } from '../../types/TableDisplayData/VideoPopularityDisplayData';
import { getFormattedDateTime } from '../../utils/DateTimeUtils';
import DefaultDataTableProps from '../../utils/DefaultDataTableProps';
import { filterFunction } from '../../utils/FilterModelHelper';
import { GetCurrentNationalitySpan } from '../../utils/NationalityUtils';
import { GoToPage } from '../../utils/TypeSafeRouting';
import { PopularVideoToDisplayData } from '../../utils/transform/PopularVideoTransform';
import { FunctionalComponent, JSX } from 'preact';
import { Text } from 'preact-i18n';
import { useState, useMemo, useEffect } from 'preact/hooks';
import DataTable, {
  TableColumn,
  TableStyles,
} from 'react-data-table-component';

export interface TrendingVideosPageProps {
  dictionary: Dictionary;
  modifier: TrendingVideosModifier;
}

const TrendingVideosPage: FunctionalComponent<TrendingVideosPageProps> = (
  props: TrendingVideosPageProps,
) => {
  document.title = `${props.dictionary.header.trendingVideos} | ${props.dictionary.header.title}`;

  const columns: Array<TableColumn<VideoPopularityDisplayData>> = [
    {
      ...RankingColumn(),
      sortable: true,
      width: '40px',
    },
    {
      ...NameColumn(),
      width: '200px',
    },
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
      right: true,
      sortable: true,
      width: '80px',
    },
    {
      name: <Text id="table.uploadTime">Upload Time</Text>,
      selector: (row: { uploadTime: Date }): string =>
        getFormattedDateTime(row.uploadTime),
      sortable: true,
      width: '175px',
    },
  ];

  // search filter
  const [data, setData] = useState<Array<VideoPopularityDisplayData>>([]);
  const [filterModel, setFilterModel] =
    useState<VideoPopularityDisplayDataFilterModel>({
      name: null,
      title: null,
    });
  const filteredData = data.filter((e) => filterFunction(e, filterModel));

  const searchBarComponent = useMemo(() => {
    const optionValue: Array<{
      option: JSX.Element;
      value: TrendingVideosModifier;
    }> = [
      {
        option: <Text id="table.noDuplicate">One video per VTuber</Text>,
        value: 'no-duplicate',
      },
      {
        option: <Text id="table.allVideos">All videos</Text>,
        value: 'all',
      },
    ];

    const handleFilterWindow = (
      filterModel: VideoPopularityDisplayDataFilterModel,
    ): void => {
      setFilterModel(filterModel);
    };

    const fieldPlaceHolderMappings: Map<string, string> = new Map<
      string,
      string
    >([
      ['name', props.dictionary.table.searchByDisplayName],
      ['title', props.dictionary.table.searchByTitle],
    ]);

    return (
      <div class={tableStyle.searchBarGroup}>
        <DropDownList
          tipText={props.dictionary.table.options}
          value={props.modifier}
          optionValue={optionValue}
          onChange={(e: any) =>
            GoToPage({
              type: 'trending-videos',
              sortOrder: e.target.value,
            })
          }
        />
        <FilterWindow
          filterModel={filterModel}
          fieldPlaceHolderMappings={fieldPlaceHolderMappings}
          openSearchText={props.dictionary.text.openSearch}
          closeSearchText={props.dictionary.text.closeSearch}
          onChange={handleFilterWindow}
        />
      </div>
    );
  }, [filterModel, props.modifier, props.dictionary]);
  const [pending, setPending] = useState(true);

  const getVideos = async (): Promise<void> => {
    await Api.getTrendingVideos(props.modifier).then((res) => {
      // thanks to JavaScript sorting being mutable, I have to convert ReadonlyArray to Array first
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
    getVideos();
  }, [props.modifier]);

  const customStyles: TableStyles = {
    table: {
      style: {
        maxHeight: '80vh',
      },
    },
    rows: {
      style: {
        minHeight: '36px', // override the row height
      },
    },
    headCells: {
      style: {
        paddingLeft: '5px', // override the cell padding for head cells
        paddingRight: '5px',
      },
    },
    cells: {
      style: {
        paddingLeft: '5px', // override the cell padding for data cells
        paddingRight: '5px',
      },
    },
  };

  return (
    <>
      <h1>
        <Text id="header.trendingVideos">Trending Videos</Text>
        {GetCurrentNationalitySpan()}
      </h1>
      <DataTable
        {...DefaultDataTableProps}
        columns={columns}
        data={filteredData}
        customStyles={customStyles}
        fixedHeader
        pagination
        paginationComponentOptions={props.dictionary.table.paginationOptions}
        progressComponent={<Text id="text.loading">Loading...</Text>}
        progressPending={pending}
        subHeader
        subHeaderComponent={searchBarComponent}
      />
    </>
  );
};

export default TrendingVideosPage;
