import createStore from 'react-hstore';
import { VideoInfo } from '../types/Common/VideoInfo';
import { VideoInfoToFrameSrc } from '../utils/VideoInfoToFrameSrc';

const defaultModalState = {
  isOpen: false,
  frameSrc: null,
};

export const [useModalState, setModalState, getModalState] =
  createStore(defaultModalState);

export const openModal = (videoInfo: VideoInfo): void =>
  setModalState({ isOpen: true, frameSrc: VideoInfoToFrameSrc(videoInfo) });
