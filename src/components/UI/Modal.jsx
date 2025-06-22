import { useEffect, useRef } from "react";
import classes from "./Modal.module.css";
import { createPortal } from "react-dom";

const Modal = ({ open, children, onClose }) => {
  const dialog = useRef();
  useEffect(() => {
    const modal = dialog.current;
    if (open) {
      modal.showModal();
    }
    return () => modal.close();
  }, [open]);

  return createPortal(
    <dialog ref={dialog} className={classes.modal} onClose={onClose}>
      {children}
    </dialog>,
    document.getElementById("modal")
  );
};

export default Modal;
