import { VTuberData } from '../../types/ApiData/VTuberData';
import ProfileImage from '../ProfileImage';
import ToolTip from '../ToolTip';
import { FunctionalComponent, JSX } from 'preact';

export interface ProfileProps {
  VTuber: VTuberData;
}

const Profile: FunctionalComponent<ProfileProps> = (
  props: ProfileProps,
): JSX.Element => {
  return (
    <ToolTip text={props.VTuber.name}>
      <ProfileImage
        VTuberId={props.VTuber.id}
        imgUrl={props.VTuber.imgUrl}
        clickBehavior="popup"
      />
    </ToolTip>
  );
};

export default Profile;
