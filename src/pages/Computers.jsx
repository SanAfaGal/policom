import useAvailableRooms from "../hooks/useAvailableRooms";
import { ComputerRoom } from "../components/ComputerRoom";
import RoomList from "../components/RoomList";

export default function Computers() {
    const { selectedRoom, availableRooms, handleRoomClick } = useAvailableRooms();

    return (
        <div>
            <RoomList rooms={availableRooms} onItemClick={(room) => handleRoomClick(room)} />
            {selectedRoom && <ComputerRoom roomSelected={selectedRoom} />}
        </div>
    );
}