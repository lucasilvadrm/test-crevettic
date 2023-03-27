import {
  createContext, useMemo, useState,
} from 'react';
import PropTypes from 'prop-types';

export const ModalContext = createContext();

export function ModalProvider({ children }) {
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const value = useMemo(() => ({ openModal, handleOpenModal, handleCloseModal }), [openModal]);

  return (
    <ModalContext.Provider value={value}>
      {children}
    </ModalContext.Provider>
  );
}

ModalProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
