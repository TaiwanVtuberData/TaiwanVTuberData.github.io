import { FunctionalComponent, h } from 'preact';
import ProfileImage from '../ProfileImage';
import style from './style.module.css';

export interface ProfileImagePopupProps {
  VTuberId: string;
  imgUrl?: string;
  name: string;
}

const ProfileImagePopup: FunctionalComponent<ProfileImagePopupProps> = (
  props: ProfileImagePopupProps
): h.JSX.Element => {
  return (
    <div class={style.container}>
      <div class={style.profileImageFlex}>
        <ProfileImage VTuberId={props.VTuberId} imgUrl={props.imgUrl} />
      </div>
      <span class={style.nameFlex}>{props.name}</span>
    </div>
  );
};

export default ProfileImagePopup;
