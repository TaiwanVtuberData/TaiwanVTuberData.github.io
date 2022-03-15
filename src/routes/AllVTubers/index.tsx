import { FunctionalComponent, h } from 'preact';
import DataTable, { TableColumn } from 'react-data-table-component';
import { useEffect, useState } from 'preact/hooks';
import * as Api from '../../services/ApiService';
import ProfileImage from '../../components/ProfileImage';
import ChannelLinks from '../../components/ChannelLinks';
import { VTuberData } from '../../types/VTuberData';
import { DataTablePaginationComponent } from '../../components/DataTablePaginationComponentOptions';
import { YouTubeSubscriberCountSort } from '../../utils/YouTubeSubscriberCountSort';
import { VTuberDisplayData } from '../../types/VTuberDisplayData';

const AllVTubersPage: FunctionalComponent = () => {
  const columns: Array<TableColumn<VTuberDisplayData>> = [
    {
      name: '',
      cell: (row: { profileImg: h.JSX.Element | null }): h.JSX.Element | null =>
        row.profileImg,
    },
    {
      name: '名稱',
      selector: (row: { name: string }): string => row.name,
    },
    {
      name: '相關連結',
      cell: (row: {
        channelLinks: h.JSX.Element | null;
      }): h.JSX.Element | null => row.channelLinks,
    },
    {
      name: 'YouTube 訂閱人數',
      selector: (row: {
        hasYouTube: boolean;
        YouTubeSubscriberCount?: number;
      }): number | string =>
        row.hasYouTube ? row.YouTubeSubscriberCount ?? '未顯示人數' : '',
      sortable: true,
      sortFunction: YouTubeSubscriberCountSort,
    },
    {
      name: 'Twitch 追隨人數',
      selector: (row: {
        hasTwitch: boolean;
        TwitchFollowerCount: number;
      }): number | string => (row.hasTwitch ? row.TwitchFollowerCount : ''),
      sortable: true,
    },
    {
      name: '團體',
      selector: (row: { group?: string }): string => row.group ?? '',
    },
    {
      name: '國家',
      selector: (row: { nationality?: string }): string =>
        row.nationality ?? '',
    },
  ];

  const [data, setData] = useState<Array<VTuberDisplayData>>([]);

  const dataToDisplayData = (e: VTuberData): VTuberDisplayData => ({
    id: e.id,
    profileImg: ProfileImage({ imgUrl: e.imgUrl }),
    name: e.name,
    channelLinks: ChannelLinks({
      YouTubeId: e.YouTube?.id,
      TwitchId: e.Twitch?.id,
    }),
    hasYouTube: e.YouTube !== undefined,
    YouTubeSubscriberCount: e.YouTube?.subscriberCount,
    hasTwitch: e.Twitch !== undefined,
    TwitchFollowerCount: e.Twitch?.followerCount ?? 0,
    group: e.group,
    nationality: e.nationality,
  });

  const [pending, setPending] = useState(true);

  const getVTubers = async (): Promise<void> => {
    await Api.getVTubers().then((res) => {
      setData(res.data.VTubers.map((e) => dataToDisplayData(e)));
      setPending(false);
    });
  };

  useEffect(() => {
    getVTubers();
  }, []);

  return (
    <DataTable
      columns={columns}
      data={data}
      progressPending={pending}
      progressComponent={'載入中'}
      pagination
      paginationComponentOptions={DataTablePaginationComponent}
    />
  );
};

export default AllVTubersPage;
