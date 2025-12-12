import { HasCountType } from '../Common/CountType';
import { GrowthData } from '../Common/GrowthData';
import { VTuberDisplayData } from './VTuberDisplayData';

export interface GrowthDisplayData extends GrowthData {
  percentage: number;
}

export interface YearEndVTuberYouTubeGrowthDisplayData extends VTuberDisplayData {
  YouTubeSubscriber: HasCountType;
  _1YearGrowth: GrowthDisplayData;
  ranking: number;
}
