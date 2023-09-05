"use client";
import * as S from "./style.styled";
import { ModalPortal } from "../utils/ModalPortal";
import { IModal, BaseModal } from "../model/types";
import {
  forwardRef,
  useImperativeHandle,
  useState,
  MouseEvent,
  useEffect,
} from "react";
import { getDefaultAnimation } from "@/shared/utils/animation";

const MODAL_ROOT_SELECTOR = "#root-modal";

const mountedStyle = {
  animation: getDefaultAnimation("inAnimationFade"),
};
const unmountedStyle = {
  animation: getDefaultAnimation("outAnimationFade"),
  animationFillMode: "forwards",
};

const mountedModalStyle = {
  animation: getDefaultAnimation("inAnimationScale"),
};
const unmountedModalStyle = {
  animation: getDefaultAnimation("outAnimationScale"),
  animationFillMode: "forwards",
};

export default forwardRef<BaseModal, IModal>(function Modal(
  { children, headerContent, isOpened = false }: IModal,
  ref,
) {
  const [isModalOpened, setIsModalOpened] = useState(isOpened);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    if (isModalOpened) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isModalOpened]);

  useImperativeHandle(
    ref,
    () => {
      return {
        openModal: () => {
          if (!isModalOpened) setIsModalOpened(true);
          setIsMounted(!isMounted);
        },
        closeModal: () => setIsModalOpened(false),
      };
    },
    [],
  );

  return isModalOpened ? (
    <ModalPortal selector={MODAL_ROOT_SELECTOR}>
      <S.ModalWrapper
        style={isMounted ? mountedStyle : unmountedStyle}
        $isOpen={isModalOpened}
        onAnimationEnd={() => {
          if (!isMounted) setIsModalOpened(false);
        }}
        onClick={() => {
          setIsMounted(!isMounted);
        }}>
        <S.ModalContainer>
          <S.Modal
            style={isMounted ? mountedModalStyle : unmountedModalStyle}
            onClick={(event: MouseEvent<HTMLDivElement>) =>
              event.stopPropagation()
            }
            $isOpen={isModalOpened}
            role="modal">
            <S.ModalHeader>
              {headerContent ? headerContent : <S.ModalLogo />}
            </S.ModalHeader>
            <S.ModalContent>{children}</S.ModalContent>
          </S.Modal>
        </S.ModalContainer>
      </S.ModalWrapper>
    </ModalPortal>
  ) : null;
});
