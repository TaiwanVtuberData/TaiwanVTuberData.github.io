import createStore from "react-superstore";
import { VideoInfo } from "../types/Common/VideoInfo";
import { VideoInfoToFrameSrc } from "../utils/VideoInfoToFrameSrc";

interface VideoModal {
  isOpen: boolean;
  frameSrc: string | null;
}

const defaultModalState: VideoModal = {
  isOpen: false,
  frameSrc: null,
};

export const [useVideoModalState, setVideoModalState, getVideoModalState] =
  createStore<VideoModal>(defaultModalState);

export const openVideoModal = (videoInfo: VideoInfo): void =>
  setVideoModalState({
    isOpen: true,
    frameSrc: VideoInfoToFrameSrc(videoInfo),
  });

export const closeVideoModal = (): void =>
  setVideoModalState({ isOpen: false, frameSrc: "" });
