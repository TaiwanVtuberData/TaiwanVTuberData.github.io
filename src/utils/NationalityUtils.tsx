import { Text } from "preact-i18n";
import { getNationalityModifierState } from "../global/DisplayNationality";
import { NationalityModifier } from "../types/Common/NationalityModifier";
import { JSX } from "preact/jsx-runtime";

export const GetCurrentNationalitySpan = (): JSX.Element | null => {
  const nationalityModifier: NationalityModifier =
    getNationalityModifierState();

  switch (nationalityModifier) {
    case "TW":
    case "HK":
    case "MY":
      return (
        <>
          {" "}
          (<Text id="text.onlyShowing">only showing </Text>
          <Text id={`nationalityTitle.${nationalityModifier}`}>
            placeholder
          </Text>{" "}
          VTuber)
        </>
      );
    case "all":
    default:
      return null;
  }
};
