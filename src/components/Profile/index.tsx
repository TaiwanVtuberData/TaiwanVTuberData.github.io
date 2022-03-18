import { Fragment, FunctionalComponent, h } from 'preact';
import { VTuberData } from '../../types/VTuberData';
import ProfileImage from '../ProfileImage';
import style from './style.module.css';

export interface ProfileProps {
  VTuber: VTuberData;
}

const Profile: FunctionalComponent<ProfileProps> = (
  props: ProfileProps
): h.JSX.Element => {
  return (
    <Fragment>
      <div class={style.tooltip}>
        {ProfileImage({ imgUrl: props.VTuber.imgUrl })}
        <span class={style.tooltipText}>{props.VTuber.name}</span>
      </div>
    </Fragment>
  );
};

export default Profile;
