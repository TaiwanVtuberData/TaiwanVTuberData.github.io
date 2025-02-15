import dropDownStyle from '../../style/DropDownStyle.module.css';
import { ApiSourceOption } from '../../types/ApiSourceOptions';
import { Text } from 'preact-i18n';
import { JSX } from 'preact/jsx-runtime';

interface ApiSourceDropDownProps {
  apiSourceOptions: ReadonlyArray<ApiSourceOption>;
  apiSource: ApiSourceOption;
  onChange: (newApiSource: ApiSourceOption) => void;
}

const ApiSourceDropDown = (props: ApiSourceDropDownProps): JSX.Element => {
  return (
    <>
      <Text id="header.apiSourceSelection">
        API Source(Select GitHub if the page is not loading):
      </Text>
      <select
        class={dropDownStyle.dropDown}
        value={props.apiSource}
        onChange={(event: any) => {
          props.onChange(event.target.value);
        }}
      >
        {props.apiSourceOptions.map((e) => (
          <option key={e} value={e}>
            <Text id={`apiSourceTitle.${e}`}>placeholder</Text>
          </option>
        ))}
      </select>
    </>
  );
};
export default ApiSourceDropDown;
