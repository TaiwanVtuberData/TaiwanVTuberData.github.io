import { FunctionalComponent, h } from 'preact';
import style from './ProfileElement.module.css';

export interface ProfileElementProps {
  name: string;
  imgUrl: string;
  YouTubeUrl?: string;
  TwitchUrl?: string;
}

const ProfileElement: FunctionalComponent<ProfileElementProps> = (
  props: ProfileElementProps
): h.JSX.Element => {
  const IconLink = (imgClass: string, url?: string): h.JSX.Element | null => {
    return url === undefined ? null : (
      <a href={url} target="_blank" rel="noopener noreferrer">
        <img class={imgClass} />
      </a>
    );
  };

  return (
    <div class={style.displayName}>
      <img class={style.profileImg} src={props.imgUrl} loading="lazy" />
      <span>{props.name}</span>
      <div class={style.channelLink}>
        {IconLink(style.YouTubeImg, props.YouTubeUrl)}
        {IconLink(style.TwitchImg, props.TwitchUrl)}
      </div>
    </div>
  );
};

export default ProfileElement;
