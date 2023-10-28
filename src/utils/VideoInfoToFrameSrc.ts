import { VideoInfo } from "../types/Common/VideoInfo";

export const VideoInfoToFrameSrc = (videoInfo: VideoInfo): string => {
  switch (videoInfo.type) {
    case "YouTube":
      return `https://www.youtube.com/embed/${videoInfo.id}`;
    case "Twitch":
      return `https://player.twitch.tv/?video=${videoInfo.id}&parent=${window.location.hostname}&autoplay=false`;
  }
};
