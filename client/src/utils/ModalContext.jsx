import { createContext, useContext, useState } from 'react';
import { disablePageScroll, enablePageScroll } from 'scroll-lock';

const ModalContext = createContext();

export const useModal = () => useContext(ModalContext);

export const ModalProvider = ({ children }) => {
  const [modalState, setModalState] = useState({});

  const toggleModal = (modalName) => {
    setModalState((prevState) => {
      const newState = {
        ...prevState,
        [modalName]: !prevState[modalName],
      };

      const isAnyModalOpen = Object.values(newState).some((state) => state);
      if (isAnyModalOpen) {
        disablePageScroll();
      } else {
        enablePageScroll();
      }

      return newState;
    });
  };

  return (
    <ModalContext.Provider value={{ modalState, toggleModal }}>
      {children}
    </ModalContext.Provider>
  );
};
