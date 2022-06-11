import { FunctionalComponent, h } from 'preact';
import {
  getFormattedDateTime,
  getFormattedTime,
  getFormattedTimeIfNotToday,
} from '../../utils/DateTimeUtils';
import ProfileImagePopUp from '../ProfileImagePopup';
import VideoLink from '../VideoLink';
import style from './style.module.css';

export interface LivestreamComponentProps {
  id?: number;
  VTuberId: string;
  imgUrl?: string;
  name: string;
  thumbnailUrl: string;
  videoUrl: string;
  startTime: Date;
  now: Date;
}

const LivestreamComponent: FunctionalComponent<LivestreamComponentProps> = (
  props: LivestreamComponentProps
): h.JSX.Element => {
  return (
    <div id={`comp-${props.id}`} class={style.verticalFlex}>
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
