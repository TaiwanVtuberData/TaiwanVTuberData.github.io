import createStore from "react-superstore";
import { NationalityModifier } from "../types/Common/NationalityModifier";

const defaultDisplayNationality: NationalityModifier = "all";

export const [
  useNationalityModifier,
  setNationalityModifier,
  getNationalityModifierState,
] = createStore<NationalityModifier>(defaultDisplayNationality);
