import dropDownStyle from '../../style/DropDownStyle.module.css';
import { LanguageOption, validI18n } from '../../types/LanguageOptions';
import { JSX } from 'preact';
import { Text } from 'preact-i18n';

interface LanguageDropDownProps {
  languageOptions: Array<LanguageOption>;
  locale: string;
  onChange: (newLanguage: validI18n) => void;
}

const LanguageDropDown = (props: LanguageDropDownProps): JSX.Element => {
  return (
    <>
      <Text id="header.chooseLanguage">Choose language: </Text>
      <select
        class={dropDownStyle.dropDown}
        value={props.locale}
        onChange={(event: any) => {
          props.onChange(event.target.value);
        }}
      >
        {props.languageOptions.map((e) => (
          <option key={e.i18n} value={e.i18n}>
            {e.displayText}
          </option>
        ))}
      </select>
    </>
  );
};

export default LanguageDropDown;
