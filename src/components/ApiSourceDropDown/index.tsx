import { Fragment, h } from 'preact';
import dropDownStyle from '../../style/DropDownStyle.module.css';
import { ApiSourceModifier } from '../../types/Common/ApiSource';

interface ApiSourceDropDownProps {
  apiSourceOptions: ReadonlyArray<ApiSourceModifier>;
  apiSource: ApiSourceModifier;
  onChange: (newApiSource: ApiSourceModifier) => void;
}

const ApiSourceDropDown = (props: ApiSourceDropDownProps): JSX.Element => {
  return (
    <>
      {'選擇 API 來源(如果無法載入請選擇 github)：'}
      <select
        class={dropDownStyle.dropDown}
        value={props.apiSource}
        onChange={(event: any) => {
          props.onChange(event.target.value);
        }}
      >
        {props.apiSourceOptions.map((e) => (
          <option key={e} value={e}>
            {e}
          </option>
        ))}
      </select>
    </>
  );
};
export default ApiSourceDropDown;
