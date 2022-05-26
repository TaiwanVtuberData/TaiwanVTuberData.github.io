import { Fragment, FunctionalComponent, h } from 'preact';
import { useEffect, useMemo, useState } from 'preact/hooks';
import { Text } from 'preact-i18n';
import DataTable, {
  TableColumn,
  TableStyles,
} from 'react-data-table-component';
import { Dictionary } from '../../i18n/Dictionary';
import * as Api from '../../services/ApiService';
import SearchBar from '../../components/SearchBar';
import DefaultDataTableProps from '../../utils/DefaultDataTableProps';
import '../../style/index.css';
import tableStyle from '../../style/DataTableStyle.module.css';
import ProfileImage from '../../components/ProfileImage';
import { VideoPopularityData } from '../../types/ApiData/VideoPopularityData';
import { VideoPopularityDisplayData } from '../../types/TableDisplayData/VideoPopularityDisplayData';
import VideoLink from '../../components/VideoLink';
import { getFormattedDateTime } from '../../utils/DateTimeUtils';
import DropDownList from '../../components/DropDownList';
import { GoToPage } from '../../utils/TypeSafeRouting';
import { TrendingVideosModifier } from '../../types/ApiTypes';

export interface TrendingVideosPageProps {
  dictionary: Dictionary;
  modifier: TrendingVideosModifier;
}

const TrendingVideosPage: FunctionalComponent<TrendingVideosPageProps> = (
  props: TrendingVideosPageProps
) => {
  document.title = `${props.dictionary.header.trendingVideos} | ${props.dictionary.header.title}`;

  const columns: Array<TableColumn<VideoPopularityDisplayData>> = [
    {
      name: '#',
      selector: (row: { ranking: number }): number => row.ranking,
      sortable: true,
      wrap: false,
      width: '70px',
    },
    {
      name: '',
      cell: (row: { profileImg: h.JSX.Element | null }): h.JSX.Element | null =>
        row.profileImg,
      width: '75px',
    },
    {
      name: <Text id="table.displayName">Name</Text>,
      selector: (row: { name: string }): string => row.name,
      wrap: true,
      maxWidth: '150px',
    },
    {
      name: <Text id="table.title">Title</Text>,
      selector: (row: { title: string }): string => row.title,
      wrap: true,
    },
    {
      name: <Text id="table.video">Video</Text>,
      cell: (row: { videoLink: h.JSX.Element | null }): h.JSX.Element | null =>
        row.videoLink,
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
  const [filterName, setFilterName] = useState<string>('');
  const [filterTitle, setFilterTitle] = useState<string>('');
  const [resetPaginationToggle, setResetPaginationToggle] =
    useState<boolean>(false);
  const filteredData = data
    .filter(
      (item) =>
        item.name && item.name.toLowerCase().includes(filterName.toLowerCase())
    )
    .filter((item) => {
      if (item.title === undefined) return true;
      return item.title.toLowerCase().includes(filterTitle.toLowerCase());
    });

  const searchBarComponent = useMemo(() => {
    const handleClearName = (): void => {
      if (filterName) {
        setResetPaginationToggle(!resetPaginationToggle);
        setFilterName('');
      }
    };

    const handleClearTitle = (): void => {
      if (filterTitle) {
        setResetPaginationToggle(!resetPaginationToggle);
        setFilterTitle('');
      }
    };

    const optionValue: Array<{
      option: h.JSX.Element;
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

    return (
      <div class={tableStyle.searchBarGroup}>
        <DropDownList
          tipText={props.dictionary.table.options}
          value={props.modifier}
          optionValue={optionValue}
          onChange={(e: any) =>
            GoToPage({
              type: 'trending-videos',
              viewCountSortOrder: e.target.value,
            })
          }
        />
        <SearchBar
          placeholderText={props.dictionary.table.searchByDisplayName}
          onFilter={(e: any): void => setFilterName(e.target.value)}
          onClear={handleClearName}
          filterText={filterName}
        />
        <SearchBar
          placeholderText={props.dictionary.table.searchByTitle}
          onFilter={(e: any): void => setFilterTitle(e.target.value)}
          onClear={handleClearTitle}
          filterText={filterTitle}
        />
      </div>
    );
  }, [
    filterName,
    filterTitle,
    resetPaginationToggle,
    props.modifier,
    props.dictionary,
  ]);

  const dataToDisplayData = (
    e: VideoPopularityData,
    ranking: number
  ): VideoPopularityDisplayData => ({
    id: e.id,
    profileImg: ProfileImage({ VTuberId: e.id, imgUrl: e.imgUrl }),
    name: e.name,
    title: e.title,
    videoLink: VideoLink({
      thumbnailUrl: e.thumbnailUrl,
      videoUrl: e.videoUrl,
    }),
    viewCount: e.viewCount,
    uploadTime: new Date(e.uploadTime),
    ranking: ranking,
  });

  const [pending, setPending] = useState(true);

  const getVideos = async (): Promise<void> => {
    await Api.getTrendingVideos(props.modifier).then((res) => {
      // thanks to JavaScript sorting being mutable, I have to convert ReadonlyArray to Array first
      setData(
        res.data.videos
          .map((e) => e)
          .sort((a, b) => b.viewCount - a.viewCount)
          .map((e, index) => dataToDisplayData(e, index + 1))
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
    <Fragment>
      <h1>
        <Text id="header.trendingVideos">Trending Videos</Text>
      </h1>
      <DataTable
        {...DefaultDataTableProps}
        columns={columns}
        data={filteredData}
        customStyles={customStyles}
        fixedHeader
        pagination
        paginationComponentOptions={props.dictionary.table.paginationOptions}
        progressComponent={<Text id="table.loading">Loading...</Text>}
        progressPending={pending}
        subHeader
        subHeaderComponent={searchBarComponent}
      />
    </Fragment>
  );
};

export default TrendingVideosPage;
