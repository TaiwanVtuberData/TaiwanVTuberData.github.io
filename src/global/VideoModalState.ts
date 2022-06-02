import createStore from 'react-hstore';
import { VideoInfo } from '../types/Common/VideoInfo';
import { VideoInfoToFrameSrc } from '../utils/VideoInfoToFrameSrc';

const defaultModalState = {
  isOpen: false,
  frameSrc: null,
};

export const [useVideoModalState, setVideoModalState, getVideoModalState] =
  createStore(defaultModalState);

export const openVideoModal = (videoInfo: VideoInfo): void =>
  setVideoModalState({
    isOpen: true,
    frameSrc: VideoInfoToFrameSrc(videoInfo),
  });

export const closeVideoModal = (): void =>
  setVideoModalState({ isOpen: false, frameSrc: '' });
