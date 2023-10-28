import { VTuberData } from "../../types/ApiData/VTuberData";

export const AllVTuberMock: ReadonlyArray<VTuberData> = [
  {
    id: "1",
    activity: "active",
    name: "杏仁ミル",
    imgUrl:
      "https://yt3.ggpht.com/CRhdIqMTAjxrPJJcpKYEY_Yot20ByMcBid-nsSCcl8YFRCi2wzS_oQZ0bgx490bodZPZVqvDOQ=s88-c-k-c0x00ffffff-no-rj",
    YouTube: {
      id: "UCFahBR2wixu0xOex84bXFvg",
      subscriber: {
        tag: "has",
        count: 382000,
      },
    },
    Twitch: {
      id: "vtuber_amiru",
      follower: {
        tag: "has",
        count: 22589,
      },
    },
    popularVideo: { type: "YouTube", id: "qwK7r3hbZ6k" },
    nationality: "TW",
  },
  {
    id: "2",
    activity: "active",
    name: "李李鈴蘭",
    imgUrl:
      "https://yt3.ggpht.com/y_VXsJfNp8sTQCB0lFemCleWB-9HpZ9R2pk7wbCOGrvkpFS3Qa1RAXqUVpgb0NNN9_xzWT446A=s88-c-k-c0x00ffffff-no-rj",
    YouTube: {
      id: "UCxWAL-c1psONO_DfG-cq2iA",
      subscriber: {
        tag: "has",
        count: 380000,
      },
    },
    group: "雲際線工作室",
    nationality: "TW",
  },
  {
    id: "3",
    activity: "active",
    name: "猫宮 バニラ",
    imgUrl:
      "https://static-cdn.jtvnw.net/jtv_user_pictures/1594218f-190e-458f-9f81-fb80a1dee13f-profile_image-300x300.png",
    Twitch: {
      id: "vanilla_shironeko",
      follower: {
        tag: "has",
        count: 17901,
      },
    },
    popularVideo: { type: "Twitch", id: "1406985305" },
    nationality: "TW",
  },
  {
    id: "4",
    activity: "active",
    name: "十五號",
    imgUrl:
      "https://yt3.ggpht.com/ytc/AKedOLQ6hM9Uffig6XUSxGZZIgdTh1O8NZSFFSDrY2bE=s240-c-k-c0x00ffffff-no-rj",
    YouTube: {
      id: "UC_UqaRNrLcaL4fp2IAPV0OQ",
      subscriber: {
        tag: "no",
      },
    },
    group: "SquareLive",
    nationality: "TW",
  },
  {
    id: "5",
    activity: "active",
    name: "天堂密室",
    imgUrl:
      "https://yt3.ggpht.com/ytc/AKedOLTgAzggO9m09I0djkiRiJjUeJSduOY6hnfDuzuf=s240-c-k-c0x00ffffff-no-rj",
    YouTube: {
      id: "UC7P5GH9nvcjP120r62h3v3g",
      subscriber: {
        tag: "hidden",
      },
    },
    group: "道具屋【玉兔】",
    nationality: "TW",
  },
  {
    id: "6",
    activity: "active",
    name: "如月ルミィ",
    YouTube: {
      id: "UCJcKh9mwJH4zhHsU4NDs54g",
      subscriber: {
        tag: "has",
        count: 25800,
      },
    },
    nationality: "HK",
  },
];
