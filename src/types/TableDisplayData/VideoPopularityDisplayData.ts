export interface VideoPopularityDisplayData {
  id: string;
  ranking: number;
  name: string;
  imgUrl: string | null;
  title: string;
  thumbnailUrl: string;
  videoUrl: string;
  viewCount: number;
  uploadTime: Date;
}
