import { ENFORCE_YOUTUBE_COMPLIANCE } from '../../Config';
import Profile from '../../components/Profile';
import QuestionMarkToolTip from '../../components/QuestionMarkToolTip';
import SearchBar from '../../components/SearchBar';
import { Dictionary } from '../../i18n/Dictionary';
import * as Api from '../../services/ApiService';
import tableStyle from '../../style/DataTableStyle.module.css';
import '../../style/index.css';
import { VTuberData } from '../../types/ApiData/VTuberData';
import { GroupDisplayData } from '../../types/TableDisplayData/GroupDisplayData';
import DefaultDataTableProps from '../../utils/DefaultDataTableProps';
import { GetCurrentNationalitySpan } from '../../utils/NationalityUtils';
import { GetRoute } from '../../utils/TypeSafeRouting';
import { NameSort } from '../../utils/sort/NameSort';
import { groupToDisplay } from '../../utils/transform/GroupTransform';
import style from './style.module.css';
import { FunctionalComponent, JSX } from 'preact';
import { Text } from 'preact-i18n';
import { useEffect, useMemo, useState } from 'preact/hooks';
import DataTable, { TableColumn } from 'react-data-table-component';

export interface GroupListPageProps {
  dictionary: Dictionary;
}

const GroupListPage: FunctionalComponent<GroupListPageProps> = (
  props: GroupListPageProps,
) => {
  document.title = `${props.dictionary.header.groupList} | ${props.dictionary.header.title}`;
  const columns: Array<TableColumn<GroupDisplayData>> = [
    {
      name: <Text id="table.displayName">Name</Text>,
      cell: (row: { name: string }): JSX.Element => (
        <a href={GetRoute({ type: 'group', name: row.name })}>{row.name}</a>
      ),
      sortFunction: NameSort,
      sortable: true,
      minWidth: '100px',
      maxWidth: '150px',
    },
    {
      name: <Text id="table.popularity">Popularity</Text>,
      selector: (row: { livestreamPopularity: number }): number =>
        row.livestreamPopularity,
      right: true,
      sortable: true,
      minWidth: '50px',
      maxWidth: '125px',
      omit: ENFORCE_YOUTUBE_COMPLIANCE,
    },
    {
      name: <Text id="table.averageSubscriberCount">Average Subscribers</Text>,
      selector: (row: { averageSubscriberCount: number }): number =>
        row.averageSubscriberCount,
      right: true,
      sortable: true,
      minWidth: '50px',
      maxWidth: '125px',
      omit: ENFORCE_YOUTUBE_COMPLIANCE,
    },
    {
      name: <Text id="table.totalSubscriberCount">Total Subscribers</Text>,
      selector: (row: { totalSubscriberCount: number }): number =>
        row.totalSubscriberCount,
      right: true,
      sortable: true,
      minWidth: '50px',
      maxWidth: '125px',
      omit: ENFORCE_YOUTUBE_COMPLIANCE,
    },
    {
      name: <Text id="table.memberCount">Member Count</Text>,
      selector: (row: { memberCount: number }): number => row.memberCount,
      right: true,
      sortable: true,
      minWidth: '50px',
      maxWidth: '125px',
    },
    {
      name: <Text id="table.memberList">Members</Text>,
      cell: (row: {
        memberList: ReadonlyArray<VTuberData>;
      }): JSX.Element | null => (
        <div class={style.profileGrid}>
          {row.memberList.map((e) => (
            <Profile key={e.id} VTuber={e} />
          ))}
        </div>
      ),
    },
  ];

  // search filter
  const [data, setData] = useState<Array<GroupDisplayData>>([]);
  const [filterGroup, setFilterGroup] = useState<string>('');
  const [filterGroupMember, setFilterGroupMember] = useState<string>('');
  const [resetPaginationToggle, setResetPaginationToggle] =
    useState<boolean>(false);
  const filteredData = data
    .filter((item) => {
      if (item.name === undefined) return true;
      return item.name.toLowerCase().includes(filterGroup.toLowerCase());
    })
    .filter((item) => {
      if (item.memberList === undefined) return true;
      return item.memberList
        .map((e) =>
          e.name.toLowerCase().includes(filterGroupMember.toLowerCase()),
        )
        .includes(true);
    });

  const searchBarComponent = useMemo(() => {
    const handleClearGroup = (): void => {
      if (filterGroup) {
        setResetPaginationToggle(!resetPaginationToggle);
        setFilterGroup('');
      }
    };

    const handleClearGroupMember = (): void => {
      if (filterGroupMember) {
        setResetPaginationToggle(!resetPaginationToggle);
        setFilterGroupMember('');
      }
    };

    return (
      <div class={tableStyle.searchBarGroup}>
        <SearchBar
          placeholderText={props.dictionary.table.searchByGroup}
          onFilter={(e: any): void => setFilterGroup(e.target.value)}
          onClear={handleClearGroup}
          filterText={filterGroup}
        />
        <SearchBar
          placeholderText={props.dictionary.table.searchByGroupMember}
          onFilter={(e: any): void => setFilterGroupMember(e.target.value)}
          onClear={handleClearGroupMember}
          filterText={filterGroupMember}
        />
      </div>
    );
  }, [filterGroup, filterGroupMember, resetPaginationToggle, props.dictionary]);

  const [pending, setPending] = useState(true);

  const getVTubers = async (): Promise<void> => {
    await Api.getGroups().then((res) => {
      setData(
        res.data.groups
          .map((e) => groupToDisplay(e))
          .sort((a, b) => b.livestreamPopularity - a.livestreamPopularity), // sort in descending order
      );
      setPending(false);
    });
  };

  useEffect(() => {
    getVTubers();
  }, []);

  return (
    <>
      <h1>
        <Text id="header.groupList">Group List</Text>
        {GetCurrentNationalitySpan()}
        <QuestionMarkToolTip
          width="300px"
          fontSize="13px"
          text={<Text id="toolTip.groupList">tooltip text</Text>}
        />
      </h1>
      <DataTable
        {...DefaultDataTableProps}
        columns={columns}
        data={filteredData}
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

export default GroupListPage;
