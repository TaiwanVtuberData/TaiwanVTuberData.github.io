import { FunctionalComponent, h } from 'preact';
import style from './style.module.css';

export interface ToolTipProps {
  text: string;
  children: React.ReactNode;
}

const ToolTip: FunctionalComponent<ToolTipProps> = (
  props: ToolTipProps
): h.JSX.Element => {
  return (
    <div class={style.tooltip}>
      {props.children}
      <span class={style.tooltipText}>{props.text}</span>
    </div>
  );
};

export default ToolTip;
