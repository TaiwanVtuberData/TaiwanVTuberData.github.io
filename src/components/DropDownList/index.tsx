import { JSX } from "preact";
import style from "./style.module.css";
import dropDownStyle from "../../style/DropDownStyle.module.css";

export interface DropDownListProps<ValueType> {
  tipText?: string;
  optionValue?: Array<{ option: any; value: ValueType }>;
  value?: ValueType;
  onChange?: (e: unknown) => unknown;
}

function DropDownList<ValueType extends string | number>(
  props: DropDownListProps<ValueType>,
): JSX.Element {
  return (
    <div>
      <span class={style.tipText}>{props.tipText}</span>
      <select
        class={dropDownStyle.dropDown}
        value={props.value}
        onChange={props.onChange}
      >
        {props.optionValue !== undefined
          ? props.optionValue.map((e) => (
              <option key={e.value} value={e.value}>
                {e.option}
              </option>
            ))
          : null}
      </select>
    </div>
  );
}

export default DropDownList;
