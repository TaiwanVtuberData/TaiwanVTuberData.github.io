import { useEffect, useState } from "preact/hooks";
import * as Api from "../../services/ApiService";
import {
  closeProfileModal,
  useProfileModalState,
} from "../../global/ProfileModalState";
import { VTuberDisplayFullData } from "../../types/TableDisplayData/VTuberDisplayFullData";
import VTuberInformation from "../VTuberInformation";
import style from "./style.module.css";
import { VTuberFullToDisplay } from "../../utils/transform/FullTransform";
import { Text } from "preact-i18n";
import { JSX } from "preact/jsx-runtime";

const VTuberProfileModal = (): JSX.Element => {
  const modalState = useProfileModalState();

  const [data, setData] = useState<VTuberDisplayFullData>();

  useEffect(() => {
    const getVTuber = async (): Promise<void> => {
      if (modalState.VTuberId === null) {
        setData(undefined);
        return;
      }

      await Api.getVTuber(modalState.VTuberId).then((res) => {
        setData(VTuberFullToDisplay(res.data.VTuber));
      });
    };

    getVTuber();
  }, [modalState.VTuberId]);

  return (
    <div
      class={style.modal}
      onClick={(): void => {
        closeProfileModal();
      }}
      style={{ display: modalState.isOpen ? "block" : "none" }}
    >
      <div
        class={style.modalContent}
        onClick={(e): void => {
          e.stopPropagation();
        }}
      >
        <div class={style.profile}>
          <h1>{data?.name ?? <Text id="text.loading">Loading...</Text>}</h1>
          {data !== undefined ? (
            <VTuberInformation VTuber={data} clickBehavior="goToPage" />
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default VTuberProfileModal;
