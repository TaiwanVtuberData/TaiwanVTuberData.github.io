import { FunctionalComponent, h } from 'preact';
import DataTable from 'react-data-table-component';
import ProfileImage from '../../components/ProfileImage';
import ChannelLinks from '../../components/ChannelLinks';

const AllVTubersPage: FunctionalComponent = () => {
  const columns = [
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
      selector: (row: { YouTubeSubscriberCount: number }): number =>
        row.YouTubeSubscriberCount,
      sortable: true,
    },
    {
      name: '團體',
      selector: (row: { group: string }): string => row.group,
    },
    {
      name: '國家',
      selector: (row: { nationality: string }): string => row.nationality,
    },
  ];

  interface VTuberData {
    id: string;
    profileImg: h.JSX.Element | null;
    name: string;
    channelLinks: h.JSX.Element | null;
    YouTubeSubscriberCount: number;
    group: string;
    nationality: string;
  }

  const data: Array<VTuberData> = [
    {
      id: '1',
      profileImg: ProfileImage({
        imgUrl:
          'https://yt3.ggpht.com/CRhdIqMTAjxrPJJcpKYEY_Yot20ByMcBid-nsSCcl8YFRCi2wzS_oQZ0bgx490bodZPZVqvDOQ=s88-c-k-c0x00ffffff-no-rj',
      }),
      name: '杏仁ミル',
      channelLinks: ChannelLinks({
        YouTubeUrl: 'https://www.youtube.com/channel/UCFahBR2wixu0xOex84bXFvg',
        TwitchUrl: 'https://www.twitch.tv/vtuber_amiru',
      }),
      YouTubeSubscriberCount: 380000,
      group: '',
      nationality: 'TW',
    },
    {
      id: '2',
      profileImg: ProfileImage({
        imgUrl:
          'https://yt3.ggpht.com/y_VXsJfNp8sTQCB0lFemCleWB-9HpZ9R2pk7wbCOGrvkpFS3Qa1RAXqUVpgb0NNN9_xzWT446A=s88-c-k-c0x00ffffff-no-rj',
      }),
      name: '李李鈴蘭',
      channelLinks: ChannelLinks({
        YouTubeUrl: 'https://www.youtube.com/channel/UCxWAL-c1psONO_DfG-cq2iA',
      }),
      YouTubeSubscriberCount: 169000,
      group: '雲際線工作室',
      nationality: 'TW',
    },
  ];

  return <DataTable columns={columns} data={data} />;
};

export default AllVTubersPage;
