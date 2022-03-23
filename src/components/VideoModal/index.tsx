import { FunctionalComponent, h } from 'preact';
import { setModalState, useModalState } from '../../global/modalState';
import style from './style.module.css';

const VideoModal: FunctionalComponent = (): h.JSX.Element => {
  const modalState = useModalState();

  const closeModal = (): void => setModalState({ isOpen: false, frameSrc: '' });

  return (
    <div
      class={style.modal}
      onClick={(): void => closeModal()}
      style={{ display: modalState.isOpen ? 'block' : 'none' }}
    >
      <div class={style.modalContent}>
        <span class={style.closeButton} onClick={(): void => closeModal()}>
          &times;
        </span>
        <iframe src="" width={640} height={360} allowFullScreen={true} />
      </div>
    </div>
  );
};

export default VideoModal;
