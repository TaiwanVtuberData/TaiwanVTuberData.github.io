import { CountType } from '../CountType';
import { BaseTwitchData } from './BaseTwitchData';

export interface TwitchData extends BaseTwitchData {
  readonly follower: CountType;
}
