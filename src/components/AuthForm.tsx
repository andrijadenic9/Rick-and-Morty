import { Link, useLocation } from "react-router-dom";
import { ROUTECONFIG } from "../config/routes";
import type { AuthFormProps } from "../types/types";
import Button from "./Button";
import Input from "./Input";

const AuthForm: React.FC<AuthFormProps> = ({ title, email, password, error, successMessage, onChange, onSubmit, isLoading }) => {
    const location = useLocation();

    // u odnosu na lokaciju proveravamo na kojoj smo stranici
    const isLoginPage = location.pathname === ROUTECONFIG.LOGIN.url;

    const linkWord = isLoginPage ? "Sign up" : "Login";
    const linkText = isLoginPage ? "Don't have an account?" : "Already have an account?";
    const linkUrl = isLoginPage ? ROUTECONFIG.SIGNUP.url : ROUTECONFIG.LOGIN.url;

    return (
        <div className="flex items-center justify-center h-screen">
            <form onSubmit={onSubmit} className="bg-white p-6 rounded shadow-md w-80">
                <h2 className="text-2xl font-bold mb-4">{title}</h2>
                <Input type="email" name="email" placeholder="Email" value={email} onChange={onChange} className="mb-2" />
                <Input type="password" name="password" placeholder="Password" value={password} onChange={onChange} className="mb-2" />
                {error && <p className="mb-4 text-red-500">{error}</p>}
                {successMessage && <p className="mb-4 text-green-500 text-center">{successMessage}</p>}
                <Button type="submit" loading={isLoading} disabled={isLoading} variant="primary">
                    {title}
                </Button>
                <p className="mt-4">
                    {linkText}{" "}
                    <Link to={linkUrl} className="text-blue-500">
                        {linkWord}
                    </Link>
                </p>
            </form>
        </div>
    );
};

export default AuthForm;
