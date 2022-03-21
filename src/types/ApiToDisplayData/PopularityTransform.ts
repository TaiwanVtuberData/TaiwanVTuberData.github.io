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
  hasYouTube: e.YouTube !== undefined,
  YouTubeSubscriberCount: e.YouTube?.subscriberCount,
  hasTwitch: e.Twitch !== undefined,
  TwitchFollowerCount: e.Twitch?.followerCount ?? 0,
  group: e.group ?? '',
  nationality: e.nationality,
  activity: e.activity,
  popularity: e.popularity,
  ranking: ranking,
});
