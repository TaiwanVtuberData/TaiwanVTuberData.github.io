import { VTuberData } from "./VTuberData";

export interface VTuberGraduateData extends VTuberData {
  readonly graduateDate: string;
}

export interface VTuberGraduateDataResponse {
  readonly VTubers: ReadonlyArray<VTuberGraduateData>;
}
