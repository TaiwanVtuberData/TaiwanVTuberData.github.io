import { Fragment, FunctionalComponent, h } from 'preact';
import { useEffect, useMemo, useState } from 'preact/hooks';
import { Text } from 'preact-i18n';
import DataTable, { TableColumn } from 'react-data-table-component';
import baseroute from '../../baseroute';
import { Dictionary } from '../../i18n/Dictionary';
import * as Api from '../../services/ApiService';
import { GroupDisplayData } from '../../types/GroupDisplayData';
import SearchBar from '../../components/SearchBar';
import { GroupData } from '../../types/GroupData';
import DefaultDataTableProps from '../../utils/DefaultDataTableProps';
import '../../style/index.css';
import style from './style.module.css';
import tableStyle from '../../style/DataTableStyle.module.css';
import { VTuberData } from '../../types/VTuberData';
import Profile from '../../components/Profile';
import { NameSort } from '../../utils/NameSort';

export interface GroupListPageProps {
  dictionary: Dictionary;
}

const GroupListPage: FunctionalComponent<GroupListPageProps> = (
  props: GroupListPageProps
) => {
  document.title = `${props.dictionary.header.groupList} | ${props.dictionary.header.title}`;
  const columns: Array<TableColumn<GroupDisplayData>> = [
    {
      name: <Text id="table.displayName">Name</Text>,
      width: '20%',
      sortable: true,
      sortFunction: NameSort,
      cell: (row: { name: string }): h.JSX.Element => (
        <a class={tableStyle.groupLink} href={`${baseroute}/group/${row.name}`}>
          {row.name}
        </a>
      ),
    },
    {
      name: <Text id="table.popularity">Popularity</Text>,
      width: `15%`,
      right: true,
      sortable: true,
      selector: (row: { popularity: number }): number => row.popularity,
    },
    {
      name: <Text id="table.averageSubscriberCount">Average Subscribers</Text>,
      width: `15%`,
      right: true,
      sortable: true,
      selector: (row: { averageSubscriberCount: number }): number =>
        row.averageSubscriberCount,
    },
    {
      name: <Text id="table.totalSubscriberCount">Total Subscribers</Text>,
      width: `15%`,
      right: true,
      sortable: true,
      selector: (row: { totalSubscriberCount: number }): number =>
        row.totalSubscriberCount,
    },
    {
      name: <Text id="table.memberCount">Member Count</Text>,
      width: `10%`,
      right: true,
      sortable: true,
      selector: (row: { memberCount: number }): number => row.memberCount,
    },
    {
      name: <Text id="table.memberList">Members</Text>,
      width: `25%`,
      cell: (row: {
        memberList: ReadonlyArray<VTuberData>;
      }): h.JSX.Element | null => (
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
          e.name.toLowerCase().includes(filterGroupMember.toLowerCase())
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

  const accumulator = (prev: number, current: VTuberData): number =>
    prev +
    (current.YouTube?.subscriberCount ?? 0) +
    (current.Twitch?.followerCount ?? 0);

  const dataToDisplayData = (e: GroupData): GroupDisplayData => ({
    id: e.id,
    name: e.name,
    popularity: e.popularity,
    averageSubscriberCount:
      e.members.length !== 0
        ? Math.round(e.members.reduce(accumulator, 0) / e.members.length)
        : 0,
    totalSubscriberCount: e.members.reduce(accumulator, 0),
    memberCount: e.members.length,
    memberList: e.members,
  });

  const [pending, setPending] = useState(true);

  const getVTubers = async (): Promise<void> => {
    await Api.getGroups().then((res) => {
      setData(res.data.groups.map((e) => dataToDisplayData(e)));
      setPending(false);
    });
  };

  useEffect(() => {
    getVTubers();
  }, []);

  return (
    <Fragment>
      <h1>
        <Text id="header.groupList">Group List</Text>
      </h1>
      <DataTable
        {...DefaultDataTableProps}
        columns={columns}
        data={filteredData}
        fixedHeader
        pagination
        paginationComponentOptions={props.dictionary.table.paginationOptions}
        progressComponent={props.dictionary.table.loading}
        progressPending={pending}
        subHeader
        subHeaderComponent={searchBarComponent}
      />
    </Fragment>
  );
};

export default GroupListPage;
