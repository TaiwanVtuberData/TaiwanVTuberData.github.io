import { VTuberData } from "../ApiData/VTuberData";
import { VTuberLivestreamDisplayData } from "./VTuberLivestreamDisplayData";

export interface VTuberDisplayFullData extends VTuberData {
  debutDate: string | null;
  graduateDate: string | null;
  livestreams: Array<VTuberLivestreamDisplayData>;
}
