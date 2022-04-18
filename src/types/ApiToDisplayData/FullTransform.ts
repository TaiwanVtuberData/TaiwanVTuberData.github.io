import { VTuberFullData } from '../ApiData/VTuberFullData';
import { VTuberDisplayFullData } from '../TableDisplayData/VTuberDisplayFullData';

export const VTuberFullToDisplay = (
  e: VTuberFullData
): VTuberDisplayFullData => ({
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
  debutDate: e.debutDate,
  graduateDate: e.graduateDate,
});
