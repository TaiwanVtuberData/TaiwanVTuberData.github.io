import { Fragment, FunctionalComponent, h } from 'preact';
import { Text } from 'preact-i18n';
import '../../style/index.css';

export interface YouTubeTwitchCountProps {
  hasYouTube: boolean;
  YouTubeSubscriberCount?: number;
  hasTwitch: boolean;
  TwitchFollowerCount: number;
}

const YouTubeTwitchCount: FunctionalComponent<YouTubeTwitchCountProps> = (
  props: YouTubeTwitchCountProps
): h.JSX.Element => {
  const YouTubeSpan = (YouTubeSubscriberCount?: number): h.JSX.Element => {
    return (
      <span class="YouTubeRed">
        {YouTubeSubscriberCount ?? <Text id="table.hiddenCount">hidden</Text>}
      </span>
    );
  };

  const TwitchSpan = (TwitchFollowerCount: number): h.JSX.Element => {
    return <span class="TwitchPurple">{TwitchFollowerCount}</span>;
  };

  const CountSpan = (props: YouTubeTwitchCountProps): h.JSX.Element | null => {
    if (props.hasYouTube && props.hasTwitch) {
      return (
        <Fragment>
          {YouTubeSpan(props.YouTubeSubscriberCount)}
          {/* extra white space. will be rendered as " + " */}
          <span>&nbsp;+&nbsp;</span>
          {TwitchSpan(props.TwitchFollowerCount)}
        </Fragment>
      );
    }

    if (props.hasYouTube) {
      return <Fragment>{YouTubeSpan(props.YouTubeSubscriberCount)}</Fragment>;
    }

    if (props.hasTwitch) {
      return <Fragment>{TwitchSpan(props.TwitchFollowerCount)}</Fragment>;
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
