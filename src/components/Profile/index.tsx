import { FunctionalComponent, JSX } from "preact";
import { VTuberData } from "../../types/ApiData/VTuberData";
import ProfileImage from "../ProfileImage";
import ToolTip from "../ToolTip";

export interface ProfileProps {
  VTuber: VTuberData;
  size?: number;
}

const Profile: FunctionalComponent<ProfileProps> = (
  props: ProfileProps,
): JSX.Element => {
  return (
    <ToolTip text={props.VTuber.name}>
      <ProfileImage
        VTuberId={props.VTuber.id}
        imgUrl={props.VTuber.imgUrl}
        size={props.size}
        clickBehavior="popup"
      />
    </ToolTip>
  );
};

export default Profile;
