import { CountType } from '../../types/Common/CountType';
import { FunctionalComponent, JSX } from 'preact';
import { Text } from 'preact-i18n';

interface CountFragmentProps {
  countType: CountType;
}
const CountFragment: FunctionalComponent<CountFragmentProps> = (
  props: CountFragmentProps,
): JSX.Element => {
  switch (props.countType.tag) {
    case 'has':
      return <>{props.countType.count}</>;
    case 'hidden':
      return <Text id="table.hiddenCount">hidden</Text>;
    case 'no':
      return <Text id="table.noDataCount">no data</Text>;
  }
};

export default CountFragment;
