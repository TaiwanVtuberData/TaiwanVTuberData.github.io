import { VTuberDebutData } from "../../types/ApiData/VTuberDebutData";
import { VTuberDebutDisplayData } from "../../types/TableDisplayData/VTuberDebutDisplayData";
import { VTuberBasicToDisplay } from "./BasicTransform";
import { debutStringToDebutInfo } from "./DebutStringToDebutInfo";

export const VTuberDebutToDisplay = (
  e: VTuberDebutData,
): VTuberDebutDisplayData => ({
  ...VTuberBasicToDisplay(e),
  debutInfo: debutStringToDebutInfo(e.debutDate),
  debutDate: e.debutDate,
});
