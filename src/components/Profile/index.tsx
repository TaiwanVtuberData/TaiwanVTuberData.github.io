import { FunctionalComponent, h } from 'preact';
import { VTuberData } from '../../types/ApiData/VTuberData';
import ProfileImage from '../ProfileImage';
import ToolTip from '../Tooltip';

export interface ProfileProps {
  VTuber: VTuberData;
}

const Profile: FunctionalComponent<ProfileProps> = (
  props: ProfileProps
): h.JSX.Element => {
  const ChannelImageLink = (props: {
    VTuber: VTuberData;
    children: React.ReactNode;
  }): h.JSX.Element | null => {
    const YouTubePrefix = 'https://www.youtube.com/channel/' as const;
    const TwitchPrefix = 'https://www.twitch.tv/' as const;

    if (props.VTuber.YouTube === undefined && props.VTuber.Twitch === undefined)
      return null;

    let renderYouTube: boolean =
      (props.VTuber.YouTube?.subscriberCount ?? 0) >
      (props.VTuber.Twitch?.followerCount ?? 0);
    if (props.VTuber.YouTube === undefined) renderYouTube = false;
    if (props.VTuber.Twitch === undefined) renderYouTube = true;

    // YouTube or Twitch will exist by the pre-condition
    return renderYouTube ? (
      <a
        href={YouTubePrefix + props.VTuber.YouTube?.id}
        target="_blank"
        rel="noopener noreferrer"
      >
        {props.children}
      </a>
    ) : (
      <a
        href={TwitchPrefix + props.VTuber.Twitch?.id}
        target="_blank"
        rel="noopener noreferrer"
      >
        {props.children}
      </a>
    );
  };

  return (
    <ToolTip text={props.VTuber.name}>
      <ChannelImageLink VTuber={props.VTuber}>
        {ProfileImage({ imgUrl: props.VTuber.imgUrl })}
      </ChannelImageLink>
    </ToolTip>
  );
};

export default Profile;
