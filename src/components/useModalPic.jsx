import { useState } from "react";

const useModalPic = (initiaValue = false) => {
  const [isOpen, setIsOpen] = useState(initiaValue);

  const openModalPic = () => setIsOpen(true);
  const closeModalPic = () => setIsOpen(false);

  return [isOpen, openModalPic, closeModalPic];
};

export default useModalPic;
