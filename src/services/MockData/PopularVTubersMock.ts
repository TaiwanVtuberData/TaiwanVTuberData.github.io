import { VTuberPopularityData } from '../../types/ApiData/VTuberPopularityData';

export const PopularVTubersMock: ReadonlyArray<VTuberPopularityData> = [
  {
    id: '1',
    activity: 'active',
    name: '杏仁ミル',
    imgUrl:
      'https://yt3.ggpht.com/CRhdIqMTAjxrPJJcpKYEY_Yot20ByMcBid-nsSCcl8YFRCi2wzS_oQZ0bgx490bodZPZVqvDOQ=s88-c-k-c0x00ffffff-no-rj',
    YouTube: {
      id: 'UCFahBR2wixu0xOex84bXFvg',
      subscriber: {
        tag: 'has',
        count: 382000,
      },
      popularity: 20998,
    },
    Twitch: {
      id: 'vtuber_amiru',
      followerCount: 22552,
      popularity: 20998,
    },
    nationality: 'TW',
  },
  {
    id: '2',
    activity: 'active',
    name: '李李鈴蘭',
    imgUrl:
      'https://yt3.ggpht.com/y_VXsJfNp8sTQCB0lFemCleWB-9HpZ9R2pk7wbCOGrvkpFS3Qa1RAXqUVpgb0NNN9_xzWT446A=s88-c-k-c0x00ffffff-no-rj',
    YouTube: {
      id: 'UCxWAL-c1psONO_DfG-cq2iA',
      subscriber: {
        tag: 'has',
        count: 170000,
      },
      popularity: 14496,
    },
    group: '雲際線工作室',
    nationality: 'TW',
  },
  {
    id: '3',
    activity: 'active',
    name: '璐洛洛',
    imgUrl:
      'https://yt3.ggpht.com/ytc/AKedOLS4CpwnwTNCT3QzxJiqobNLKbRAi44lolzKH1N7=s88-c-k-c0x00ffffff-no-rj',
    YouTube: {
      id: 'UCRf7OJA3azS4RsGd_G96FUw',
      subscriber: {
        tag: 'has',
        count: 138000,
      },
      popularity: 26678,
    },
    Twitch: {
      id: 'ruroroisme',
      followerCount: 21440,
      popularity: 26678,
    },
    nationality: 'TW',
  },
];
