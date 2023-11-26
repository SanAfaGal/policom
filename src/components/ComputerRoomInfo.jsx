import PropTypes from 'prop-types';

export function ComputerRoomInfo({ roomSelected }) {

    return (
        <>
            <h6>Software instalado</h6>

            <ul className="software-list">
                {roomSelected.software.map((program) => (
                    <li key={program} className="software-list-item">
                        <span className="software-name">{program}</span>
                    </li>
                ))}
            </ul>
        </>
    );
}

ComputerRoomInfo.propTypes = {
    roomSelected: PropTypes.object.isRequired
};

