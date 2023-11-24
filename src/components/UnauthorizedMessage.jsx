import unauthorizedImage from '../assets/img/unauthorized.jpg';

export default function UnauthorizedMessage() {
    return (
        <div className="unauthorized">
            <h2>No tienes permisos para reservar salas</h2>
            <img src={unauthorizedImage} alt="Unauthorized" />
        </div>
    );
}