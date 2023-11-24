/* eslint-disable react/prop-types */

export default function RoomList({ rooms, onItemClick }) {
    return (
        <>
            <h2>Salas disponibles</h2>
            <ul className="container">
                {rooms.map((room) => (
                    <li key={room.id}>
                        <button onClick={() => onItemClick(room)}>
                            {room.id}
                        </button>
                    </li>
                ))}
            </ul>
        </>
    );
}
