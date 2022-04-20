import { VTuberData } from '../ApiData/VTuberData';
import { VTuberDisplayData } from '../TableDisplayData/VTuberDisplayData';

export const VTuberBasicToDisplay = (e: VTuberData): VTuberDisplayData => ({
  id: e.id,
  name: e.name,
  imgUrl: e.imgUrl,
  hasYouTube: e.YouTube !== undefined,
  YouTubeId: e.YouTube?.id,
  YouTubeSubscriberCount: e.YouTube?.subscriberCount,
  hasTwitch: e.Twitch !== undefined,
  TwitchId: e.Twitch?.id,
  TwitchFollowerCount: e.Twitch?.followerCount ?? 0,
  popularVideo: e.popularVideo,
  group: e.group ?? '',
  nationality: e.nationality,
  activity: e.activity,
});
