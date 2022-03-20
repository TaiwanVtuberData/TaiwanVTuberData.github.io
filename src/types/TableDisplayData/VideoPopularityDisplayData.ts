import { h } from 'preact';

export interface VideoPopularityDisplayData {
  id: string;
  ranking: number;
  profileImg: h.JSX.Element | null;
  name: string;
  title: string;
  videoLink: h.JSX.Element | null;
  viewCount: number;
  uploadTime: Date;
}
