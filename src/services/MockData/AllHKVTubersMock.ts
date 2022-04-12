import { VTuberData } from '../../types/ApiData/VTuberData';

export const AllHKVTubersMock: ReadonlyArray<VTuberData> = [
  {
    id: '1',
    activity: 'active',
    name: '說書客',
    imgUrl:
      'https://yt3.ggpht.com/hXtARGdv3R46CEN_agH3NfZffztvoqiR906qa-DmLFQcukW9DJ_4j9DPQA8otv6hyMnKm_J8hw=s88-c-k-c0x00ffffff-no-rj',
    YouTube: {
      id: 'UCa6rKAjusYEugf3Y6sPGTFg',
      subscriberCount: 41600,
    },
    popularVideo: { type: 'YouTube', id: 'MzxTni0vscA' },
    nationality: 'HK',
  },
];
