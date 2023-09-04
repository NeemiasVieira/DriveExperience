import React from 'react';
import { useState, useEffect } from 'react';
import Modal, { Props } from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SucessModalStyle } from './SucessModalStyle';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

interface SucessModalProps {
  message: string;
  messageButton: string;
  buttonAction?: Function;
}

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: '15px',
    border: 'solid #000 1px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '500px',
    height: '300px',
  },
};

export const SucessModal: React.FC<SucessModalProps> = (
  props: SucessModalProps,
) => {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <SucessModalStyle>
          <FontAwesomeIcon icon={faCircleCheck} className='iconCheck' />
          <button onClick={(e) => closeModal()}>
            <FontAwesomeIcon icon={faCircleXmark} className='iconClose' />
          </button>
          <p>{props.message}</p>
          <button
            className='actionButton'
            onClick={(e) =>
              props.buttonAction ? props.buttonAction : closeModal()
            }
          >
            {props.messageButton}
          </button>
        </SucessModalStyle>
      </Modal>
    </>
  );
};
