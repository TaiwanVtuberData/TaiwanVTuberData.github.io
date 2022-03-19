import { PaginationOptions } from 'react-data-table-component';

export interface Dictionary {
  header: {
    title: string;
    chooseLanguage: string;
    home: string;
    eventCalendar: string;
    allVTubers: string;
    groupList: string;
    trendingVTubers: string;
    trendingVideos: string;
    growingVTubers: string;
    debutVTubers: string;
    graduateVTubers: string;
    reportIssue: string;
    about: string;
    group: string;
    memberList: string;
  };
  table: {
    displayName: string;
    links: string;
    YouTubeSubscriberCount: string;
    TwitchFollowerCount: string;
    group: string;
    nationality: string;
    hiddenCount: string;
    searchByDisplayName: string;
    searchByGroup: string;
    searchByGroupMember: string;
    searchByDate: string;
    loading: string;
    popularity: string;
    averageSubscriberCount: string;
    totalSubscriberCount: string;
    memberCount: string;
    memberList: string;
    debutDate: string;
    paginationOptions: PaginationOptions;
  };
}
