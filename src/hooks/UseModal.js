import { useState } from "react";

export const UseModal = (id) => {
    const [modalOpen, setModalOpen] = useState(false);
    const openModal = (data) => {
        setModalOpen(prevState => !prevState);
    }
  
    return { modalOpen, openModal}
};