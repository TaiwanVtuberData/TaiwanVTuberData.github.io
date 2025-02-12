import { Activity } from '../../types/Common/Activity';
import { CountType } from '../../types/Common/CountType';
import { VTuberDisplayFullData } from '../../types/TableDisplayData/VTuberDisplayFullData';
import { TwitchIdToLink, YouTubeIdToLink } from '../../utils/ChannelIdUtils';
import { GetRoute } from '../../utils/TypeSafeRouting';
import CountFragment from '../CountFragment';
import IndividualLivestreams from '../IndividualLivestreams';
import ProfileImage, { ProfileImageClickBehavior } from '../ProfileImage';
import ShowVideoButton from '../ShowVideoButton';
import style from './style.module.css';
import { FunctionalComponent, JSX } from 'preact';
import { Text } from 'preact-i18n';

export interface VTuberInformationProps {
  VTuber: VTuberDisplayFullData;
  clickBehavior: ProfileImageClickBehavior;
}

const VTuberInformation: FunctionalComponent<VTuberInformationProps> = (
  props: VTuberInformationProps,
): JSX.Element => {
  const vtuber: VTuberDisplayFullData = props.VTuber;

  const CountSpan = (countType: CountType): JSX.Element => {
    return (
      <span>
        <CountFragment countType={countType} />
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
    <div class={style.container}>
      <div class={style.flexArea}>
        <div>
          <ProfileImage
            VTuberId={vtuber.id}
            imgUrl={vtuber.imgUrl}
            size={240}
            clickBehavior={props.clickBehavior}
          />
        </div>
        <ul>
          {vtuber.YouTube && (
            <li>
              <Text id="table.YouTubeSubscriberCount">YouTube Subscribers</Text>
              <span>: </span>
              {CountSpan(vtuber.YouTube.subscriber)}
              <span> (</span>
              {getYouTubeLink(vtuber.YouTube.id)}
              <span>)</span>
            </li>
          )}
          {vtuber.Twitch && (
            <li>
              <Text id="table.TwitchFollowerCount">Twitch Followers</Text>
              <span>: {CountSpan(vtuber.Twitch.follower)} (</span>
              {getTwitchLink(vtuber.Twitch.id)}
              <span>)</span>
            </li>
          )}
          <li>
            <Text id="table.group">Group</Text>
            <span>: </span>
            {vtuber?.group === null ? null : (
              <a href={GetRoute({ type: 'group', name: vtuber?.group })}>
                {vtuber?.group}
              </a>
            )}
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
            {vtuber.popularVideo && (
              <ShowVideoButton popularVideo={vtuber.popularVideo} />
            )}
          </li>
        </ul>
      </div>
      {vtuber.livestreams.length > 0 ? (
        <>
          <h3>
            <Text id="header.recentLivestream">Recent Livestream</Text>
          </h3>
          <IndividualLivestreams livestreams={vtuber.livestreams} />
        </>
      ) : null}
    </div>
  );
};

export default VTuberInformation;
