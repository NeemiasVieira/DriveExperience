import React, { useState } from "react";
import Modal from "react-modal";
import { deleteReserve } from "../../assets/api/use-cases/reserves/deleteReserve";
import { ConfirmDeleteModalStyle } from "./ConfirmDeleteModalStyle";
Modal.setAppElement("#root");

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "15px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexFlow: "column wrap",
  },
};

interface ConfirmeDeleteModal {
  reserveId: number;
}

const ConfirmDeleteModal: React.FC<ConfirmeDeleteModal> = (
  props: ConfirmeDeleteModal
) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleDelete = async () => {
    await deleteReserve(props.reserveId);
    closeModal();
  };

  return (
    <>
      <button onClick={openModal}>Cancel Reserve</button>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Are you sure"
        style={customStyles}
      >
        <h2>Delete Confirmation</h2>
        <p>Are you sure you want to cancel the reservation?</p>
        <ConfirmDeleteModalStyle className="buttons">
          <button onClick={closeModal}>Cancel</button>
          <button onClick={handleDelete} style={{ marginLeft: "10px" }}>
            Confirmar Deleção
          </button>
        </ConfirmDeleteModalStyle>
      </Modal>
    </>
  );
};

export default ConfirmDeleteModal;
