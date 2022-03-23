import ChannelLinks from '../../components/ChannelLinks';
import ProfileImage from '../../components/ProfileImage';
import { VTuberData } from '../ApiData/VTuberData';
import { VTuberDisplayData } from '../TableDisplayData/VTuberDisplayData';

export const VTuberBasicToDisplay = (e: VTuberData): VTuberDisplayData => ({
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
  popularVideo: e.popularVideo,
  group: e.group ?? '',
  nationality: e.nationality,
  activity: e.activity,
});
