import { createServer } from 'miragejs';
import { VTuberDataResponse } from '../types/VTuberData';

export function MockService() {
  createServer({
    routes() {
      this.urlPrefix =
        'https://cdn.statically.io/gh/nh60211as/TaiwanVtuberTrackingDataJson';

      this.get<VTuberDataResponse>('/:hash/api/v0/vtubers.json', () => ({
        VTubers: [
          {
            id: '1',
            activity: 'active',
            name: '杏仁ミル',
            imgUrl:
              'https://yt3.ggpht.com/CRhdIqMTAjxrPJJcpKYEY_Yot20ByMcBid-nsSCcl8YFRCi2wzS_oQZ0bgx490bodZPZVqvDOQ=s88-c-k-c0x00ffffff-no-rj',
            YouTube: {
              id: 'UCFahBR2wixu0xOex84bXFvg',
              subscriberCount: 380000,
            },
            Twitch: {
              id: 'vtuber_amiru',
              followerCount: 22371,
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
              subscriberCount: 380000,
            },
            group: '雲際線工作室',
            nationality: 'TW',
          },
          {
            id: '3',
            activity: 'active',
            name: '猫宮 バニラ',
            imgUrl:
              'https://static-cdn.jtvnw.net/jtv_user_pictures/1594218f-190e-458f-9f81-fb80a1dee13f-profile_image-300x300.png',
            Twitch: {
              id: 'vanilla_shironeko',
              followerCount: 17901,
            },
            nationality: 'TW',
          },
        ],
      }));

      this.get<VTuberDataResponse>(
        '/:hash/api/v0/groups/:groupName/vtubers.json',
        () => ({
          VTubers: [
            {
              id: '1',
              activity: 'active',
              name: '李李鈴蘭',
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
              id: '2',
              activity: 'active',
              name: '悠白',
              imgUrl:
                'https://yt3.ggpht.com/ytc/AKedOLT45F-wtnSlvOYUFPT6kT8bVCnmhbrNJk1tqrIx=s88-c-k-c0x00ffffff-no-rj',
              YouTube: {
                id: 'UC-o-1qjKkMLq-ZFxXIzOUBQ',
                subscriberCount: 60000,
              },
              group: '雲際線工作室',
              nationality: 'TW',
            },
            {
              id: '3',
              activity: 'active',
              name: '瑪格麗特．溫特斯',
              imgUrl:
                'https://yt3.ggpht.com/LmqWHwQzqspXt0i0FtMHbhLykq-q9aYRKp1GiLwnY7VNl0Jgfukehm4lRJBu80AxsH_LNa4kqA=s88-c-k-c0x00ffffff-no-rj',
              YouTube: {
                id: 'UCJ4VZaUiVC2vpN7TXG85M5g',
                subscriberCount: 24800,
              },
              group: '雲際線工作室',
              nationality: 'TW',
            },
            {
              id: '4',
              activity: 'active',
              name: '神稻櫻火',
              imgUrl:
                'https://yt3.ggpht.com/__E4VedeoEpLn1OPMqodtM4urz99mFfhilyFzCmJJJ_FnpLr6MdrXrLwPYe7aR7lvkmk3M40Bv4=s88-c-k-c0x00ffffff-no-rj',
              YouTube: {
                id: 'UC_soGpcb7SORsk5yzHLMdTQ',
                subscriberCount: 22700,
              },
              group: '雲際線工作室',
              nationality: 'TW',
            },
          ],
        })
      );
    },
  });
}
