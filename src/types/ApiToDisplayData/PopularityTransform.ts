import ChannelLinks from '../../components/ChannelLinks';
import ProfileImage from '../../components/ProfileImage';
import { VTuberPopularityData } from '../ApiData/VTuberPopularityData';
import { VTuberPopularityDisplayData } from '../TableDisplayData/VTuberPopularityDisplayData';

export const VTuberPopularityToDisplay = (
  e: VTuberPopularityData,
  ranking: number
): VTuberPopularityDisplayData => ({
  id: e.id,
  profileImg: ProfileImage({ imgUrl: e.imgUrl }),
  name: e.name,
  channelLinks: ChannelLinks({
    YouTubeId: e.YouTube?.id,
    TwitchId: e.Twitch?.id,
  }),
  ranking: ranking,
  hasYouTube: e.YouTube !== undefined,
  YouTubePopularity: e.YouTube?.popularity ?? 0,
  YouTubeSubscriberCount: e.YouTube?.subscriberCount,
  hasTwitch: e.Twitch !== undefined,
  TwitchPopularity: e.Twitch?.popularity ?? 0,
  TwitchFollowerCount: e.Twitch?.followerCount ?? 0,
  group: e.group ?? '',
  popularVideo: e.popularVideo,
  nationality: e.nationality,
  activity: e.activity,
});
