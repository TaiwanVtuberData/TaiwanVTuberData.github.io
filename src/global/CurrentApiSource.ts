import { ApiSourceModifier } from '../types/ApiSourceOptions';
import createStore from 'react-superstore';

const defaultApiSource: ApiSourceModifier = 'statically';

export const [
  useCurrentApiSource,
  setCurrentApiSource,
  getCurrentApiSourceState,
] = createStore<ApiSourceModifier>(defaultApiSource);
