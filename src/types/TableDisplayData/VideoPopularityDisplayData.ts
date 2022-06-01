export interface VideoPopularityDisplayData {
  id: string;
  ranking: number;
  name: string;
  imgUrl?: string;
  title: string;
  thumbnailUrl: string;
  videoUrl: string;
  viewCount: number;
  uploadTime: Date;
}
