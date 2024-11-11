import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebaseConfig";
import { useNavigate } from "react-router-dom";
import { ROUTECONFIG } from "../config/routes";
import AuthForm from "../components/AuthForm";
import useAuth from "../hooks/useAuth";
import { validateForm } from "../utils/validateForm";

const SignUpPage: React.FC = () => {
    const { formData, error, setError, handleChange, resetFormData } = useAuth();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [successMessage, setSuccessMessage] = useState<string>("");
    const navigate = useNavigate();

    const handleSignUp = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setSuccessMessage("");

        // if (!validateForm(formData.email, formData.password, setError)) {
        //     return setIsLoading(false);
        // } // ! OTKOMENTARISATI AKO ZELIMO DA PRIKAZEMO NASE GRESKE UMESTO GRESAKA FIREBASE-A

        try {
            await createUserWithEmailAndPassword(auth, formData.email, formData.password);
            resetFormData();
            setSuccessMessage("Registration successful! Please log in.");

            setTimeout(() => {
                setSuccessMessage("");
                navigate(ROUTECONFIG.LOGIN.url);
            }, 2000); // Pauza od 2 sekunde za prikaz poruke
        } catch (error: unknown) {
            if (error instanceof Error) {
                setError(error.message);
            } else {
                setError("Unexpected error occurred");
            }
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div>
            <AuthForm
                title="Sign Up"
                email={formData.email}
                password={formData.password}
                error={error}
                successMessage={successMessage}
                onChange={handleChange}
                onSubmit={handleSignUp}
                isLoading={isLoading}
            />
        </div>
    );
};

export default SignUpPage;
