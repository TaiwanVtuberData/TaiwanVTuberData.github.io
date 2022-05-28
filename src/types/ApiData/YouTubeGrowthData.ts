import { HasCountType } from '../Common/CountType';
import { GrowthData } from '../Common/GrowthData';
import { YouTubeData } from '../Common/YouTubeData';

export interface YouTubeGrowthData extends YouTubeData {
  readonly subscriber: HasCountType;
  readonly _7DaysGrowth: GrowthData;
  readonly _30DaysGrowth: GrowthData;
}
