"use client";
import React, { useCallback } from "react";
import toast, { ToastBar, Toaster, Toast as ToastType } from "react-hot-toast";
import { useTheme } from "styled-components";
import Image from "next/image";

// docs https://react-hot-toast.com/docs
function Toast() {
  const theme = useTheme();

  const handleClickToast = useCallback(({ type, id }: ToastType) => {
    if (type !== "loading") {
      toast.dismiss(id);
    }
  }, []);
  return (
    <Toaster
      toastOptions={{
        error: {
          icon: (
            /*<Image
              src={"/icons/info.svg"}
              style={{ filter: theme.colors.red0 }}
              alt="info icon"
              width={25}
              height={25}
            />*/
            null
          ),
          style: {
            backgroundColor: theme.colors.red2,
            fontWeight: 500,
            color: theme.colors.red0,
            maxWidth: "100vw",
          },
        },
        success: {
          style: {
            backgroundColor: theme.colors.green0,
            fontWeight: 500,
            color: theme.colors.white,
            maxWidth: "100vw",
          },
          iconTheme: {
            primary: theme.colors.white,
            secondary: theme.colors.green0,
          },
        },
      }}>
      {(t) => (
        <div onClick={() => handleClickToast(t)}>
          <ToastBar toast={t}>
            {({ icon, message }) => (
              <>
                {icon}
                {message}
              </>
            )}
          </ToastBar>
        </div>
      )}
    </Toaster>
  );
}

export default Toast;
