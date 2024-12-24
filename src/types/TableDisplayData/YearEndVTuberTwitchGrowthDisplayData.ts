import { HasCountType } from "../Common/CountType";
import { GrowthData } from "../Common/GrowthData";
import { VTuberDisplayData } from "./VTuberDisplayData";

export interface GrowthDisplayData extends GrowthData {
  percentage: number;
}

export interface YearEndVTuberTwitchGrowthDisplayData
  extends VTuberDisplayData {
  TwitchFollower: HasCountType;
  _365DaysGrowth: GrowthDisplayData;
}
