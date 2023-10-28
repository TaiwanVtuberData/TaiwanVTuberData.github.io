import { FunctionalComponent, JSX } from "preact";
import { openProfileModal } from "../../global/ProfileModalState";
import { GetRoute } from "../../utils/TypeSafeRouting";
import style from "./style.module.css";

export type ProfileImageClickBehavior = "popup" | "goToPage" | "noAction";

export interface ProfileImageProps {
  VTuberId: string;
  imgUrl?: string;
  size?: number;
  clickBehavior: ProfileImageClickBehavior;
}

const ProfileImage: FunctionalComponent<ProfileImageProps> = (
  props: ProfileImageProps,
): JSX.Element => {
  // use empty img src if no URL
  // https://stackoverflow.com/a/53365710/11947017
  return (
    <a
      href={
        props.clickBehavior === "noAction"
          ? undefined
          : GetRoute({ type: "vtuber", id: props.VTuberId })
      }
      onClickCapture={(e): void => {
        switch (props.clickBehavior) {
          case "popup":
            e.preventDefault();
            break;
          case "goToPage":
          case "noAction":
            break;
        }
      }}
    >
      <div
        onClick={(e): void => {
          switch (props.clickBehavior) {
            case "popup":
              openProfileModal(props.VTuberId);
              e.stopPropagation();
              break;
            case "goToPage":
            case "noAction":
              break;
          }
        }}
      >
        <img
          class={`${props.size ? style.fixedSize : style.profileImg}`}
          src={
            props.imgUrl ??
            "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
          }
          loading="lazy"
          width={props.size ?? undefined}
          height={props.size ?? undefined}
        />
      </div>
    </a>
  );
};

export default ProfileImage;
