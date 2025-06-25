import { ToastContainer, toast } from "react-toastify";
import { useSelector } from "react-redux";
import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

export default function Notification() {
  const { isShow, status, message } = useSelector((state) => state.notif);
  const toastId = useRef(null); // Use a ref to hold the toast ID

  useEffect(() => {
    if (isShow) {
      if (status === "loading") {
        // When loading, create the toast and store its ID
        toastId.current = toast.loading(message);
      } else if (status === "success") {
        // When success, UPDATE the existing toast using its ID
        toast.update(toastId.current, {
          render: message,
          type: "success",
          isLoading: false,
          autoClose: 5000,
        });
      } else if (status === "error") {
        // When error, UPDATE the existing toast using its ID
        toast.update(toastId.current, {
          render: message,
          type: "error",
          isLoading: false,
          autoClose: 5000,
        });
      }
    }
  }, [isShow, status, message]);

  return createPortal(
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
    />,
    document.getElementById("modal")
  );
}
