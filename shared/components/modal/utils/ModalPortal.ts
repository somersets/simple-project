import { ReactNode, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

interface UsePortalProps {
  children: ReactNode;
  selector: string;
}

export function ModalPortal({ children, selector }: UsePortalProps) {
  const modalRef = useRef<HTMLElement | null>(null);
  const [isMounted, setMounted] = useState(false);

  useEffect(() => {
    modalRef.current = document.querySelector(selector);
    setMounted(true);
  }, []);

  return isMounted && modalRef.current
    ? createPortal(children, modalRef.current)
    : null;
}
