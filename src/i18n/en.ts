import { Dictionary } from './Dictionary';

const en: Dictionary = {
  header: {
    title: 'Taiwan VTuber Data (No Content Yet)',
    chooseLanguage: 'Choose language:',
    home: 'Home',
    eventCalendar: 'Event Calendar',
    allVTubers: 'All VTubers',
    groupList: 'Group List',
    trendingVTubers: 'Trending VTubers',
    trendingVideos: 'Trending Videos',
    growingVTubers: 'Growing VTubers',
    debutVTubers: 'Debut VTubers',
    graduateVTubers: 'Graduate VTubers',
    reportIssue: 'Data Posting/Report Issue',
    about: 'About',
  },
  table: {
    displayName: 'Name',
    links: 'Links',
    YouTubeSubscriberCount: 'YouTube Subscribers',
    TwitchFollowerCount: 'Twitch Followers',
    group: 'Group',
    nationality: 'Nationality',
    hiddenCount: 'hidden',
    searchByDisplayName: 'Search by name',
    searchByGroup: 'Search by group',
    loading: 'Loading...',
    paginationOptions: {
      noRowsPerPage: false,
      rowsPerPageText: 'Rows per page',
      rangeSeparatorText: 'of',
      selectAllRowsItem: true,
      selectAllRowsItemText: 'All',
    },
  },
} as const;

export default en;
