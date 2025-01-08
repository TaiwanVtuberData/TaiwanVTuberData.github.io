import { NationalityModifier } from '../types/Common/NationalityModifier';
import createStore from 'react-superstore';

const defaultDisplayNationality: NationalityModifier = 'all';

export const [
  useNationalityModifier,
  setNationalityModifier,
  getNationalityModifierState,
] = createStore<NationalityModifier>(defaultDisplayNationality);
