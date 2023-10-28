import { FunctionalComponent, JSX } from "preact";
import {
  useVideoModalState,
  closeVideoModal,
} from "../../global/VideoModalState";
import style from "./style.module.css";

const VideoModal: FunctionalComponent = (): JSX.Element => {
  const modalState = useVideoModalState();

  return (
    <div
      class={style.modal}
      onClick={(): void => closeVideoModal()}
      style={{ display: modalState.isOpen ? "block" : "none" }}
    >
      <div class={style.modalContent}>
        <span class={style.closeButton} onClick={(): void => closeVideoModal()}>
          &times;
        </span>
        <iframe
          src={modalState.frameSrc ?? ""}
          width={640}
          height={360}
          allowFullScreen={true}
        />
      </div>
    </div>
  );
};

export default VideoModal;
