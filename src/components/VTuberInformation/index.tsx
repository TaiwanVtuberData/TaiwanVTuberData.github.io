import { Fragment, FunctionalComponent, h } from 'preact';
import { Text } from 'preact-i18n';
import baseroute from '../../baseroute';
import { openModal } from '../../global/modalState';
import { Dictionary } from '../../i18n/Dictionary';
import { Activity } from '../../types/Common/Activity';
import { VideoInfo } from '../../types/Common/VideoInfo';
import { VTuberDisplayFullData } from '../../types/TableDisplayData/VTuberDisplayFullData';
import { TwitchIdToLink, YouTubeIdToLink } from '../../utils/ChannelIdUtils';
import ProfileImage from '../ProfileImage';
import style from './style.module.css';

export interface VTuberInformationProps {
  dictionary: Dictionary;
  VTuber?: VTuberDisplayFullData;
}

const VTuberInformation: FunctionalComponent<VTuberInformationProps> = (
  props: VTuberInformationProps
): h.JSX.Element => {
  const vtuber: VTuberDisplayFullData | undefined = props.VTuber;

  const YouTubeSubscriberCountSpan = (
    YouTubeSubscriberCount?: number
  ): JSX.Element => {
    return (
      <span>
        {YouTubeSubscriberCount ?? <Text id="table.hiddenCount">hidden</Text>}
      </span>
    );
  };

  const getActivityTranslation = (activity?: Activity): JSX.Element => {
    switch (activity) {
      case 'preparing':
        return <Text id="activityText.preparing">Preparing</Text>;
      case 'active':
        return <Text id="activityText.active">Active</Text>;
      case 'graduate':
        return <Text id="activityText.graduated">Graduated</Text>;
    }

    return <></>;
  };

  const getYouTubeLink = (id?: string): JSX.Element => {
    return (
      <a href={YouTubeIdToLink(id)} target="_blank" rel="noopener noreferrer">
        <Text id="text.link">Link</Text>
      </a>
    );
  };

  const getTwitchLink = (id?: string): JSX.Element => {
    return (
      <a href={TwitchIdToLink(id)} target="_blank" rel="noopener noreferrer">
        <Text id="text.link">Link</Text>
      </a>
    );
  };

  return (
    <div class={style.flexArea}>
      <div>
        {vtuber && (
          <div>
            <ProfileImage id={vtuber.id} imgUrl={vtuber.imgUrl} size={240} />
          </div>
        )}
      </div>
      <ul>
        {vtuber?.hasYouTube && (
          <li>
            <Text id="table.YouTubeSubscriberCount">YouTube Subscribers</Text>
            <span>: </span>
            {YouTubeSubscriberCountSpan(vtuber.YouTubeSubscriberCount)}
            <span>(</span>
            {getYouTubeLink(vtuber.YouTubeId)}
            <span>)</span>
          </li>
        )}
        {vtuber?.hasTwitch && (
          <li>
            <Text id="table.TwitchFollowerCount">Twitch Followers</Text>
            <span>: {vtuber.TwitchFollowerCount} (</span>
            {getTwitchLink(vtuber.TwitchId)}
            <span>)</span>
          </li>
        )}
        <li>
          <Text id="table.group">Group</Text>
          <span>: </span>
          <a href={`${baseroute}/group/${vtuber?.group}`}>{vtuber?.group}</a>
        </li>
        <li>
          <Text id="table.nationality">Nationality</Text>
          <span>: {vtuber?.nationality}</span>
        </li>
        <li>
          <Text id="table.activity">Activity</Text>
          <span>: </span>
          {getActivityTranslation(vtuber?.activity)}
        </li>
        <li>
          <Text id="table.debutDate">Debut Date</Text>
          <span>: {vtuber?.debutDate}</span>
        </li>
        {vtuber?.graduateDate && (
          <li>
            <Text id="table.graduateDate">Graduation Date</Text>
            <span>: {vtuber?.graduateDate}</span>
          </li>
        )}
        <li>
          <Text id="table.popularVideo">PopularVideo</Text>
          <span>: </span>
          {vtuber?.popularVideo !== undefined ? (
            <input
              type="button"
              value={props.dictionary.text.showVideo}
              // TypeScript, I'm pretty sure vtuber.popularVideo is defined here
              onClick={(): void => openModal(vtuber.popularVideo as VideoInfo)}
            />
          ) : null}
        </li>
      </ul>
    </div>
  );
};

export default VTuberInformation;
