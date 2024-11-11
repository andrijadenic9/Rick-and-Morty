import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebaseConfig";
import { useNavigate } from "react-router-dom";
import { ROUTECONFIG } from "../config/routes";
import AuthForm from "../components/AuthForm";
import useAuth from "../hooks/useAuth";
import { validateForm } from "../utils/validateForm";

const LoginPage: React.FC = () => {
    const { formData, error, setError, handleChange, setToken, resetFormData } = useAuth();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const navigate = useNavigate();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        // if (!validateForm(formData.email, formData.password, setError)) {
        //     return setIsLoading(false);
        // } // ! OTKOMENTARISATI AKO ZELIMO DA PRIKAZEMO NASE GRESKE UMESTO GRESAKA FIREBASE-A

        try {
            const userCredential = await signInWithEmailAndPassword(auth, formData.email, formData.password);
            const token = await userCredential.user.getIdToken();

            setToken(token);
            resetFormData();
            navigate(ROUTECONFIG.CHARACTERS.url);
        } catch (error: unknown) {
            // type guard obezbedjujemo da je error instanca Error-a iz Firebase-a
            if (error instanceof Error) {
                setError(error.message);
            } else {
                setError("An unexpected error occurred.");
            }
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <AuthForm
            title="Login"
            email={formData.email}
            password={formData.password}
            error={error}
            onChange={handleChange}
            onSubmit={handleLogin}
            isLoading={isLoading}
        />
    );
};

export default LoginPage;
