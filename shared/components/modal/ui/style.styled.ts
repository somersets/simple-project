import styled from "styled-components";

interface ModalStyle {
  $isOpen: boolean;
}

const ModalContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const ModalWrapper = styled.div<ModalStyle>`
  position: absolute;
  z-index: 9999;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);

  @keyframes inAnimationFade {
    0% {
      opacity: 0;
      visibility: hidden;
    }
    100% {
      opacity: 1;
      visibility: visible;
    }
  }

  @keyframes outAnimationFade {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
      visibility: hidden;
    }
  }
`;

const Modal = styled.div<ModalStyle>`
  position: relative;
  padding: 36px;
  width: fit-content;
  max-width: 600px;
  left: 50%;
  top: 50%;
  border-radius: ${({ theme }) => theme.roundCorners.medium};
  background: ${({ theme }) => theme.colors.bgColor1};
  transform: translate(-50%, -50%);
  @keyframes inAnimationScale {
    0% {
      transform: translate(-50%, -50%) scale(0);
    }
    100% {
      transform: translate(-50%, -50%) scale(1);
    }
  }
  @keyframes outAnimationScale {
    0% {
      transform: translate(-50%, -50%) scale(1);
    }
    100% {
      transform: translate(-50%, -50%) scale(0);
    }
  }
`;

const ModalContent = styled.div`
  width: 100%;
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 0;
`;

const ModalCloseCross = styled.div`
  position: absolute;
  z-index: 99;
  display: flex;
  align-items: center;
  justify-content: center;
  right: 30px;
  top: 30px;
  cursor: pointer;
`;

export {
  Modal,
  ModalContent,
  ModalHeader,
  ModalWrapper,
  ModalContainer,
  ModalCloseCross,
};
