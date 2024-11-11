import { Route, Routes, Navigate } from "react-router-dom";
import { ROUTECONFIG } from "./config/routes";
import useAuth from "./hooks/useAuth";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import PrivateRoute from "./auth/PrivateRoutes";
import CharactersPage from "./pages/CharactersPage";
import SingleCharacterPage from "./pages/SingleCharacterPage";
import SingleLocationPage from "./pages/SingleLocationPage";
import SingleEpisodePage from "./pages/SingleEpisodePage";

const App: React.FC = () => {
    const { isAuthenticated } = useAuth();

    return (
        <Routes>
            <Route
                path={ROUTECONFIG.HOME.url}
                element={<Navigate to={isAuthenticated ? ROUTECONFIG.CHARACTERS.url : ROUTECONFIG.LOGIN.url} />}
            />
            <Route path={ROUTECONFIG.LOGIN.url} element={isAuthenticated ? <Navigate to={ROUTECONFIG.CHARACTERS.url} /> : <LoginPage />} />
            <Route
                path={ROUTECONFIG.SIGNUP.url}
                element={isAuthenticated ? <Navigate to={ROUTECONFIG.CHARACTERS.url} /> : <SignUpPage />}
            />
            <Route
                path={ROUTECONFIG.CHARACTERS.url}
                element={
                    <PrivateRoute>
                        <CharactersPage />
                    </PrivateRoute>
                }
            />
            <Route
                path={ROUTECONFIG.SINGLE_CHARACTER.url}
                element={
                    <PrivateRoute>
                        <SingleCharacterPage />
                    </PrivateRoute>
                }
            />
            <Route
                path={ROUTECONFIG.SINGLE_LOCATION.url}
                element={
                    <PrivateRoute>
                        <SingleLocationPage />
                    </PrivateRoute>
                }
            />
            <Route
                path={ROUTECONFIG.SINGLE_EPISODE.url}
                element={
                    <PrivateRoute>
                        <SingleEpisodePage />
                    </PrivateRoute>
                }
            />
        </Routes>
    );
};

export default App;
