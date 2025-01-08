import SearchBar from '../../components/SearchBar';
import { Dictionary } from '../../i18n/Dictionary';
import * as Api from '../../services/ApiService';
import ActivityRowStyles from '../../style/ActivityRowStyles';
import tableStyle from '../../style/DataTableStyle.module.css';
import '../../style/index.css';
import { NameColumn } from '../../tableTypes/NameColumn';
import { NationalityColumn } from '../../tableTypes/NationalityColumn';
import { PopularVideoColumn } from '../../tableTypes/PopularVideoColumn';
import { YouTubeTwitchCountColumn } from '../../tableTypes/YouTubeTwitchCountColumn';
import { GroupMemberDisplayData } from '../../types/TableDisplayData/GroupMemberDisplayData';
import DefaultDataTableProps from '../../utils/DefaultDataTableProps';
import { YouTubeSubscriberCountPlusTwitchFollowerCountAscendingSort } from '../../utils/sort/VTuberSort';
import { GroupMemberToDisplay } from '../../utils/transform/GroupMemberTransform';
import { FunctionalComponent } from 'preact';
import { Text } from 'preact-i18n';
import { useEffect, useMemo, useState } from 'preact/hooks';
import DataTable, { TableColumn } from 'react-data-table-component';

export interface GroupPageProps {
  groupName: string;
  dictionary: Dictionary;
}

const GroupPage: FunctionalComponent<GroupPageProps> = (
  props: GroupPageProps,
) => {
  document.title = `${props.groupName} | ${props.dictionary.header.title}`;

  const columns: Array<TableColumn<GroupMemberDisplayData>> = [
    NameColumn(),
    {
      ...YouTubeTwitchCountColumn(),
      sortable: true,
      sortFunction: YouTubeSubscriberCountPlusTwitchFollowerCountAscendingSort,
    },
    PopularVideoColumn(),
    NationalityColumn(),
  ];

  // search filter
  const [data, setData] = useState<Array<GroupMemberDisplayData>>([]);
  const [filterName, setFilterName] = useState<string>('');
  const [resetPaginationToggle, setResetPaginationToggle] =
    useState<boolean>(false);
  const filteredData = data.filter(
    (item) =>
      item.name && item.name.toLowerCase().includes(filterName.toLowerCase()),
  );

  const searchBarComponent = useMemo(() => {
    const handleClearName = (): void => {
      if (filterName) {
        setResetPaginationToggle(!resetPaginationToggle);
        setFilterName('');
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
      </div>
    );
  }, [filterName, resetPaginationToggle, props.dictionary]);

  const [pending, setPending] = useState(true);

  const getVTubers = async (): Promise<void> => {
    await Api.getGroupVTubers(props.groupName).then((res) => {
      setData(res.data.VTubers.map((e) => GroupMemberToDisplay(e)));
      setPending(false);
    });
  };

  useEffect(() => {
    getVTubers();
  }, []);

  return (
    <>
      <h1>
        <Text id="header.group">Group</Text>
        <span class="highlightText"> {props.groupName} </span>
        <Text id="header.memberList">members</Text>
      </h1>
      <DataTable
        {...DefaultDataTableProps}
        columns={columns}
        data={filteredData}
        conditionalRowStyles={ActivityRowStyles}
        fixedHeader
        progressComponent={<Text id="text.loading">Loading...</Text>}
        progressPending={pending}
        subHeader
        subHeaderComponent={searchBarComponent}
      />
    </>
  );
};

export default GroupPage;
