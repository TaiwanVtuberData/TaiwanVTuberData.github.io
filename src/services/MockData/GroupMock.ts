import { GroupData } from '../../types/ApiData/GroupData';
import { CloudHorizonMock, MeridianProjectMock } from './GroupMembersMock';

export const GroupMock: ReadonlyArray<GroupData> = [
  {
    id: '1',
    name: '雲際線工作室',
    popularity: 28416,
    members: CloudHorizonMock,
  },
  {
    id: '2',
    name: '子午計劃',
    popularity: 9832,
    members: MeridianProjectMock,
  },
];
