import { Dictionary } from './Dictionary';

const zh: Dictionary = {
  header: {
    title: '臺灣 VTuber 列表 (目前無內容)',
    chooseLanguage: '選擇語言:',
    home: '首頁',
    eventCalendar: '重大活動月曆',
    allVTubers: '所有 VTuber',
    groupList: '團體列表',
    trendingVTubers: '熱門 VTuber',
    trendingVideos: '熱門影片',
    growingVTubers: '成長中 VTuber',
    debutVTubers: '近期出道',
    graduateVTubers: '近期畢業',
    reportIssue: '資料登載/錯誤回報',
    about: '關於',
  },
  table: {
    displayName: '名稱',
    links: '相關連結',
    YouTubeSubscriberCount: 'YouTube 訂閱人數',
    TwitchFollowerCount: 'Twitch 追隨人數',
    group: '團體',
    nationality: '國家',
    hiddenCount: '未顯示',
    searchByDisplayName: '依名稱搜尋',
    loading: '載入中...',
    paginationOptions: {
      noRowsPerPage: false,
      rowsPerPageText: '每頁數量',
      rangeSeparatorText: '共有',
      selectAllRowsItem: true,
      selectAllRowsItemText: '所有',
    },
  },
} as const;

export default zh;
