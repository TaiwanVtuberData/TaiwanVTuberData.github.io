export interface LivestreamDisplayData {
  id: number;
  VTuberId: string;
  name: string;
  imgUrl: string | null;
  title: string | null;
  videoUrl: string;
  thumbnailUrl: string;
  startTime: Date;
}
