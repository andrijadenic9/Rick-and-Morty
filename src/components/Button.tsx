import { ButtonProps } from "../types/types";

const Button: React.FC<ButtonProps> = ({ onClick, variant = "primary", children, disabled = false }) => {
    let baseClass = "text-white";

    if (variant === "primary") {
        baseClass += ` ${children === "Login" ? "bg-blue-500" : "bg-green-500"} p-2 w-full`;
    } else {
        baseClass += " bg-red-500 px-3 py-1 rounded";
    }

    return (
        <button onClick={onClick} className={baseClass} disabled={disabled}>
            {children}
        </button>
    );
};

export default Button;
