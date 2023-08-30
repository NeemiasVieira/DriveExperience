import React from "react";
import { ReserveStyle } from "./ReserveStyle";

export const Reserve = () => {
  return (
    <ReserveStyle>
      <h2>Imagem</h2>
      <div className="atributesOfReserve">
        <p>Pick-up date</p>
        <p>Return date</p>

        <p>Total Days:</p>
        <p>Total Cost:</p>

        <p>Status: </p>
      </div>
    </ReserveStyle>
  );
};
