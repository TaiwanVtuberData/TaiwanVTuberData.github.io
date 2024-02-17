import { HasDebutInfo } from "../DebutInfo";
import { VTuberDisplayData } from "./VTuberDisplayData";

export interface VTuberAnniversaryDisplayData extends VTuberDisplayData {
  debutInfo: HasDebutInfo;
  debutDate: string;
  anniversaryYearCount: number;
}
