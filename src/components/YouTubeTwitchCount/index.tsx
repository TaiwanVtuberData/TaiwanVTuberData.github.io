import { FunctionalComponent, JSX } from "preact";
import { CountType } from "../../types/Common/CountType";
import CountFragment from "../CountFragment";
import style from "./style.module.css";

export interface YouTubeTwitchCountProps {
  YouTubeCount?: CountType;
  TwitchCount?: CountType;
}

const YouTubeTwitchCount: FunctionalComponent<YouTubeTwitchCountProps> = (
  props: YouTubeTwitchCountProps,
): JSX.Element => {
  const YouTubeSpan = (YouTubeCount: CountType): JSX.Element => {
    return (
      <span class={`${style.noWrap} ${style.YouTubeRed}`}>
        <CountFragment countType={YouTubeCount} />
      </span>
    );
  };

  const TwitchSpan = (TwitchCount: CountType): JSX.Element => {
    return (
      <span class={`${style.noWrap} ${style.TwitchPurple}`}>
        <CountFragment countType={TwitchCount} />
      </span>
    );
  };

  const CountSpan = (props: YouTubeTwitchCountProps): JSX.Element | null => {
    if (props.YouTubeCount && props.TwitchCount) {
      return (
        <>
          {YouTubeSpan(props.YouTubeCount)}
          {/* extra white space. will be rendered as " + " */}
          <span class={style.noWrap}>&nbsp;+&nbsp;</span>
          {TwitchSpan(props.TwitchCount)}
        </>
      );
    }

    if (props.YouTubeCount) {
      return <>{YouTubeSpan(props.YouTubeCount)}</>;
    }

    if (props.TwitchCount) {
      return <>{TwitchSpan(props.TwitchCount)}</>;
    }

    return null;
  };

  return (
    <>
      <CountSpan {...props} />
    </>
  );
};

export default YouTubeTwitchCount;
