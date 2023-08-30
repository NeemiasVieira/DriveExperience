import React from "react";
import { LoadingStyle } from "./LoadingStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

export const Loading = () => {
    return(
        <LoadingStyle>
            <FontAwesomeIcon icon={faSpinner} spin />
        </LoadingStyle>
    )
}