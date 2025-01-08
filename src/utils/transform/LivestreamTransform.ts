import { LivestreamData } from '../../types/ApiData/LivestreamData';
import { LivestreamDisplayData } from '../../types/TableDisplayData/LivestreamDisplayData';

export const LivestreamToDisplayData = (
  e: LivestreamData,
  index: number,
): LivestreamDisplayData => ({
  id: index,
  VTuberId: e.id,
  name: e.name,
  imgUrl: e.imgUrl || null,
  title: e.title || null,
  thumbnailUrl: e.thumbnailUrl,
  videoUrl: e.videoUrl,
  startTime: new Date(e.startTime),
});
