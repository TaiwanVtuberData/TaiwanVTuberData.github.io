import * as Api from "../../services/ApiService";
import { FunctionalComponent, JSX } from "preact";
import { Text } from "preact-i18n";
import { useState, useMemo, useEffect } from "preact/hooks";
import DataTable, {
  Media,
  TableColumn,
  TableStyles,
} from "react-data-table-component";
import ProfileImagePopup from "../../components/ProfileImagePopup";
import SearchBar from "../../components/SearchBar";
import { Dictionary } from "../../i18n/Dictionary";
import { VideoColumn } from "../../tableTypes/VideoColumn";
import { LivestreamDisplayData } from "../../types/TableDisplayData/LivestreamDisplayData";
import {
  findClosestSortedDateIndex,
  getFormattedDateTime,
} from "../../utils/DateTimeUtils";
import DefaultDataTableProps from "../../utils/DefaultDataTableProps";
import { GetCurrentNationalitySpan } from "../../utils/NationalityUtils";
import { LivestreamToDisplayData } from "../../utils/transform/LivestreamTransform";
import tableStyle from "../../style/DataTableStyle.module.css";

export interface LivestreamsPageProps {
  dictionary: Dictionary;
}

const LivestreamsPage: FunctionalComponent<LivestreamsPageProps> = (
  props: LivestreamsPageProps,
) => {
  document.title = `${props.dictionary.header.livestreaming} | ${props.dictionary.header.title}`;

  const columns: Array<TableColumn<LivestreamDisplayData>> = [
    {
      name: <Text id="table.displayName">Name</Text>,
      cell: (row: {
        VTuberId: string;
        imgUrl: string | null;
        name: string;
      }): JSX.Element => (
        <ProfileImagePopup
          VTuberId={row.VTuberId}
          imgUrl={row.imgUrl}
          name={row.name}
        />
      ),
    },
    {
      ...VideoColumn(),
      width: "200px",
    },
    {
      name: <Text id="table.startTime">Start Time</Text>,
      selector: (row: { startTime: Date }): string =>
        getFormattedDateTime(row.startTime),
      sortable: true,
      wrap: true,
    },
    {
      name: <Text id="table.title">Title</Text>,
      selector: (row: { title: string | null }): string => row.title ?? "",
      wrap: true,
      hide: Media.SM,
    },
  ];

  // search filter
  const [data, setData] = useState<Array<LivestreamDisplayData>>([]);
  const [filterName, setFilterName] = useState<string>("");
  const [filterTitle, setFilterTitle] = useState<string>("");
  const [resetPaginationToggle, setResetPaginationToggle] =
    useState<boolean>(false);
  const filteredData = data
    .filter(
      (item) =>
        item.name && item.name.toLowerCase().includes(filterName.toLowerCase()),
    )
    .filter((item) => {
      if (item.title === null) return true;
      return item.title.toLowerCase().includes(filterTitle.toLowerCase());
    });

  const searchBarComponent = useMemo(() => {
    const handleClearName = (): void => {
      if (filterName) {
        setResetPaginationToggle(!resetPaginationToggle);
        setFilterName("");
      }
    };

    const handleClearTitle = (): void => {
      if (filterTitle) {
        setResetPaginationToggle(!resetPaginationToggle);
        setFilterTitle("");
      }
    };

    return (
      <div class={tableStyle.searchBarGroup}>
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
  }, [filterName, filterTitle, resetPaginationToggle, props.dictionary]);
  const [pending, setPending] = useState(true);

  const getLivestreams = async (): Promise<void> => {
    await Api.getLivestreams("all").then((res) => {
      const arrayData: Array<LivestreamDisplayData> = res.data.livestreams
        .map((e) => e)
        .map((e, index) => LivestreamToDisplayData(e, index))
        // what a great Date API, thanks javascript
        .sort((a, b) => a.startTime.getTime() - b.startTime.getTime());
      // thanks to JavaScript sorting being mutable, I have to convert ReadonlyArray to Array first
      setData(arrayData);
      setPending(false);

      // TODO: this is a hack to find the closest livestream
      setTimeout(() => {
        // Note: document.getElementById('row-{index}') only work because array data id is set to their index
        const currentTime = new Date();
        currentTime.setHours(currentTime.getHours() - 1);
        const closestToNow = findClosestSortedDateIndex(arrayData, currentTime);

        // scroll to best row - 1 because the header will block the full view of best row
        document
          .getElementById(`row-${Math.max(0, closestToNow - 1)}`)
          ?.scrollIntoView({ behavior: "smooth" });
      }, 500);
    });
  };

  useEffect(() => {
    getLivestreams();
  }, []);

  const customStyles: TableStyles = {
    rows: {
      style: {
        height: "120px", // fix row height so scrolling won't be affected by image not rendered
      },
    },
    headCells: {
      style: {
        paddingLeft: "5px", // override the cell padding for head cells
        paddingRight: "5px",
      },
    },
    cells: {
      style: {
        paddingLeft: "5px", // override the cell padding for data cells
        paddingRight: "5px",
      },
    },
  };

  return (
    <>
      <h1>
        <Text id="header.livestreaming">Streaming Now</Text>
        {GetCurrentNationalitySpan()}
      </h1>
      <DataTable
        {...DefaultDataTableProps}
        columns={columns}
        data={filteredData}
        customStyles={customStyles}
        fixedHeader
        progressComponent={<Text id="text.loading">Loading...</Text>}
        progressPending={pending}
        subHeader
        subHeaderComponent={searchBarComponent}
      />
    </>
  );
};

export default LivestreamsPage;
