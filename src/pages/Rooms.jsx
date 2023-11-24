import { useUserDetails } from "../hooks/useUserDetails";
import UnauthorizedMessage from "../components/UnauthorizedMessage";
import UnderConstruction from "../components/UnderConstruction";

export default function Rooms() {
    const { isTeacher } = useUserDetails();

    return isTeacher ? (
        <UnderConstruction />
    ) : (
        <UnauthorizedMessage />
    );
}
