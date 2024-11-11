import { Navigate } from "react-router-dom";
import { ROUTECONFIG } from "../config/routes";
import Header from "../components/Header";
import type { PrivateRouteProps } from "../types/types";
import { localStorageConfig } from "../config/localStorageConfig";

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
    const token = localStorage.getItem(localStorageConfig.AUTH_TOKEN);

    // ako korisnik nije autentifikovan vracamo ga na login stranicu
    if (!token) return <Navigate to={ROUTECONFIG.LOGIN.url} />;

    return (
        <>
            <Header />
            {children}
        </>
    );
};

export default PrivateRoute;
