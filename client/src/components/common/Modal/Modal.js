import { useEffect, useRef, useState } from "react";
import styles from "./Modal.module.css";

const Modal = ({ isOpen, onClose, children, ...props }) => {
  const modalRef = useRef();

  // if (isOpen) {
  //   modalRef.current.showModal();
  // } else {
  //   modalRef.current.close();
  // }

  const handleClickOutside = e => {
    console.log(e.target);
    if (e.target == modalRef.current) {
      modalRef.current.close();
      // Let the parent component update their state for "open" and "closed" based on clicking outside
      onClose();
    }
  };

  useEffect(() => {
    if (isOpen) {
      modalRef.current.showModal();
    } else {
      modalRef.current.close();
    }
  }, [isOpen]);

  return (
    <dialog
      ref={modalRef}
      onClick={handleClickOutside}
      className={`${styles.modal} ${props.className}`}
    >
      <div className={`${styles["modal-container"]} `}>{children}</div>
    </dialog>
  );
};

export default Modal;
