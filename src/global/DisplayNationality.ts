import createStore from 'react-hstore';
import { NationalityModifier } from '../types/Common/NationalityModifier';

const defaultDisplayNationality: NationalityModifier = 'all';

export const [
  useNationalityModifier,
  setNationalityModifier,
  getNationalityModifierState,
] = createStore(defaultDisplayNationality);
