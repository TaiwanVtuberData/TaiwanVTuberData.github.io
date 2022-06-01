import { h } from 'preact';
import { withText } from 'preact-i18n';
import { openModal } from '../../global/modalState';
import { VideoInfo } from '../../types/Common/VideoInfo';

const ShowVideoButton = withText('text.showVideo')(
  (props: { showVideo?: string; popularVideo: VideoInfo }) => (
    <input
      type="button"
      value={props.showVideo}
      onClick={(): void => openModal(props.popularVideo)}
    />
  )
);

export default ShowVideoButton;
