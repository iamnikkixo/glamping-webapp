import { createContext, useContext, useState } from 'react';
import { disablePageScroll, enablePageScroll } from 'scroll-lock';

const ModalContext = createContext();

export const useModal = () => useContext(ModalContext);

export const ModalProvider = ({ children }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    if (isModalOpen) {
      setModalOpen(false);
      enablePageScroll();
    } else {
      setModalOpen(true);
      disablePageScroll();
    }
  };

  return (
    <ModalContext.Provider value={{ isModalOpen, toggleModal }}>
      {children}
    </ModalContext.Provider>
  );
};
