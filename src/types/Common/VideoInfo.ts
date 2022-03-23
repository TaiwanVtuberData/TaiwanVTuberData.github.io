export type VideoType = 'YouTube' | 'Twitch';

export interface VideoInfo {
  type: VideoType;
  id: string;
}
