import { TODAY_DATE_STRING } from "../../global/TodayDate";
import { VTuberGraduateData } from "../../types/ApiData/VTuberGraduateData";
import { VTuberGraduateDisplayData } from "../../types/TableDisplayData/VTuberGraduateDisplayData";
import { VTuberBasicToDisplay } from "./BasicTransform";

export const VTuberGraduateToDisplay = (
  e: VTuberGraduateData,
): VTuberGraduateDisplayData => ({
  ...VTuberBasicToDisplay(e),
  graduateDate: e.graduateDate,
  isToday: e.graduateDate === TODAY_DATE_STRING,
});
