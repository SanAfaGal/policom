// logic.js
import { determineEmailType } from "../logic";
import { useAuth0 } from "@auth0/auth0-react";

export function useUserDetails() {
    const { user } = useAuth0();
    const sub = user.sub
    const name = user.name
    const email = user.email
    const picture = user.picture
    const rol = determineEmailType(user.email);
    const isTeacher = rol === 'Teacher';

    return { sub, name, email, rol, picture, isTeacher };
}
