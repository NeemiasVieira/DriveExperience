import React, { useState } from "react";
import Modal from "react-modal";
import { ConfirmReserveModalStyle } from "./ConfirmReserveModalStyle";
import { formatDate } from "../Reserve/Reserve";
import { CarType } from "../Car/Car";
import driveXperience from "../../assets/imgs/Logo.png";
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
    border: "solid #000 1px",
    width: "80vw",
    height: "90vh",
    maxHeight: "700px",
    maxWidth: "600px",
  },
};

interface ConfirmReserveModalProps {
  id: number;
  startDate: string | Date;
  endDate: string | Date;
  car: CarType;
  diffInDays: number;
  reserveFunction: Function;
}

const ConfirmReserveModal: React.FC<ConfirmReserveModalProps> = (
  props: ConfirmReserveModalProps
) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <button onClick={openModal}>Rent Now</button>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Are you sure"
        style={customStyles}
      >
        <ConfirmReserveModalStyle>
          <img
            src={driveXperience}
            alt="Drive Experience Logo"
            className="Logo"
          ></img>
          <h1>Confirm Reserve</h1>
          <img src={props.car.images[0]} alt="Car's Image"></img>
          <div className="Details">
            <div className="ReserveDetails">
              <h2>Reserve Details</h2>
              <p>
                <strong>Start Date: </strong>
                {formatDate(props.startDate as string)}
              </p>
              <p>
                <strong>End Date: </strong>
                {formatDate(props.endDate as string)}
              </p>
              <p>
                <strong>Price per day: </strong>$
                {props.car.dailyRate.toFixed(2)}
              </p>
              <p>
                <strong>Total Days: </strong>
                {props.diffInDays}
              </p>
              <p>
                <strong>Total cost: </strong>$
                {(props.diffInDays * props.car.dailyRate).toFixed(2)}
              </p>
            </div>
            <div className="CarDetails">
              <h2>Car Details</h2>
              <p>
                <strong>Model: </strong>
                {props.car.model}
              </p>
              <p>
                <strong>Year: </strong>
                {props.car.year}
              </p>
              <p>
                <strong>Transmission: </strong>
                {props.car.isAutomatic ? "Automatic" : "Manual"}
              </p>
              <p>
                <strong>Plate Number: </strong>
                {props.car.plateNumber}
              </p>
              <p>
                <strong>Type: </strong>
                {props.car.carType}
              </p>
              <p>
                <strong>Color: </strong>
                {props.car.color}
              </p>
              <p>
                <strong>Features: </strong>
                {props.car.features.join(", ")}
              </p>
            </div>
          </div>
          <p className="Alert">
            Once you confirm your reservation, you can cancel or modify it free
            of charge at least 2 days in advance.
          </p>
          <div className="Buttons">
            <button
              onClick={(e) => {
                closeModal();
                props.reserveFunction();
              }}
            >
              Reserve
            </button>
            <button onClick={closeModal}>Cancel</button>
          </div>
        </ConfirmReserveModalStyle>
      </Modal>
    </>
  );
};

export default ConfirmReserveModal;
