import { EditReserveModalStyle } from "./EditReserveModalStyle";
import { useState, useEffect } from "react";
import Modal from "react-modal";
import { ButtonOpenEditReserve } from "./EditReserveModalStyle";
import { updateReserve } from "../../assets/api/use-cases/reserves/updateReserve";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "15px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "500px",
    height: "400px",
  },
};

interface EditReserveModalProps {
  reserveId: number;
}

export const EditReserveModal: React.FC<EditReserveModalProps> = (
  props: EditReserveModalProps
) => {
  const [startDate, setStartDate] = useState<Date | string>(new Date());
  const [endDate, setEndDate] = useState<Date | string>(new Date());
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [response, setResponse] = useState<any>();
  const [error, setError] = useState<any>();

  useEffect(() => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, "0");
    const day = String(currentDate.getDate()).padStart(2, "0");
    const hours = String(currentDate.getHours()).padStart(2, "0");
    const minutes = String(currentDate.getMinutes()).padStart(2, "0");

    const formattedDate = `${year}-${month}-${day}T${hours}:${minutes}`;
    setStartDate(formattedDate);

    const endDate = new Date(currentDate);

    endDate.setDate(endDate.getDate() + 1);

    const endYear = endDate.getFullYear();
    const endMonth = String(endDate.getMonth() + 1).padStart(2, "0");
    const endDay = String(endDate.getDate()).padStart(2, "0");
    const endHours = String(endDate.getHours()).padStart(2, "0");
    const endMinutes = String(endDate.getMinutes()).padStart(2, "0");

    const formattedEndDate = `${endYear}-${endMonth}-${endDay}T${endHours}:${endMinutes}`;
    setEndDate(formattedEndDate);
  }, []);

  useEffect(() => {
    if (response?.id) {
      closeModal();
      setError(undefined);
    }
  }, [response]);

  useEffect(() => {}, [error]);

  const handleStartDateChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const selectedDate = new Date(event.target.value);
    const formattedDateTime = selectedDate.toISOString().slice(0, 16);
    setStartDate(formattedDateTime);
  };

  const handleEndDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedDate = new Date(event.target.value);
    const formattedDateTime = selectedDate.toISOString().slice(0, 16);
    setEndDate(formattedDateTime);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const update = async () => {
    await updateReserve(
      props.reserveId,
      String(startDate),
      String(endDate),
      setResponse,
      setError
    );
  };

  return (
    <>
      <ButtonOpenEditReserve onClick={openModal}>
        Edit Reserve
      </ButtonOpenEditReserve>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => {
          closeModal();
          setError(undefined);
        }}
        style={customStyles}
      >
        <EditReserveModalStyle>
          <div className="DivInputDate">
            <label htmlFor="startDate">Start Date: </label>
            <input
              type="datetime-local"
              id="startDate"
              value={startDate as string}
              onChange={handleStartDateChange}
            />
            <br />
            <label htmlFor="endDate">End Date: </label>

            <input
              type="datetime-local"
              id="endDate"
              value={endDate as string}
              onChange={handleEndDateChange}
            />
            <p>
              <strong>Change of dates depends on car availability</strong>
            </p>
            {error && <p className="Error">{error}</p>}
            <button onClick={update}>Update</button>
          </div>
        </EditReserveModalStyle>
      </Modal>
    </>
  );
};
