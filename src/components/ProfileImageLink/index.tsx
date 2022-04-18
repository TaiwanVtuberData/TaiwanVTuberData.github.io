import { FunctionalComponent, h } from 'preact';
import ChannelLinks from '../ChannelLinks';
import ProfileImage from '../ProfileImage';
import style from './style.module.css';

export interface ProfileImageLinkProps {
  id?: string;
  imgUrl?: string;
  name: string;
  YouTubeId?: string;
  TwitchId?: string;
}

const ProfileImageLink: FunctionalComponent<ProfileImageLinkProps> = (
  props: ProfileImageLinkProps
): h.JSX.Element => {
  return (
    <div class={style.container}>
      <div class={style.profileImageFlex}>
        <ProfileImage id={props.id} imgUrl={props.imgUrl} />
      </div>
      <span class={style.nameFlex}>{props.name}</span>
      <div class={style.channelLinksFlex}>
        <ChannelLinks {...props} />
      </div>
    </div>
  );
};

export default ProfileImageLink;
