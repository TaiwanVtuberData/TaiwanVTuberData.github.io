import { VTuberAnniversaryData } from "../../types/ApiData/VTuberAnniversaryData";
import { VTuberAnniversaryDisplayData } from "../../types/TableDisplayData/VTuberAnniversaryDisplayData";
import { VTuberBasicToDisplay } from "./BasicTransform";
import { debutStringToDebutInfo } from "./DebutStringToDebutInfo";

export const VTuberAnniversaryToDisplay = (
  e: VTuberAnniversaryData,
): VTuberAnniversaryDisplayData => ({
  ...VTuberBasicToDisplay(e),
  debutInfo: debutStringToDebutInfo(e.debutDate),
  debutDate: e.debutDate,
  anniversaryYearCount: e.anniversaryYearCount,
});
