import { useUserDetails } from "../hooks/useUserDetails";
import LogoutButton from "../components/LogoutButton";

export default function Profile() {
    const { name, email, isTeacher, picture } = useUserDetails();

    return (
        <div className="position-center">
            <div className="card">
                <div className="profileImage">
                    <img src={picture} />
                </div>
                <div className="textContainer">
                    <span className="name">{name}</span>
                    <span className="email">{email}</span>
                    <p className="profile">{isTeacher ? 'Docente' : 'Estudiante'}</p>
                    <LogoutButton />
                </div>
            </div>
        </div>
    );
}