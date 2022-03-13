import { FunctionalComponent, h } from 'preact';
import DataTable from 'react-data-table-component';
import ProfileElement from '../../components/ProfileElement';

const AllVTubersPage: FunctionalComponent = () => {
  const columns = [
    {
      name: '名稱',
      selector: (row: { profile: unknown }): unknown => row.profile,
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
    profile: unknown;
    YouTubeSubscriberCount: number;
    group: string;
    nationality: string;
  }

  const data: Array<VTuberData> = [
    {
      id: '1',
      profile: ProfileElement({
        name: '杏仁ミル',
        imgUrl:
          'https://yt3.ggpht.com/CRhdIqMTAjxrPJJcpKYEY_Yot20ByMcBid-nsSCcl8YFRCi2wzS_oQZ0bgx490bodZPZVqvDOQ=s88-c-k-c0x00ffffff-no-rj',
        YouTubeUrl: 'https://www.youtube.com/channel/UCFahBR2wixu0xOex84bXFvg',
        TwitchUrl: 'https://www.twitch.tv/vtuber_amiru',
      }),
      YouTubeSubscriberCount: 380000,
      group: '',
      nationality: 'TW',
    },
    {
      id: '2',
      profile: ProfileElement({
        name: '李李鈴蘭',
        imgUrl:
          'https://yt3.ggpht.com/y_VXsJfNp8sTQCB0lFemCleWB-9HpZ9R2pk7wbCOGrvkpFS3Qa1RAXqUVpgb0NNN9_xzWT446A=s88-c-k-c0x00ffffff-no-rj',
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
