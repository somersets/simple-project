import { ReactNode } from "react";
import { MODAL_NAMES } from "@/shared/enums/modal-routes";

export interface IModal {
  children: ReactNode;
  renderHeader?: () => ReactNode;
  isOpened?: boolean;
  modalName: MODAL_NAMES;
}

export interface BaseModal {
  openModal: () => void;
  closeModal: () => void;
}
