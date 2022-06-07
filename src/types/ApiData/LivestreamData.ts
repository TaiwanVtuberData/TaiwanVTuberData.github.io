export interface LivestreamData {
  readonly id: string;
  readonly name: string;
  readonly imgUrl?: string;
  readonly title: string;
  readonly videoUrl: string;
  readonly thumbnailUrl: string;
  readonly startTime: string;
}

export interface LivestreamDataResponse {
  readonly livestreams: ReadonlyArray<LivestreamData>;
}
