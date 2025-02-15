import { VTuberLivestreamDisplayData } from '../../types/TableDisplayData/VTuberLivestreamDisplayData';
import { getFormattedTimeIfNotToday } from '../../utils/DateTimeUtils';
import VideoLink from '../VideoLink';
import style from './style.module.css';
import { FunctionalComponent, JSX } from 'preact';

export interface IndividualLivestreamsProps {
  livestreams: Array<VTuberLivestreamDisplayData>;
}

const IndividualLivestreams: FunctionalComponent<IndividualLivestreamsProps> = (
  props: IndividualLivestreamsProps,
): JSX.Element => {
  const now = new Date();
  return (
    <div class={style.horizontalFlex}>
      {props.livestreams.map((e) => (
        <div key={e.videoUrl} class={style.verticalFlex}>
          <VideoLink thumbnailUrl={e.thumbnailUrl} videoUrl={e.videoUrl} />
          <div>
            <span>{getFormattedTimeIfNotToday(e.startTime, now)}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default IndividualLivestreams;
