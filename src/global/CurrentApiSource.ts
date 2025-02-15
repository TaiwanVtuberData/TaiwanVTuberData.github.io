import { ApiSourceModifier } from '../types/ApiSourceOptions';
import createStore from 'react-superstore';

const defaultApiSource: ApiSourceModifier = 'jsdelivr';

export const [
  useCurrentApiSource,
  setCurrentApiSource,
  getCurrentApiSourceState,
] = createStore<ApiSourceModifier>(defaultApiSource);
