import { PaginationOptions } from 'react-data-table-component';

export interface Dictionary {
  header: {
    title: string;
    chooseLanguage: string;
    home: string;
    eventCalendar: string;
    eventCalendarDetail: string;
    allVTubers: string;
    groupList: string;
    trendingVTubers: string;
    trendingVideos: string;
    growingVTubers: string;
    debutVTubers: string;
    debutVTubersIn7Days: string;
    graduateVTubers: string;
    reportIssue: string;
    about: string;
    group: string;
    memberList: string;
    top10: string;
    YouTubeSubPlusTwitchFollowers: string;
    statisticUpdateTime: string;
    VTuberDataUpdateTime: string;
  };
  table: {
    displayName: string;
    links: string;
    YouTubeSubscriberCount: string;
    TwitchFollowerCount: string;
    group: string;
    nationality: string;
    title: string;
    video: string;
    viewCount: string;
    uploadTime: string;
    hiddenCount: string;
    searchByDisplayName: string;
    searchByGroup: string;
    searchByGroupMember: string;
    searchByDate: string;
    searchByTitle: string;
    loading: string;
    popularity: string;
    averageSubscriberCount: string;
    totalSubscriberCount: string;
    memberCount: string;
    memberList: string;
    debutDate: string;
    graduateDate: string;
    _7DaysGrowth: string;
    _30DaysGrowth: string;
    atLeast: string;
    noRecord: string;
    noDuplicate: string;
    allVideos: string;
    options: string;
    popularVideo: string;
    paginationOptions: PaginationOptions;
  };
  text: {
    reportUsingGoogleForm: string;
    reportUsingGitHub: string;
    showVideo: string;
  };
  toolTip: {
    eventCalendar: string;
    trendingVTubers: string;
    growingVTubers: string;
    debutVTubers: string;
    graduateVTubers: string;
    groupList: string;
  };
  termsOfService: {
    termsOfService: string;
    lastUpdated: string;
    line1: string;
    line2: string;
    YouTubeBulletPoint1: string;
    YouTubeBulletPoint2: string;
    YouTubeBulletPoint3: string;
    YouTubeBulletPoint4: string;
    line3: string;
    line4: string;
    TwitchBulletPoint1: string;
    TwitchBulletPoint2: string;
    TwitchBulletPoint3: string;
  };
  privacyPolicy: {
    privacyPolicy: string;
    lastUpdated: string;
    bulletPoint1: string;
    bulletPoint2: string;
    referToGoogle: string;
    bulletPoint3: string;
  };
  technicalDetails: {
    technicalDetails: string;
    bulletPoint1: string;
    bulletPoint2: string;
    bulletPoint3: string;
  };
  scroll: {
    top: string;
    bottom: string;
  };
  notFound: {
    title: string;
    detail: string;
    goHome: string;
  };
}
