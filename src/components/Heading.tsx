import { HeadingProps } from "../types/types";

const Heading: React.FC<HeadingProps> = ({ children, className = "" }) => {
    return <h1 className={`text-3xl font-bold py-8 ${className}`}>{children}</h1>;
};

export default Heading;
