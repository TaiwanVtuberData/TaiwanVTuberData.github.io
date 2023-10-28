import { FunctionalComponent, JSX } from "preact";
import style from "./style.module.css";

export interface ChannelLinksProps {
  YouTubeId?: string;
  TwitchId?: string;
}

const ChannelLinks: FunctionalComponent<ChannelLinksProps> = (
  props: ChannelLinksProps,
): JSX.Element => {
  const IconLink = (
    imgClass: string,
    prefix: string,
    id?: string,
  ): JSX.Element | null => {
    return id === undefined ? null : (
      <a href={prefix + id} target="_blank" rel="noopener noreferrer">
        <img class={imgClass} />
      </a>
    );
  };

  return (
    <div class={style.container}>
      {IconLink(
        style.YouTubeImg,
        "https://www.youtube.com/channel/",
        props.YouTubeId,
      )}
      {IconLink(style.TwitchImg, "https://www.twitch.tv/", props.TwitchId)}
    </div>
  );
};

export default ChannelLinks;
