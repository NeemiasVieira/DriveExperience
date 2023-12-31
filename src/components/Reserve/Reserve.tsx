import React, { useState } from "react";
import { ReserveStyle } from "./ReserveStyle";
import { useNavigate } from "react-router-dom";
import ConfirmDeleteModal from "../ConfirmDeleteModal/ConfirmDeleteModal";
import { PrintReserveModal } from "../printReserveModal/printReserveModal";
import { EditReserveModal } from "../EditReserveModal/EditReserveModal";

export interface carPrint {
  carType: string;
  color: string;
  dailyRate: number;
  features: string[];
  fuelEfficiency: number;
  isAutomatic: boolean;
  model: string;
  plateNumber: string;
  year: 2023;
}

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
  onRemove: Function;
  car?: carPrint | any;
}

export function formatDate(dateString: string) {
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Note que os meses começam em 0 (janeiro é 0)
  const year = date.getFullYear();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");

  return `${day}/${month}/${year} - ${hours}:${minutes}`;
}

export const Reserve: React.FC<ReserveProps> = (props: ReserveProps) => {
  const navigate = useNavigate();

  return (
    <ReserveStyle>
      <PrintReserveModal
        message="Teste"
        messageButton="Teste"
        carImage={props.image}
        endDate={formatDate(props.reserve.endDate)}
        startDate={formatDate(props.reserve.startDate)}
        status={props.reserve.status}
        totalCost={props.reserve.totalCost}
        totalDays={props.reserve.totalDays}
        id={props.reserve.carId}
      />

      <div className="ReserveDetails">
        <img src={props.image} alt="" />
        <div className="atributesOfReserve">
          <p>
            <strong>Pick-up date:</strong> {formatDate(props.reserve.startDate)}
          </p>
          <p>
            <strong>Return date:</strong> {formatDate(props.reserve.endDate)}
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
        <EditReserveModal
          reserveId={props.reserve.id}
          getReserves={props.onRemove}
        />
        <ConfirmDeleteModal
          reserveId={props.reserve.id}
          onRemove={props.onRemove}
        />
      </div>
    </ReserveStyle>
  );
};
