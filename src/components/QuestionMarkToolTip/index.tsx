import { FunctionalComponent, h } from 'preact';
import ToolTip from '../ToolTip';
import style from './style.module.css';

export interface QuestionMarkToolTip {
  text: string | React.ReactNode;
  width?: string;
  fontSize?: string;
}

const QuestionMarkToolTip: FunctionalComponent<QuestionMarkToolTip> = (
  props: QuestionMarkToolTip
): h.JSX.Element => {
  return (
    <ToolTip text={props.text} width={props.width} fontSize={props.fontSize}>
      <img class={style.questionMark} />
    </ToolTip>
  );
};

export default QuestionMarkToolTip;
