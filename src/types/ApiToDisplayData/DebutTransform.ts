import { VTuberDebutData } from '../ApiData/VTuberDebutData';
import { VTuberDebutDisplayData } from '../TableDisplayData/VTuberDebutDisplayData';

export const VTuberDebutToDisplay = (
  e: VTuberDebutData,
  todayDate: string
): VTuberDebutDisplayData => ({
  id: e.id,
  isToday: e.debutDate === todayDate,
  debutDate: e.debutDate,
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
