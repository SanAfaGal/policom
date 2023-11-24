import LoginButton from "../components/LoginButton";
import logo from "../assets/img/logo.png"

export default function Login() {
    return (
        <div className="position-center">
            <div className="login-content">
                <img src={logo} alt="Logo" className="logo" />
                <h1>Bienvenido a Policom</h1>
                <p>Inicia sesión para continuar</p>
                <LoginButton />
            </div>
        </div>
    );
}