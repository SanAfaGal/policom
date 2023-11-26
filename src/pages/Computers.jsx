import useAvailableRooms from "../hooks/useAvailableRooms";
import { ComputerRoom } from "../components/ComputerRoom";
import { ComputerRoomInfo } from "../components/ComputerRoomInfo";
import RoomList from "../components/RoomList";

export default function Computers() {
    const { selectedRoom, availableRooms, handleRoomClick } = useAvailableRooms();
    
    return (
        <div>
            <RoomList rooms={availableRooms} onItemClick={(room) => handleRoomClick(room)} />
            {selectedRoom && <ComputerRoomInfo roomSelected={selectedRoom} />}
            {selectedRoom && <ComputerRoom roomSelected={selectedRoom} />}
        </div>
    );
}