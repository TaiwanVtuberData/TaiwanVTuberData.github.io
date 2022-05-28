import { CountType } from './CountType';
import { BaseYouTubeData } from './YouTube/BaseYouTubeData';

export interface YouTubeData extends BaseYouTubeData {
  readonly id: string;
  readonly subscriber: CountType;
}
