import style from './style.module.css';
import { FunctionalComponent, JSX } from 'preact';

export interface ToolTipProps {
  text: string | React.ReactNode;
  children: React.ReactNode;
  width?: string;
  fontSize?: string;
}

const ToolTip: FunctionalComponent<ToolTipProps> = (
  props: ToolTipProps,
): JSX.Element => {
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
