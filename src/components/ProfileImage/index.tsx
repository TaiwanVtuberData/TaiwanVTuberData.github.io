import { FunctionalComponent, h } from 'preact';
import style from './style.module.css';

export interface ProfileImageProps {
  imgUrl: string;
}

const ProfileImage: FunctionalComponent<ProfileImageProps> = (
  props: ProfileImageProps
): h.JSX.Element => {
  return <img class={style.profileImg} src={props.imgUrl} loading="lazy" />;
};

export default ProfileImage;
