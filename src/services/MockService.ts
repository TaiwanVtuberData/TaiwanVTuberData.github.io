import { createServer } from 'miragejs';
import { VTuberDataResponse } from '../types/VTuberData';

export function MockService() {
  createServer({
    routes() {
      this.urlPrefix = '/api/v0';

      this.get<VTuberDataResponse>('/vtubers', () => ({
        VTubers: [
          {
            id: '1',
            name: '杏仁ミル',
            imgUrl:
              'https://yt3.ggpht.com/CRhdIqMTAjxrPJJcpKYEY_Yot20ByMcBid-nsSCcl8YFRCi2wzS_oQZ0bgx490bodZPZVqvDOQ=s88-c-k-c0x00ffffff-no-rj',
            YouTube: {
              url: 'https://www.youtube.com/channel/UCFahBR2wixu0xOex84bXFvg',
              subscriberCount: 380000,
            },
            Twitch: {
              url: 'https://www.twitch.tv/vtuber_amiru',
              followerCount: 22371,
            },
            nationality: 'TW',
          },
          {
            id: '2',
            name: '李李鈴蘭',
            imgUrl:
              'https://yt3.ggpht.com/y_VXsJfNp8sTQCB0lFemCleWB-9HpZ9R2pk7wbCOGrvkpFS3Qa1RAXqUVpgb0NNN9_xzWT446A=s88-c-k-c0x00ffffff-no-rj',
            YouTube: {
              url: 'https://www.youtube.com/channel/UCxWAL-c1psONO_DfG-cq2iA',
              subscriberCount: 380000,
            },
            group: '雲際線工作室',
            nationality: 'TW',
          },
          {
            id: '3',
            name: '猫宮 バニラ',
            imgUrl:
              'https://static-cdn.jtvnw.net/jtv_user_pictures/1594218f-190e-458f-9f81-fb80a1dee13f-profile_image-300x300.png',
            Twitch: {
              url: 'https://www.twitch.tv/vanilla_shironeko',
              followerCount: 17901,
            },
            nationality: 'TW',
          },
        ],
      }));
    },
  });
}
