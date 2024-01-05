import { createPortal } from 'react-dom';
import { OverlayModal } from './Modal.styled';
import { useEffect } from 'react';

const modalRoot = document.querySelector('#modal-root');
function Modal({ onClose, setIsOpenModal }) {
  useEffect(() => {
    setIsOpenModal(onClose);
  }, [onClose, setIsOpenModal]);

  const handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      setIsOpenModal(false);
    }
  };

  if (!onClose) {
    return null;
  }
  return (
    <>
      {createPortal(
        <OverlayModal onClick={handleBackdropClick}></OverlayModal>,
        modalRoot
      )}
    </>
  );
}

export default Modal;
