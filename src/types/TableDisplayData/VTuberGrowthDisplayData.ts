import { HasCountType } from "../Common/CountType";
import { GrowthData } from "../Common/GrowthData";
import { VTuberDisplayData } from "./VTuberDisplayData";

export interface GrowthDisplayData extends GrowthData {
  percentage: number;
}

export interface VTuberGrowthDisplayData extends VTuberDisplayData {
  YouTubeSubscriber: HasCountType;
  _7DaysGrowth: GrowthDisplayData;
  _30DaysGrowth: GrowthDisplayData;
}
