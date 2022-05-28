import { Fragment, FunctionalComponent, h } from 'preact';
import '../../style/index.css';
import { CountType } from '../../types/Common/CountType';
import YouTubeValueString from '../YouTubeValueString';
import style from './style.module.css';

export interface YouTubeTwitchCountProps {
  YouTubeCount?: CountType;
  TwitchCount?: number;
}

const YouTubeTwitchCount: FunctionalComponent<YouTubeTwitchCountProps> = (
  props: YouTubeTwitchCountProps
): h.JSX.Element => {
  const YouTubeSpan = (YouTubeCount: CountType): h.JSX.Element => {
    return (
      <span class={`${style.noWrap} YouTubeRed`}>
        <YouTubeValueString YouTubeCount={YouTubeCount} />
      </span>
    );
  };

  const TwitchSpan = (TwitchCount: number): h.JSX.Element => {
    return <span class={`${style.noWrap} TwitchPurple`}>{TwitchCount}</span>;
  };

  const CountSpan = (props: YouTubeTwitchCountProps): h.JSX.Element | null => {
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
    <Fragment>
      <CountSpan {...props} />
    </Fragment>
  );
};

export default YouTubeTwitchCount;
