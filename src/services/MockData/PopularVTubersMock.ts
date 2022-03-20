import { VTuberPopularityData } from '../../types/VTuberPopularityData';

export const PopularVTubersMock: ReadonlyArray<VTuberPopularityData> = [
  {
    id: '1',
    activity: 'active',
    name: '杏仁ミル',
    imgUrl:
      'https://yt3.ggpht.com/CRhdIqMTAjxrPJJcpKYEY_Yot20ByMcBid-nsSCcl8YFRCi2wzS_oQZ0bgx490bodZPZVqvDOQ=s88-c-k-c0x00ffffff-no-rj',
    popularity: 20998,
    YouTube: {
      id: 'UCFahBR2wixu0xOex84bXFvg',
      subscriberCount: 381000,
    },
    Twitch: {
      id: 'vtuber_amiru',
      followerCount: 22552,
    },
    nationality: 'TW',
  },
  {
    id: '2',
    activity: 'active',
    name: '李李鈴蘭',
    popularity: 14496,
    imgUrl:
      'https://yt3.ggpht.com/y_VXsJfNp8sTQCB0lFemCleWB-9HpZ9R2pk7wbCOGrvkpFS3Qa1RAXqUVpgb0NNN9_xzWT446A=s88-c-k-c0x00ffffff-no-rj',
    YouTube: {
      id: 'UCxWAL-c1psONO_DfG-cq2iA',
      subscriberCount: 170000,
    },
    group: '雲際線工作室',
    nationality: 'TW',
  },
  {
    id: '3',
    activity: 'active',
    name: '璐洛洛',
    popularity: 26678,
    imgUrl:
      'https://yt3.ggpht.com/ytc/AKedOLS4CpwnwTNCT3QzxJiqobNLKbRAi44lolzKH1N7=s88-c-k-c0x00ffffff-no-rj',
    YouTube: {
      id: 'UCRf7OJA3azS4RsGd_G96FUw',
      subscriberCount: 138000,
    },
    Twitch: {
      id: 'ruroroisme',
      followerCount: 21440,
    },
    nationality: 'TW',
  },
];
