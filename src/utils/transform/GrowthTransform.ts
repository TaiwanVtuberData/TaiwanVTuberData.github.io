import { VTuberGrowthData } from "../../types/ApiData/VTuberGrowthData";
import { GrowthData } from "../../types/Common/GrowthData";
import {
  GrowthDisplayData,
  VTuberGrowthDisplayData,
} from "../../types/TableDisplayData/VTuberGrowthDisplayData";
import { VTuberBasicToDisplay } from "./BasicTransform";

const growthDataToDisplayData = (
  e: GrowthData,
  subCount?: number,
): GrowthDisplayData => ({
  ...e,
  percentage: subCount !== undefined && subCount !== 0 ? e.diff / subCount : 0,
});

export const VTuberGrowthToDisplay = (
  e: VTuberGrowthData,
): VTuberGrowthDisplayData => ({
  ...VTuberBasicToDisplay(e),
  YouTubeSubscriber: e.YouTube.subscriber,
  _7DaysGrowth: growthDataToDisplayData(
    e.YouTube._7DaysGrowth,
    e.YouTube.subscriber.count,
  ),
  _30DaysGrowth: growthDataToDisplayData(
    e.YouTube._30DaysGrowth,
    e.YouTube.subscriber.count,
  ),
});
