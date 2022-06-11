import { FunctionalComponent, h } from 'preact';
import { VTuberData } from '../../types/ApiData/VTuberData';
import ProfileImage from '../ProfileImage';
import ToolTip from '../ToolTip';

export interface ProfileProps {
  VTuber: VTuberData;
  size?: number;
}

const Profile: FunctionalComponent<ProfileProps> = (
  props: ProfileProps
): h.JSX.Element => {
  return (
    <ToolTip text={props.VTuber.name}>
      <ProfileImage
        VTuberId={props.VTuber.id}
        imgUrl={props.VTuber.imgUrl}
        size={props.size}
        clickBehavior="goToPage"
      />
    </ToolTip>
  );
};

export default Profile;
