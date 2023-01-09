import createStore from 'react-hstore';
import { ApiSourceModifier } from '../types/Common/ApiSource';

const defaultApiSource: ApiSourceModifier = 'statically';

export const [
  useCurrentApiSource,
  setCurrentApiSource,
  getCurrentApiSourceState,
] = createStore(defaultApiSource);
