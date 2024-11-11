export type PrivateRouteProps = {
    children: React.ReactNode;
};

export type HeadingProps = {
    children: React.ReactNode;
    className?: string;
};

export type InputProps = {
    type: string;
    name: string;
    placeholder: string;
    value: string;
    className?: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export type ButtonProps = {
    children: React.ReactNode;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    type?: "button" | "submit" | "reset";
    loading?: boolean;
    disabled?: boolean;
    variant?: "primary" | "secondary";
};

export type AuthFormProps = {
    title: string;
    email: string;
    password: string;
    error: string;
    successMessage?: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onSubmit: (e: React.FormEvent) => void;
    isLoading: boolean;
};

export type ValidationFunctionProps = (email: string, password: string, setError: (msg: string) => void) => boolean;

export type FormDataProps = {
    email: string;
    password: string;
};

export type AuthContextProps = {
    isAuthenticated: boolean;
    token: string | null;
    setToken: (token: string | null) => void;
    formData: FormDataProps;
    setFormData: React.Dispatch<React.SetStateAction<FormDataProps>>;
    error: string;
    setError: React.Dispatch<React.SetStateAction<string>>;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    resetFormData: () => void;
};

export type EpisodeProps = {
    id: number;
    name: string;
    air_date: string;
    episode: string;
    characters: string[];
};

export type CharacterProps = {
    id: number;
    name: string;
    image: string;
    status: string;
    species: string;
};

export type LocationProps = {
    id: number;
    name: string;
    type: string;
    dimension: string;
    url: string;
    residents: string[];
};

export type SingleCharacterProps = {
    id: number;
    name: string;
    status: string;
    species: string;
    gender: string;
    image: string;
    location: LocationProps;
    episode: string[];
};

export type ApiResponseProps = {
    info: {
        next: string | null;
    };
    results: CharacterProps[];
};

export type DataFetcherProps = {
    isLoading: boolean;
    error: any;
    errorMessage?: string;
    children: React.ReactNode;
};
