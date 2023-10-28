import { VTuberData } from "./VTuberData";

export interface VTuberDebutData extends VTuberData {
  readonly debutDate: string;
}

export interface VTuberDebutDataResponse {
  readonly VTubers: ReadonlyArray<VTuberDebutData>;
}
