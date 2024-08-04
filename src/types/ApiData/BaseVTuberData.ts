import { Activity } from "../Common/Activity";
import { BaseTwitchData } from "../Common/Twitch/BaseTwitchData";
import { VideoInfo } from "../Common/VideoInfo";
import { BaseYouTubeData } from "../Common/YouTube/BaseYouTubeData";

export interface BaseVTuberData {
  readonly id: string;
  readonly activity: Activity;
  readonly name: string;
  readonly imgUrl: string | null;
  readonly YouTube: BaseYouTubeData | null;
  readonly Twitch: BaseTwitchData | null;
  readonly popularVideo: VideoInfo | null;
  readonly group: string | null;
  readonly nationality: string | null;
}
