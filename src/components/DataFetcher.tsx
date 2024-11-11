import { DataFetcherProps } from "../types/types";

// komponenta za prikazivanje loadera i greske prilikom hvatanja podataka
const DataFetcher: React.FC<DataFetcherProps> = ({ isLoading, error, errorMessage = "Error loading data", children }) => {
    if (isLoading) {
        return (
            <div className="flex items-center justify-center h-screen">
                <div className="loader"></div>
            </div>
        );
    }

    if (error) {
        return <div>{errorMessage}</div>;
    }

    return <>{children}</>;
};

export default DataFetcher;
