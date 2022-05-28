import { YouTubeData } from '../Common/YouTubeData';
import { BaseVTuberData } from './BaseVTuberData';

export interface VTuberData extends BaseVTuberData {
  readonly YouTube?: YouTubeData;
}

export interface VTuberDataResponse {
  readonly VTubers: ReadonlyArray<VTuberData>;
}
