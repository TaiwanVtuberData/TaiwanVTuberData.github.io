import { VTuberData } from "./VTuberData";

export interface GroupData {
  readonly id: string;
  readonly name: string;
  readonly popularity: number;
  readonly livestreamPopularity: number;
  readonly videoPopularity: number;
  readonly members: ReadonlyArray<VTuberData>;
}

export interface GroupDataResponse {
  readonly groups: ReadonlyArray<GroupData>;
}
