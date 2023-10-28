import { YouTubeData } from "./YouTubeData";

export interface YouTubePopularityData extends YouTubeData {
  readonly popularity: number;
}
