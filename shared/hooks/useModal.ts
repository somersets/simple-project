import { MODAL_NAMES } from "@/shared/enums/modal-routes";
import emitter from "@/shared/utils/emitter";

export default function useModal() {
  const openModal = (modalName: MODAL_NAMES) => {
    emitter.emit(modalName, "open");
  };
  const closeModal = (modalName: MODAL_NAMES) => {
    emitter.emit(modalName, "close");
  };
  return {
    openModal,
    closeModal,
  };
}
