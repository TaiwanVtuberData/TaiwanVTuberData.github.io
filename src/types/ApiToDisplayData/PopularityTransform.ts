import ChannelLinks from '../../components/ChannelLinks';
import ProfileImage from '../../components/ProfileImage';
import { VTuberPopularityData } from '../ApiData/VTuberPopularityData';
import { VTuberPopularityDisplayData } from '../TableDisplayData/VTuberPopularityDisplayData';

export const VTuberPopularityToDisplay = (
  e: VTuberPopularityData,
  ranking: number
): VTuberPopularityDisplayData => ({
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
  YouTubePopularity: e.YouTube?.popularity ?? 0,
  TwitchPopularity: e.Twitch?.popularity ?? 0,
  ranking: ranking,
});
