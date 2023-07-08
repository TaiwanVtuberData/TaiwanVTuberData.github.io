import { Dictionary } from './Dictionary';

const zh: Dictionary = {
  header: {
    title: '臺灣 VTuber 列表',
    chooseLanguage: '選擇語言：',
    home: '首頁',
    eventCalendar: '重大活動月曆',
    eventCalendarDetail: '(由 Discord 群 <b>避難所</b> 提供)',
    allVTubers: '所有 VTuber',
    groupList: '團體列表',
    VTubersViewCount: 'VTuber 觀看數變化',
    trendingVTubers: '熱門 VTuber',
    trendingVideos: '熱門影片',
    growingVTubers: '成長中 VTuber',
    debutVTubers: '近期出道',
    debutVTubersIn7Days: '近 7 日出道 VTuber',
    graduateVTubers: '近期畢業',
    reportIssue: '資料登載/錯誤回報',
    about: '關於本站',
    group: '團體',
    memberList: '成員列表',
    top10: '前 10',
    YouTubeSubPlusTwitchFollowers: 'YouTube 訂閱 + Twitch 追隨',
    videoInformationUpdateTime: '影片資訊更新時間：',
    VTuberDataUpdateTime: '資料更新時間：',
    showVTubersOfNationality: 'VTuber 國籍顯示：',
    appVersion: '版本：',
    livestreaming: '現正實況',
    debutToday: '今日出道',
    recentLivestream: '最近實況',
    apiSourceSelection: 'API 來源(若頁面無法載入請選擇 GitHub)：',
  },
  table: {
    displayName: '名稱',
    links: '相關連結',
    YouTubeSubscriberCount: 'YouTube 訂閱人數',
    TwitchFollowerCount: 'Twitch 追隨人數',
    group: '團體',
    nationality: '國家',
    title: '標題',
    video: '影片',
    viewCount: '觀看次數',
    uploadTime: '上傳時間',
    hiddenCount: '未顯示',
    noDataCount: '無資料',
    searchByDisplayName: '依名稱搜尋',
    searchByYouTubeId: '依 YouTube ID 搜尋 ',
    searchByTwitchId: '依 Twitch ID 搜尋 ',
    searchByGroup: '依團體搜尋',
    searchByNationality: '依國家搜尋',
    searchByGroupMember: '依團體成員搜尋',
    searchByDate: '依日期搜尋',
    searchByTitle: '依標題搜尋',
    popularity: '熱度',
    averageSubscriberCount: '平均訂閱人數',
    totalSubscriberCount: '總訂閱人數',
    memberCount: '成員人數',
    memberList: '成員',
    debutDate: '出道日期',
    graduateDate: '畢業日期',
    _7DaysGrowth: '7 日成長 (幅度)',
    _30DaysGrowth: '30 日成長 (幅度)',
    _7DaysViewCountGrowth: '7 日成長',
    _30DaysViewCountGrowth: '30 日成長',
    atLeast: '至少',
    noRecord: '無紀錄',
    noDuplicate: '同一 VTuber 一影片',
    allVideos: '所有影片',
    popularVideo: '熱門影片',
    options: '選項:',
    YouTubeTwitchCount: 'YouTube 訂閱人數 + Twitch 追隨人數',
    sortingMethod: '排序方式：',
    YouTubeTotalViewCount: 'YouTube 總觀看次數',
    activity: '活動狀態',
    paginationOptions: {
      noRowsPerPage: false,
      rowsPerPageText: '每頁數量',
      rangeSeparatorText: '共有',
      selectAllRowsItem: true,
      selectAllRowsItemText: '所有',
    },
    startTime: '開始時間',
    livestream: '直播',
    combined: '合併',
  },
  activityText: {
    preparing: '準備中',
    active: '活動中',
    graduated: '已畢業',
  },
  text: {
    reportUsingGoogleForm: '使用 Google 表單回報',
    reportUsingGitHub: '使用 GitHub Issue 回報',
    showVideo: '顯示影片',
    link: '連結',
    loading: '載入中...',
    onlyShowing: '只顯示',
    noData: '無資料',
    openSearch: '新增搜尋',
    closeSearch: '關閉',
  },
  toolTip: {
    eventCalendar: '月曆非由本站維護者維護',
    trendingVTubers:
      '熱度計算方式：近 30 日 YouTube 上傳影片的觀看中位數 + 近 30 日 Twitch 過去實況的觀看中位數',
    growingVTubers: '只會顯示近 7 日人數成長至少 100 人的頻道',
    debutVTubers: '以臺灣時區為準，只會顯示近 30 日出道/即將出道的 VTuber',
    graduateVTubers: '以臺灣時區為準，只會顯示近 30 日畢業/即將畢業的 VTuber',
    groupList:
      '熱度計算方式：所有頻道近 30 日 YouTube 上傳影片的觀看中位數 + 近 30 日 Twitch 過去實況的觀看中位數',
  },
  termsOfService: {
    termsOfService: '使用條款',
    lastUpdated: '更新日期：2021/12/31',
    line1: `臺灣 VTuber 列表 (下稱本站) 使用 <a href="https://developers.google.com/youtube" text-decoration="none" target="_blank" rel="noopener noreferrer">YouTube API 服務</a> 定期更新收錄之 VTuber YouTube 頻道資料。`,
    line2: '每次更新收集之資料如下：',
    YouTubeBulletPoint1: '頻道訂閱者人數',
    YouTubeBulletPoint2: '近 7 日 / 30 日頻道訂閱者人數變化',
    YouTubeBulletPoint3: '頻道近 30 日影片觀看中位數',
    YouTubeBulletPoint4: '頻道近 30 日最高觀看影片',
    line3: `使用此站代表您同意遵守 <a href="https://www.youtube.com/t/terms" text-decoration="none" target="_blank" rel="noopener noreferrer">YouTube 服務條款</a>。`,
    line4: `本站使用 <a href="https://dev.twitch.tv/docs/api/" text-decoration="none" target="_blank" rel="noopener noreferrer">Twitch API</a> 定期更新收錄之 VTuber Twitch 頻道資料。`,
    TwitchBulletPoint1: '頻道追隨者人數',
    TwitchBulletPoint2: '頻道近 30 日過去實況觀看中位數',
    TwitchBulletPoint3: '頻道近 30 日最高觀看過去實況',
  },
  privacyPolicy: {
    privacyPolicy: '隱私權政策',
    lastUpdated: '更新日期：2022/03/22',
    bulletPoint1: `本站不會主動要求或是收集使用者個人資料，但是無法保證網站服務提供者 (GitHub) 不會蒐集使用者個人資料。`,
    bulletPoint2: `本站只會以 Cookie 儲存使用者的語言設定，並且不使用任何其他 Cookie 或是其他追蹤技術追蹤使用者使用記錄，但是無法保證所提供之內嵌 Google 日曆、YouTube 影片、或 Twitch 影片不會追蹤使用者資料。`,
    referToGoogle: `關於 Google 隱私權政策請見連結：<a href="http://www.google.com/policies/privacy" text-decoration="none" target="_blank" rel="noopener noreferrer">http://www.google.com/policies/privacy</a>。`,
    bulletPoint3: `本站無法保證所提供之其他網站連結不會蒐集使用者資料。`,
  },
  technicalDetails: {
    technicalDetails: '技術細節',
    bulletPoint1: `資料來源：<a href="https://github.com/TaiwanVtuberData/TaiwanVtuberTrackingData" target="_blank" rel="noopener noreferrer">https://github.com/TaiwanVtuberData/TaiwanVtuberTrackingData</a>`,
    bulletPoint2: '資料更新時間：每日 05:30、11:30、17:30、19:00、20:30 UTC+8',
    bulletPoint3: `本站原始碼：<a href="https://github.com/TaiwanVtuberData/TaiwanVTuberData.github.io" target="_blank" rel="noopener noreferrer">https://github.com/TaiwanVtuberData/TaiwanVtuberData.github.io</a>`,
  },
  scroll: {
    top: '至頁頂',
    bottom: '至頁尾',
  },
  nationalityTitle: {
    all: '所有',
    TW: '臺灣',
    HK: '香港',
    MY: '馬來西亞',
  },
  apiSourceTitle: {
    statically: 'Statically',
    github: 'GitHub',
  },
} as const;

export default zh;
