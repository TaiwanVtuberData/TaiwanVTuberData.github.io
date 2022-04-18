import { createServer } from 'miragejs';
import { GroupDataResponse } from '../types/ApiData/GroupData';
import { UpdateTimeResponse } from '../types/ApiData/UpdateTime';
import { VideoPopularityDataResponse } from '../types/ApiData/VideoPopularityData';
import { VTuberDataResponse } from '../types/ApiData/VTuberData';
import { VTuberDebutDataResponse } from '../types/ApiData/VTuberDebutData';
import { SingleVTuberFullDataResponse } from '../types/ApiData/VTuberFullData';
import { VTuberGraduateDataResponse } from '../types/ApiData/VTuberGraduateData';
import { VTuberGrowthDataResponse } from '../types/ApiData/VTuberGrowthData';
import { VTuberPopularityDataResponse } from '../types/ApiData/VTuberPopularityData';
import { AllHKVTubersMock } from './MockData/AllHKVTubersMock';
import { AllVTuberMock } from './MockData/AllVTubersMock';
import { DebutVTubersMock } from './MockData/DebutVTubersMock';
import { CloudHorizonMock } from './MockData/GroupMembersMock';
import { GroupMock } from './MockData/GroupMock';
import { GrowingVTubersMock } from './MockData/GrowingVTubersMock';
import { PopularVideosMock } from './MockData/PopularVideosMock';
import { PopularVTubersMock } from './MockData/PopularVTubersMock';
import { LilyMock } from './MockData/LilyMock';
import { MiruMock } from './MockData/MiruMock';
import { UpdateTimeMock } from './MockData/UpdateTimeMock';

export function MockService(): void {
  createServer({
    routes() {
      this.urlPrefix =
        'https://cdn.statically.io/gh/TaiwanVtuberData/TaiwanVTuberTrackingDataJson';

      this.get<UpdateTimeResponse>(
        '/:hash/api/v0/all/update-time.json',
        () => ({
          time: UpdateTimeMock,
        })
      );

      this.get<SingleVTuberFullDataResponse>(
        '/:hash/api/v0/vtubers/1.json',
        () => ({
          VTuber: MiruMock,
        })
      );

      this.get<SingleVTuberFullDataResponse>(
        '/:hash/api/v0/vtubers/2.json',
        () => ({
          VTuber: LilyMock,
        })
      );

      this.get<VTuberDataResponse>(
        '/:hash/api/v0/all/vtubers/all.json',
        () => ({
          VTubers: AllVTuberMock,
        })
      );

      this.get<VTuberDataResponse>('/:hash/api/v0/HK/vtubers/all.json', () => ({
        VTubers: AllHKVTubersMock,
      }));

      this.get<VTuberDataResponse>(
        '/:hash/api/v0/groups/:groupName/all/vtubers.json',
        () => ({
          VTubers: CloudHorizonMock,
        })
      );

      this.get<GroupDataResponse>('/:hash/api/v0/all/groups.json', () => ({
        groups: GroupMock,
      }));

      this.get<VTuberPopularityDataResponse>(
        '/:hash/api/v0/all/trending-vtubers/100.json',
        () => ({
          VTubers: PopularVTubersMock,
        })
      );

      this.get<VTuberGrowthDataResponse>(
        '/:hash/api/v0/all/growing-vtubers/all.json',
        () => ({
          VTubers: GrowingVTubersMock,
        })
      );

      this.get<VTuberDebutDataResponse>(
        '/:hash/api/v0/all/debut-vtubers/recent.json',
        () => ({
          VTubers: DebutVTubersMock,
        })
      );

      this.get<VTuberGraduateDataResponse>(
        '/:hash/api/v0/all/graduate-vtubers/recent.json',
        () => ({
          VTubers: [],
        })
      );

      this.get<VideoPopularityDataResponse>(
        '/:hash/api/v0/all/trending-videos/no-duplicate.json',
        () => ({
          videos: PopularVideosMock,
        })
      );

      this.get<VideoPopularityDataResponse>(
        '/:hash/api/v0/all/trending-videos/all.json',
        () => ({
          videos: PopularVideosMock,
        })
      );
    },
  });
}
