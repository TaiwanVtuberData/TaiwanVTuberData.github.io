import { getFormattedTimeIfNotToday } from '../../utils/DateTimeUtils';
import ProfileImagePopUp from '../ProfileImagePopup';
import VideoLink from '../VideoLink';
import style from './style.module.css';
import { FunctionalComponent, JSX } from 'preact';

export interface LivestreamComponentProps {
  divPrefix: string;
  id: number | null;
  VTuberId: string;
  imgUrl: string | null;
  name: string;
  thumbnailUrl: string;
  videoUrl: string;
  startTime: Date;
  now: Date;
}

const LivestreamComponent: FunctionalComponent<LivestreamComponentProps> = (
  props: LivestreamComponentProps,
): JSX.Element => {
  return (
    <div id={`${props.divPrefix}-${props.id}`} class={style.verticalFlex}>
      <ProfileImagePopUp
        VTuberId={props.VTuberId}
        imgUrl={props.imgUrl}
        name={props.name}
      />
      <VideoLink thumbnailUrl={props.thumbnailUrl} videoUrl={props.videoUrl} />
      <div>
        <span>{getFormattedTimeIfNotToday(props.startTime, props.now)}</span>
      </div>
    </div>
  );
};

export default LivestreamComponent;
