import { createServer } from 'miragejs';
import { GroupDataResponse } from '../types/GroupData';
import { VTuberDataResponse } from '../types/VTuberData';
import { VTuberDebutDataResponse } from '../types/VTuberDebutData';
import { VTuberPopularityDataResponse } from '../types/VTuberPopularityData';
import { AllVTuberMock } from './AllVTubersMock';
import { DebutVTubersMock } from './DebutVTubersMock';
import { CloudHorizonMock } from './GroupMembersMock';
import { GroupMock } from './GroupMock';
import { PopularVTubersMock } from './PopularVTubersMock';

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

      this.get<VTuberPopularityDataResponse>(
        '/:hash/api/v0/popular-vtubers.json',
        () => ({
          VTubers: PopularVTubersMock,
        })
      );

      this.get<VTuberDebutDataResponse>(
        '/:hash/api/v0/debut-vtubers.json',
        () => ({
          VTubers: DebutVTubersMock,
        })
      );
    },
  });
}
