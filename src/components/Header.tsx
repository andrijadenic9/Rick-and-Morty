import { Link, useNavigate } from "react-router-dom";
import { ROUTECONFIG } from "../config/routes";
import useAuth from "../hooks/useAuth";
import Button from "./Button";

const Header: React.FC = () => {
    const { setToken } = useAuth();
    const navigate = useNavigate();

    const handleLogout: React.MouseEventHandler<HTMLButtonElement> = () => {
        setToken(null); // brisemo token na logout
        navigate(ROUTECONFIG.LOGIN.url);
    };

    return (
        <header className="bg-gray-800 text-white w-full">
            <div className="container mx-auto py-6 flex justify-between items-center">
                <Link to={ROUTECONFIG.CHARACTERS.url} className="text-white text-lg font-semibold hover:text-gray-300">
                    Characters
                </Link>
                <Button onClick={handleLogout} variant="secondary">
                    Logout
                </Button>
            </div>
        </header>
    );
};

export default Header;
