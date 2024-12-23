import { HasCountType } from "../CountType";
import { GrowthData } from "../GrowthData";
import { YouTubeData } from "./YouTubeData";

export interface YearEndYouTubeGrowthData extends YouTubeData {
  readonly subscriber: HasCountType;
  readonly _365DaysGrowth: GrowthData;
}
