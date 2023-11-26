import { useState, useEffect } from "react";
import { getFreeRooms } from "../logic";

// Custom Hook
export default function useAvailableRooms() {
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [availableRooms, setAvailableRooms] = useState([]);

  useEffect(() => {
    const freeRooms = getFreeRooms();
    setAvailableRooms(freeRooms);
  }, []);

  const handleRoomClick = (room) => {
    setSelectedRoom(room);
  };

  return { selectedRoom, availableRooms, handleRoomClick };
}