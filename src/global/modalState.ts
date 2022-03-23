import createStore from 'react-hstore';

const defaultModalState = {
  isOpen: false,
  frameSrc: '',
};

export const [useModalState, setModalState, getModalState] =
  createStore(defaultModalState);
