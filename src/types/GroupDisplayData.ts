import { h } from 'preact';

export interface GroupDisplayData {
  id: string;
  name: string;
  popularity: number;
  averageSubscriberCount: number;
  totalSubscriberCount: number;
  memberCount: number;
  memberList: h.JSX.Element | null;
}
