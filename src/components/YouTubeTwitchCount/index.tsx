import { Fragment, FunctionalComponent, h } from 'preact';
import '../../style/index.css';
import { CountType } from '../../types/Common/CountType';
import CountString from '../CountString';
import style from './style.module.css';

export interface YouTubeTwitchCountProps {
  YouTubeCount?: CountType;
  TwitchCount?: CountType;
}

const YouTubeTwitchCount: FunctionalComponent<YouTubeTwitchCountProps> = (
  props: YouTubeTwitchCountProps
): h.JSX.Element => {
  const YouTubeSpan = (YouTubeCount: CountType): h.JSX.Element => {
    return (
      <span class={`${style.noWrap} YouTubeRed`}>
        <CountString countType={YouTubeCount} />
      </span>
    );
  };

  const TwitchSpan = (TwitchCount: CountType): h.JSX.Element => {
    return (
      <span class={`${style.noWrap} TwitchPurple`}>
        <CountString countType={TwitchCount} />
      </span>
    );
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
