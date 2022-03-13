import { FunctionalComponent, h } from 'preact';
import style from './style.module.css';

export interface ChannelLinksProps {
  YouTubeUrl?: string;
  TwitchUrl?: string;
}

const ChannelLinks: FunctionalComponent<ChannelLinksProps> = (
  props: ChannelLinksProps
): h.JSX.Element => {
  const IconLink = (imgClass: string, url?: string): h.JSX.Element | null => {
    return url === undefined ? null : (
      <a href={url} target="_blank" rel="noopener noreferrer">
        <img class={imgClass} />
      </a>
    );
  };

  return (
    <div>
      {IconLink(style.YouTubeImg, props.YouTubeUrl)}
      {IconLink(style.TwitchImg, props.TwitchUrl)}
    </div>
  );
};

export default ChannelLinks;
