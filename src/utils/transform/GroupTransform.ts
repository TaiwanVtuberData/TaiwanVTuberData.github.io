import { GroupData } from '../../types/ApiData/GroupData';
import { VTuberData } from '../../types/ApiData/VTuberData';
import { GroupDisplayData } from '../../types/TableDisplayData/GroupDisplayData';
import { GetCount } from '../CountTypeUtils';

const accumulator = (prev: number, current: VTuberData): number =>
  prev +
  (GetCount(current.YouTube?.subscriber || null) ?? 0) +
  (GetCount(current.Twitch?.follower || null) ?? 0);

export const groupToDisplay = (e: GroupData): GroupDisplayData => ({
  id: e.id,
  name: e.name,
  popularity: e.popularity,
  livestreamPopularity: e.livestreamPopularity,
  videoPopularity: e.videoPopularity,
  averageSubscriberCount:
    e.members.length !== 0
      ? Math.round(e.members.reduce(accumulator, 0) / e.members.length)
      : 0,
  totalSubscriberCount: e.members.reduce(accumulator, 0),
  memberCount: e.members.length,
  memberList: e.members,
});
