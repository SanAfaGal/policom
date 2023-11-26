import { COMPUTER_STATE } from "../logic/constants";

export default function ComputerState() {
    return (
        <div className="container info">
            <div>
                <img src={COMPUTER_STATE[false]} />
                <span>Libre</span>
            </div>
            <div>
                <img src={COMPUTER_STATE[true]} />
                <span>Reservado</span>
            </div>
        </div>
    )
}