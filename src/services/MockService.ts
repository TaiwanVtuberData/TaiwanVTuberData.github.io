import { createServer } from 'miragejs';
import { GroupDataResponse } from '../types/ApiData/GroupData';
import { VTuberDataResponse } from '../types/ApiData/VTuberData';
import { VTuberDebutDataResponse } from '../types/ApiData/VTuberDebutData';
import { VTuberGraduateDataResponse } from '../types/ApiData/VTuberGraduateData';
import { VTuberGrowthDataResponse } from '../types/ApiData/VTuberGrowthData';
import { VTuberPopularityDataResponse } from '../types/ApiData/VTuberPopularityData';
import { AllVTuberMock } from './MockData/AllVTubersMock';
import { DebutVTubersMock } from './MockData/DebutVTubersMock';
import { CloudHorizonMock } from './MockData/GroupMembersMock';
import { GroupMock } from './MockData/GroupMock';
import { GrowingVTubersMock } from './MockData/GrowingVTubersMock';
import { PopularVTubersMock } from './MockData/PopularVTubersMock';

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

      this.get<VTuberGrowthDataResponse>(
        '/:hash/api/v0/growing-vtubers.json',
        () => ({
          VTubers: GrowingVTubersMock,
        })
      );

      this.get<VTuberDebutDataResponse>(
        '/:hash/api/v0/debut-vtubers.json',
        () => ({
          VTubers: DebutVTubersMock,
        })
      );

      this.get<VTuberGraduateDataResponse>(
        '/:hash/api/v0/graduate-vtubers.json',
        () => ({
          VTubers: [],
        })
      );
    },
  });
}
