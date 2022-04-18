import { VTuberFullData } from '../../types/ApiData/VTuberFullData';

export const MiruMock: VTuberFullData = {
  id: '1',
  activity: 'active',
  name: '杏仁ミル',
  imgUrl:
    'https://yt3.ggpht.com/CRhdIqMTAjxrPJJcpKYEY_Yot20ByMcBid-nsSCcl8YFRCi2wzS_oQZ0bgx490bodZPZVqvDOQ=s88-c-k-c0x00ffffff-no-rj',
  YouTube: {
    id: 'UCFahBR2wixu0xOex84bXFvg',
    subscriberCount: 382000,
  },
  Twitch: {
    id: 'vtuber_amiru',
    followerCount: 22589,
  },
  popularVideo: { type: 'YouTube', id: 'qwK7r3hbZ6k' },
  nationality: 'TW',
  debutDate: '2018-12-26',
};
