import style from './style.module.css';
import { FunctionalComponent, JSX } from 'preact';

export interface VideoLinkProps {
  thumbnailUrl: string;
  videoUrl: string;
}

const VideoLink: FunctionalComponent<VideoLinkProps> = (
  props: VideoLinkProps,
): JSX.Element => {
  return (
    <a href={props.videoUrl} target="_blank" rel="noopener noreferrer">
      {props.thumbnailUrl === undefined ? (
        <img
          class={style.placeholder}
          src={props.thumbnailUrl}
          loading="lazy"
        />
      ) : (
        <img class={style.thumbnail} src={props.thumbnailUrl} loading="lazy" />
      )}
    </a>
  );
};

export default VideoLink;
