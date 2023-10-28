import createStore from "react-superstore";
import { ApiSourceModifier } from "../types/Common/ApiSource";

const defaultApiSource: ApiSourceModifier = "statically";

export const [
  useCurrentApiSource,
  setCurrentApiSource,
  getCurrentApiSourceState,
] = createStore<ApiSourceModifier>(defaultApiSource);
