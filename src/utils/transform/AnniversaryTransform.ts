import { VTuberAnniversaryData } from "../../types/ApiData/VTuberAnniversaryData";
import { VTuberAnniversaryDisplayData } from "../../types/TableDisplayData/VTuberAnniversaryDisplayData";
import { VTuberBasicToDisplay } from "./BasicTransform";
import { debutOfTheYearStringToAnniversaryDebutInfo } from "./DebutStringToDebutInfo";

export const VTuberAnniversaryToDisplay = (
  e: VTuberAnniversaryData,
): VTuberAnniversaryDisplayData => ({
  ...VTuberBasicToDisplay(e),
  debutInfo: debutOfTheYearStringToAnniversaryDebutInfo(
    e.debutDate,
    e.debutDateOfTheYear,
  ),
  debutDate: e.debutDate,
  anniversaryYearCount: e.anniversaryYearCount,
});
