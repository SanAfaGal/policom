import { useUserDetails } from "../hooks/useUserDetails";
import { getUserHistoryBookingFromLocalStorage } from "../logic/storage";

export default function History() {
    const { sub } = useUserDetails();
    const bookings = getUserHistoryBookingFromLocalStorage(sub);

    return (
        <>
            <h2>Historial de reservas</h2>
            {
                bookings ? (<table className="container-table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Sala</th>
                            <th>Computador</th>
                            <th>Hora reserva</th>
                            {/* <th>Hora fin</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {bookings.map((booking, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{booking.roomId}</td>
                                <td>{booking.computerId}</td>
                                <td>{booking.interval.start}</td>
                                {/* <td>{booking.interval.end}</td> */}
                            </tr>
                        ))}
                    </tbody>
                </table>) : (<h6>No hay reservas</h6>)
            }
        </>
    );
}
