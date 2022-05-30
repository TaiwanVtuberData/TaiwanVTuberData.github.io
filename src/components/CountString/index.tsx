import { Fragment, FunctionalComponent, h } from 'preact';
import { Text } from 'preact-i18n';
import { CountType } from '../../types/Common/CountType';

interface CountStringProps {
  countType: CountType;
}
const CountString: FunctionalComponent<CountStringProps> = (
  props: CountStringProps
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

export default CountString;
