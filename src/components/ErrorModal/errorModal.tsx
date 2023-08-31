import React from "react";
import { useState, useEffect } from "react";
import Modal from "react-modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import { ErrorModalStyle } from "./errorModalStyle";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { AxiosError } from "axios";
import { ErrorType } from "../../pages/Signup/Signup";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "15px",
  },
};

interface ErrorModalProps {
  messages: string[] | string | AxiosError | React.Dispatch<any>;
  error: ErrorType;
}

const elements = ["Type a password", "Type an e=mail"];

export const ErrorModal: React.FC<ErrorModalProps> = (
  props: ErrorModalProps
) => {
  useEffect(() => {
    if(props.error){
        setIsModalOpen(true);
    }
  }, [props.error]);
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
        <ErrorModalStyle>
          <FontAwesomeIcon className="iconError" icon={faTriangleExclamation} />
          <button onClick={(e) => closeModal()}>
            <FontAwesomeIcon icon={faCircleXmark} className="iconClose" />
          </button>
          {typeof props.messages === "string" ? (
            <p>{props.messages}</p>
          ) : Array.isArray(props.messages) && props.messages.length > 0 ? (
            props.messages.map((element, index) => <p key={index}>{element}</p>)
          ) : null}
        </ErrorModalStyle>
      </Modal>
    </>
  );
};
