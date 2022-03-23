import { FunctionalComponent, h } from 'preact';
import style from './style.module.css';

export interface ToolTipProps {
  text: string | React.ReactNode;
  children: React.ReactNode;
  width?: string;
  fontSize?: string;
}

const ToolTip: FunctionalComponent<ToolTipProps> = (
  props: ToolTipProps
): h.JSX.Element => {
  return (
    <div class={style.tooltip}>
      {props.children}
      <span
        class={style.tooltipText}
        style={{ width: props.width, fontSize: props.fontSize }}
      >
        {props.text}
      </span>
    </div>
  );
};

export default ToolTip;
