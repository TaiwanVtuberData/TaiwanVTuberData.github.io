import { VideoPopularityData } from '../../types/ApiData/VideoPopularityData';
import { VideoPopularityDisplayData } from '../../types/TableDisplayData/VideoPopularityDisplayData';

export const PopularVideoToDisplayData = (
  e: VideoPopularityData,
  ranking: number,
): VideoPopularityDisplayData => ({
  id: e.id,
  name: e.name,
  imgUrl: e.imgUrl || null,
  title: e.title,
  thumbnailUrl: e.thumbnailUrl,
  videoUrl: e.videoUrl,
  viewCount: e.viewCount,
  uploadTime: new Date(e.uploadTime),
  ranking: ranking,
});
