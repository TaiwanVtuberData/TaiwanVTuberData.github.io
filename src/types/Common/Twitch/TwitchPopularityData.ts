import { TwitchData } from './TwitchData';

export interface TwitchPopularityData extends TwitchData {
  readonly popularity: number;
}
