import React, { useState } from 'react';
import Modal from 'react-modal';
import { deleteReserve } from '../../assets/api/use-cases/reserves/deleteReserve';
import { ConfirmDeleteModalStyle } from './ConfirmDeleteModalStyle';
Modal.setAppElement('#root');

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: '15px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexFlow: 'column wrap',
    border: 'solid #000 1px',
    width: '500px',
    height: '200px',
  },
};

interface ConfirmeDeleteModal {
  reserveId: number;
  onRemove: Function;
}

const ConfirmDeleteModal: React.FC<ConfirmeDeleteModal> = (
  props: ConfirmeDeleteModal,
) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleDelete = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    await deleteReserve(props.reserveId);
    props.onRemove();
    closeModal();
  };

  return (
    <>
      <button onClick={openModal}>Cancel Reserve</button>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel='Are you sure'
        style={customStyles}
      >
        <h2>Cancel Reserve</h2>
        <p>Are you sure you want to cancel your reserve?</p>
        <ConfirmDeleteModalStyle className='buttons'>
          <button onClick={closeModal}>No</button>
          <button
            onClick={(e) => handleDelete(e)}
            style={{ marginLeft: '10px' }}
          >
            Yes
          </button>
        </ConfirmDeleteModalStyle>
      </Modal>
    </>
  );
};

export default ConfirmDeleteModal;
