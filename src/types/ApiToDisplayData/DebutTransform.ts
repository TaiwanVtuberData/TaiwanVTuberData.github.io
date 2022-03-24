import ChannelLinks from '../../components/ChannelLinks';
import ProfileImage from '../../components/ProfileImage';
import { VTuberDebutData } from '../ApiData/VTuberDebutData';
import { VTuberDebutDisplayData } from '../TableDisplayData/VTuberDebutDisplayData';

export const VTuberDebutToDisplay = (
  e: VTuberDebutData,
  todayDate: string
): VTuberDebutDisplayData => ({
  id: e.id,
  isToday: e.debutDate === todayDate,
  debutDate: e.debutDate,
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
