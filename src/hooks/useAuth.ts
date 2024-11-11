import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import type { AuthContextProps } from "../types/types";

// custom hook "useAuth" koji omogucava lak pristup "AuthContext" vrednostima
const useAuth = (): AuthContextProps => {
    // pomocu "useContext" hook-a pristupamo vrednostima iz "AuthContext"
    const context = useContext(AuthContext);

    if (context === undefined) {
        throw new Error("useAuth must be used within an AuthProvider");
    }

    // vracamo "context" koji sadrži sve vrednosti i funkcije "AuthProvider"-a
    return context;
};

export default useAuth;
