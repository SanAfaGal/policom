import { useState, useEffect } from "react";
import { getFreeRooms } from "../logic";

// Custom Hook
export default function useAvailableRooms() {
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [interval, setInterval] = useState({
    start: null,
    end: null,
  });
  const [availableRooms, setAvailableRooms] = useState([]);

  useEffect(() => {
    const { availableRooms, startTime, endTime } = getFreeRooms();
    setInterval({
      start: startTime,
      end: endTime
  })
    setAvailableRooms(availableRooms);
  }, []);

  const handleRoomClick = (room) => {
    setSelectedRoom(room);
  };

  return { selectedRoom, availableRooms, interval, handleRoomClick };
}