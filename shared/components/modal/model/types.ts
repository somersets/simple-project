import { ReactNode } from "react";

export interface IModal {
  children: ReactNode;
  headerContent?: ReactNode;
  isOpened?: boolean;
}

export interface BaseModal {
  openModal: () => void;
  closeModal: () => void;
}
