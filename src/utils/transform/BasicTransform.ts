import { VTuberData } from '../../types/ApiData/VTuberData';
import { VTuberDisplayData } from '../../types/TableDisplayData/VTuberDisplayData';

export const VTuberBasicToDisplay = (e: VTuberData): VTuberDisplayData => ({
  id: e.id,
  activity: e.activity,
  name: e.name,
  imgUrl: e.imgUrl,
  YouTubeId: e.YouTube?.id,
  YouTubeSubscriber: e.YouTube?.subscriber,
  TwitchId: e.Twitch?.id,
  TwitchFollower: e.Twitch?.follower,
  popularVideo: e.popularVideo,
  group: e.group,
  nationality: e.nationality,
});
