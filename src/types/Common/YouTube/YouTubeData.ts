import { CountType } from '../CountType';
import { BaseYouTubeData } from './BaseYouTubeData';

export interface YouTubeData extends BaseYouTubeData {
  readonly subscriber: CountType;
}
