import PropTypes from "prop-types";
import useAvailableRooms from '../hooks/useAvailableRooms';
import { useState } from "react";
import { ComputerImage } from "./ComputerImage";
import { ReservationConfirmation } from "./ReservationConfirmation";
import { updateBookingInfoInLocalStorage } from "../logic/storage";
import { useUserDetails } from "../hooks/useUserDetails";

export function ComputerBooking({ room, computer }) {
  const { interval } = useAvailableRooms()
  const { sub } = useUserDetails()
  const [state, setState] = useState({
    reserved: computer.reserved,
    showModal: false
  });

  const handleShowModal = () => {
    if (!state.reserved) {
      setState({ ...state, showModal: true });
    }
  };

  const handleBook = () => {
    updateBookingInfoInLocalStorage(sub, room.id, computer.id, interval);
    setState({ reserved: !state.reserved, showModal: false });
  };

  return (
    <>
      <ComputerImage reserved={state.reserved} onClick={handleShowModal} />
      {state.showModal && (
        <ReservationConfirmation
          type='Computador'
          id={computer.id}
          onConfirm={handleBook}
          onCancel={() => setState({ ...state, showModal: false })}
        />
      )}
    </>
  );
}

ComputerBooking.propTypes = {
  computer: PropTypes.object.isRequired,
  room: PropTypes.object.isRequired
};
