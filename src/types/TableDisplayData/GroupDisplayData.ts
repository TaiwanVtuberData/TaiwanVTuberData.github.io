import { VTuberData } from '../ApiData/VTuberData';

export interface GroupDisplayData {
  id: string;
  name: string;
  popularity: number;
  livestreamPopularity: number;
  videoPopularity: number;
  averageSubscriberCount: number;
  totalSubscriberCount: number;
  memberCount: number;
  memberList: ReadonlyArray<VTuberData>;
}
