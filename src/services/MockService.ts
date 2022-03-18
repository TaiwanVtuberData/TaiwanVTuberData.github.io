import { createServer } from 'miragejs';
import { VTuberDataResponse } from '../types/VTuberData';
import { AllVTuberMock } from './AllVTubersMock';
import { GroupMembersMock } from './GroupMembersMock';

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
          VTubers: GroupMembersMock,
        })
      );
    },
  });
}
