import React from "react";
import { ReserveStyle } from "./ReserveStyle";
import { useNavigate } from "react-router-dom";
import ConfirmDeleteModal from "../ConfirmDeleteModal/ConfirmDeleteModal";

export interface ReserveProps {
  reserve: {
    carId: number;
    clientId: number;
    createdAt?: string;
    endDate: string;
    id: number;
    updatedAt?: string;
    startDate: string;
    status: string;
    totalCost: number;
    totalDays: number;
  };
  image: string;
}

function formatDate(dateString: string) {
  const data = new Date(dateString);
  const dia = String(data.getDate()).padStart(2, "0");
  const mes = String(data.getMonth() + 1).padStart(2, "0"); // Note que os meses começam em 0 (janeiro é 0)
  const ano = data.getFullYear();
  const horas = String(data.getHours()).padStart(2, "0");
  const minutos = String(data.getMinutes()).padStart(2, "0");

  return `${dia}/${mes}/${ano} - ${horas}:${minutos}`;
}

export const Reserve: React.FC<ReserveProps> = (props: ReserveProps) => {
  const navigate = useNavigate();

  return (
    <ReserveStyle>
      <div className="ReserveDetails">
        <img src={props.image} alt="" />
        <div className="atributesOfReserve">
          <p>
            <strong>Pick-up date:</strong> {formatDate(props.reserve.startDate)}
          </p>
          <p>
            <strong>Return date:</strong> {formatDate(props.reserve.startDate)}
          </p>

          <p>
            <strong>Total Days: {props.reserve.totalDays}</strong>
          </p>
          <p>
            <strong>Total Cost: ${props.reserve.totalCost}.00</strong>
          </p>

          <p>
            <strong>Status: </strong>
            {props.reserve.status}
          </p>
        </div>
      </div>
      <div className="ReserveButtons">
        <button
          onClick={(e) => {
            navigate(`/car/${props.reserve.carId}`);
          }}
        >
          View Car
        </button>
        <button>Edit Reserve</button>
        <ConfirmDeleteModal reserveId={props.reserve.id} />
      </div>
    </ReserveStyle>
  );
};
