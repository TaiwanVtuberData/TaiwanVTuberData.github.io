import createStore from 'react-hstore';

const defaultModalState = {
  isOpen: false,
  VTuberId: null,
};

export const [
  useProfileModalState,
  setProfileModalState,
  getProfileModalState,
] = createStore(defaultModalState);

export const openProfileModal = (VTuberId: string): void =>
  setProfileModalState({ isOpen: true, VTuberId: VTuberId });

export const closeProfileModal = (): void =>
  setProfileModalState({ isOpen: false, VTuberId: null });
