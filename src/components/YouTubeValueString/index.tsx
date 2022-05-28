import { Fragment, FunctionalComponent, h } from 'preact';
import { Text } from 'preact-i18n';
import { CountType } from '../../types/Common/CountType';

interface YouTubeValueStringProps {
  YouTubeCount: CountType;
}
const YouTubeValueString: FunctionalComponent<YouTubeValueStringProps> = (
  props: YouTubeValueStringProps
): JSX.Element => {
  switch (props.YouTubeCount.tag) {
    case 'has':
      return <>{props.YouTubeCount.count}</>;
    case 'hidden':
      return <Text id="table.hiddenCount">hidden</Text>;
    case 'no':
      return <Text id="table.noDataCount">no data</Text>;
  }
};

export default YouTubeValueString;
