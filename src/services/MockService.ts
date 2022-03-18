import { createServer } from 'miragejs';
import { GroupDataResponse } from '../types/GroupData';
import { VTuberDataResponse } from '../types/VTuberData';
import { AllVTuberMock } from './AllVTubersMock';
import { CloudHorizonMock } from './GroupMembersMock';
import { GroupMock } from './GroupMock';

export function MockService(): void {
  createServer({
    routes() {
      this.urlPrefix =
        'https://cdn.statically.io/gh/nh60211as/TaiwanVtuberTrackingDataJson';

      this.get<VTuberDataResponse>('/:hash/api/v0/vtubers.json', () => ({
        VTubers: AllVTuberMock,
      }));

      this.get<VTuberDataResponse>(
        '/:hash/api/v0/groups/:groupName/vtubers.json',
        () => ({
          VTubers: CloudHorizonMock,
        })
      );

      this.get<GroupDataResponse>('/:hash/api/v0/groups.json', () => ({
        groups: GroupMock,
      }));
    },
  });
}
