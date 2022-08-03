import { useState } from "react";

const useModal = (initiaValue = false) => {
  const [isOpen, setIsOpen] = useState(initiaValue);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return [isOpen, openModal, closeModal];
};

export default useModal;
