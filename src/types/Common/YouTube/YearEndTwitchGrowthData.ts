import { HasCountType } from "../CountType";
import { GrowthData } from "../GrowthData";
import { TwitchData } from "../Twitch/TwitchData";

export interface YearEndTwitchGrowthData extends TwitchData {
  readonly follower: HasCountType;
  readonly _365DaysGrowth: GrowthData;
}
