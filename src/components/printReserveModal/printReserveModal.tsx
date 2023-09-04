import React from "react";
import { useState, useEffect } from "react";
import Modal, { Props } from "react-modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PrintReserveModalStyle } from "./printReserveModalStyle";
import { CarType } from "../Car/Car";
import { findCarById } from "../../assets/api/use-cases/cars/findCarById";
import Logo from "../../assets/imgs/Logo.png";
import { OpenModalButton } from "./printReserveModalStyle";

interface PrintReserveModalProps {
  message: string;
  messageButton: string;
  startDate: string;
  endDate: string;
  totalDays: number;
  totalCost: number;
  status: string;
  carImage: string;
  buttonAction?: Function;
  id: number;
}

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "90vw",
    height: "90vh",
  },
};

export const PrintReserveModal: React.FC<PrintReserveModalProps> = (
  props: PrintReserveModalProps
) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [car, setCar] = useState<CarType | any>();
  const [response, setResponse] = useState();
  const [error, setError] = useState();

  const getCar = async () => {
    const res = await findCarById(props.id, setResponse, setError);
    if (!car) setCar(res);
    return res;
  };

  useEffect(() => {
    getCar();
  }, [car]);

  useEffect(() => {
    setTimeout(() => {
      if (isModalOpen) window.print();
    }, 1000);
  }, [isModalOpen]);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <OpenModalButton onClick={openModal} className="openModal">
        Open Modal
      </OpenModalButton>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <PrintReserveModalStyle>
          <h1>Reserve nº {props.id}</h1>
          <h2>
            <strong>Status:</strong> {props.status}
          </h2>
          <div className="invoice">
            <div className="invoice-details">
              <img src={props.carImage} alt="" className="CarImage" />
              <div className="invoice-detailsContent">
                <div className="invoice-car">
                  <div className="invoice-carDetails">
                    <h2>Vehicle Details</h2>
                    <p>
                      <strong>Model:</strong> {car?.model}
                    </p>
                    <p>
                      <strong>Plate Number:</strong> {car?.plateNumber}
                    </p>
                    <p>
                      <strong>Year: </strong> {car?.year}
                    </p>
                    <p>
                      <strong>Transmission: </strong>
                      {car?.isAutomatic ? "Automatic" : "Manual"}
                    </p>
                    <p>
                      <strong>Type: </strong>
                      {car?.carType}
                    </p>
                    <p>
                      <strong>Color: </strong>
                      {car?.color}
                    </p>
                    <p>
                      <strong>Fuel Efficiency: </strong>
                      {car?.fuelEfficiency} Km/L
                    </p>
                    <p>
                      <strong>Daily Rate: </strong>${car?.dailyRate}.00
                    </p>
                  </div>
                </div>

                <div className="invoice-reservation">
                  <h2>Reservation Details</h2>
                  <p>
                    <strong>Pick-up Date:</strong> {props.startDate}
                  </p>
                  <p>
                    <strong>Return Date:</strong> {props.endDate}
                  </p>
                  <p>
                    <strong>Total Days:</strong> {props.totalDays}
                  </p>
                  <p>
                    <strong>Total Cost:</strong> ${props.totalCost}.00
                  </p>
                </div>
              </div>
            </div>
            <div className="finalImages">
              <img src={Logo} className="Logo"></img>
              <img
                src="https://img.freepik.com/vetores-premium/qr-de-isolado-no-icone-de-vetor-de-qrcode-branco_656810-475.jpg?w=2000"
                alt=""
                className="QRCODE"
              />
            </div>
          </div>
        </PrintReserveModalStyle>
      </Modal>
    </>
  );
};
