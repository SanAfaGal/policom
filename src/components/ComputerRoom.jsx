import PropTypes from 'prop-types';
import { getComputers } from '../logic';

import { ComputerBooking } from './ComputerBooking';
import ComputerState from './ComputerState';


export function ComputerRoom({ roomSelected }) {
    const computers = getComputers(roomSelected)

    return (
        <>
            <h2>Sala {roomSelected.id}</h2>
            <ComputerState />
            <ul className="container">
                {computers.map((computer) => (
                    <li className="computer-container" key={computer.id}>
                        <ComputerBooking room={roomSelected} computer={computer}/>
                        <span className='computer-id'>{computer.id}</span>
                    </li>
                ))}
            </ul>
        </>
    );
}

ComputerRoom.propTypes = {
    roomSelected: PropTypes.object.isRequired
};

