import { InputProps } from "../types/types";

const Input: React.FC<InputProps> = ({ type = "text", name, placeholder, value, onChange, className }) => {
    return (
        <input
            type={type}
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className={`w-full border p-2 rounded-md ${className}`}
        />
    );
};

export default Input;
