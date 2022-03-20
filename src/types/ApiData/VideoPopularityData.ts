export interface VideoPopularityData {
  readonly id: string;
  readonly name: string;
  readonly imgUrl?: string;
  readonly title: string;
  readonly videoUrl: string;
  readonly thumbnailUrl: string;
  readonly viewCount: number;
  readonly uploadTime: string;
}

export interface VideoPopularityDataResponse {
  readonly videos: ReadonlyArray<VideoPopularityData>;
}
