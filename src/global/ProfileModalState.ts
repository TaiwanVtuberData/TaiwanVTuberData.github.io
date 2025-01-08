import createStore from 'react-superstore';

interface ProfileModal {
  isOpen: boolean;
  VTuberId: string | null;
}

const defaultModalState: ProfileModal = {
  isOpen: false,
  VTuberId: null,
};

export const [
  useProfileModalState,
  setProfileModalState,
  getProfileModalState,
] = createStore<ProfileModal>(defaultModalState);

export const openProfileModal = (VTuberId: string): void =>
  setProfileModalState({ isOpen: true, VTuberId: VTuberId });

export const closeProfileModal = (): void =>
  setProfileModalState({ isOpen: false, VTuberId: null });
