import type { ValidationFunctionProps } from "../types/types";

export const validateForm: ValidationFunctionProps = (email, password, setError) => {
    if (!email || !password) {
        setError("All fields are required.");
        return false;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
        setError("Invalid email format.");
        return false;
    }
    if (password.length < 6) {
        setError("Password must be at least 6 characters long.");
        return false;
    }
    return true;
};
