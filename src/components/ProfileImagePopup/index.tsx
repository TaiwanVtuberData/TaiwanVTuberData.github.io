import { FunctionalComponent, JSX } from "preact";
import ProfileImage from "../ProfileImage";
import style from "./style.module.css";

export interface ProfileImagePopupProps {
  VTuberId: string;
  imgUrl: string | null;
  name: string;
  compact?: boolean;
}

const ProfileImagePopup: FunctionalComponent<ProfileImagePopupProps> = (
  props: ProfileImagePopupProps,
): JSX.Element => {
  return (
    <div
      class={props.compact === true ? style.compactContainer : style.container}
    >
      <div class={style.profileImageFlex}>
        <ProfileImage
          VTuberId={props.VTuberId}
          imgUrl={props.imgUrl}
          clickBehavior="popup"
          size={props.compact === true ? 30 : undefined}
        />
      </div>
      <span
        class={props.compact === true ? style.compactNameFlex : style.nameFlex}
      >
        {props.name}
      </span>
    </div>
  );
};

export default ProfileImagePopup;
