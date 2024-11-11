import { createContext, useState, useEffect } from "react";
import type { AuthContextProps, FormDataProps } from "../types/types";
import { localStorageConfig } from "../config/localStorageConfig";

// kreiramo konteksta za autentifikaciju
export const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [token, setToken] = useState<string | null>(localStorage.getItem(localStorageConfig.AUTH_TOKEN));
    const [formData, setFormData] = useState<FormDataProps>({ email: "", password: "" });
    const [error, setError] = useState<string>("");

    useEffect(() => {
        if (token) {
            localStorage.setItem(localStorageConfig.AUTH_TOKEN, token);
        } else {
            localStorage.removeItem(localStorageConfig.AUTH_TOKEN);
        }
    }, [token]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
        setError(""); // resetujemo gresku prilikom promene inputa
    };

    // funkcija za resetovanje formData vrednosti (prazni email i password polja)
    const resetFormData = () => {
        setFormData({ email: "", password: "" });
    };

    // funkcija Boolean konvertuje token u true ili false
    const isAuthenticated = Boolean(token);

    return (
        <AuthContext.Provider
            value={{
                isAuthenticated,
                token,
                setToken,
                formData,
                setFormData,
                error,
                setError,
                handleChange,
                resetFormData,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
