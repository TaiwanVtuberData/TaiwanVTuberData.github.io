import { FunctionalComponent, h } from 'preact';
import { VTuberData } from '../../types/ApiData/VTuberData';
import ProfileImage from '../ProfileImage';
import style from './style.module.css';

export interface ProfileProps {
  VTuber: VTuberData;
}

const Profile: FunctionalComponent<ProfileProps> = (
  props: ProfileProps
): h.JSX.Element => {
  const LinkToolTip = (props: {
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
        class={style.tooltip}
        href={YouTubePrefix + props.VTuber.YouTube?.id}
        target="_blank"
        rel="noopener noreferrer"
      >
        {props.children}
      </a>
    ) : (
      <a
        class={style.tooltip}
        href={TwitchPrefix + props.VTuber.Twitch?.id}
        target="_blank"
        rel="noopener noreferrer"
      >
        {props.children}
      </a>
    );
  };

  return (
    <LinkToolTip VTuber={props.VTuber}>
      {ProfileImage({ imgUrl: props.VTuber.imgUrl })}
      <span class={style.tooltipText}>{props.VTuber.name}</span>
    </LinkToolTip>
  );
};

export default Profile;
