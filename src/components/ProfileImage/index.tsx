import { FunctionalComponent, h } from 'preact';
import style from './style.module.css';

export interface ProfileImageProps {
  imgUrl?: string;
}

const ProfileImage: FunctionalComponent<ProfileImageProps> = (
  props: ProfileImageProps
): h.JSX.Element => {
  // use empty img src if no URL
  // https://stackoverflow.com/a/53365710/11947017
  return (
    <img
      class={style.profileImg}
      src={
        props.imgUrl ??
        'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'
      }
      loading="lazy"
    />
  );
};

export default ProfileImage;
