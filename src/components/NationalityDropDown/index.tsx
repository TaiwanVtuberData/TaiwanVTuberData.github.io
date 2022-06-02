import { Fragment, h } from 'preact';
import { Text } from 'preact-i18n';
import { NationalityModifier } from '../../types/Common/NationalityModifier';
import dropDownStyle from '../../style/DropDownStyle.module.css';

interface NationalityDropDownProps {
  nationalityOptions: ReadonlyArray<NationalityModifier>;
  nationality: NationalityModifier;
  onChange: (newNationality: NationalityModifier) => void;
}

const NationalityDropDown = (props: NationalityDropDownProps): JSX.Element => {
  return (
    <>
      <Text id="header.showVTubersOfNationality">Show VTuber Nationality:</Text>
      <select
        class={dropDownStyle.dropDown}
        value={props.nationality}
        onChange={(event: any) => {
          props.onChange(event.target.value);
        }}
      >
        {props.nationalityOptions.map((e) => (
          <option key={e} value={e}>
            <Text id={`nationalityTitle.${e}`}>placeholder</Text>
          </option>
        ))}
      </select>
    </>
  );
};
export default NationalityDropDown;
