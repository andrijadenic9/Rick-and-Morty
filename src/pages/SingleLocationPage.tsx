import React from "react";
import { useParams, Link } from "react-router-dom";
import { ROUTECONFIG } from "../config/routes";
import { useSingleLocation } from "../hooks/useSingleLocation";
import DataFetcher from "../components/DataFetcher";
import Heading from "../components/Heading";

const SingleLocationPage: React.FC = () => {
    const { locationId } = useParams<{ locationId: string }>();
    const { locationQuery, residentsQuery } = useSingleLocation(locationId);

    // uzimamo podatke iz "locationQuery" i "residentsQuery"
    const { data: location, error: locationError, isLoading: locationLoading } = locationQuery;
    const { data: residents, error: residentsError, isLoading: residentsLoading } = residentsQuery;

    const isLoading = locationLoading || residentsLoading;
    const error = locationError || residentsError;

    return (
        <DataFetcher isLoading={isLoading} error={error} errorMessage="Error loading location">
            <div className="container mx-auto">
                <Heading>{location?.name}</Heading>
                <p className="text-lg">Type: {location?.type}</p>
                <p className="text-lg">Dimension: {location?.dimension}</p>

                <h2 className="text-2xl font-semibold mt-6">Residents:</h2>

                {residents && residents.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                        {residents.map((character) => (
                            <Link
                                key={character.id}
                                to={ROUTECONFIG.SINGLE_CHARACTER.dynamicURL(character.id.toString())}
                                className="card-hover"
                            >
                                <img src={character.image} alt={character.name} className="w-full h-auto mb-2 rounded" />
                                <h3 className="text-lg font-semibold">{character.name}</h3>
                                <p>Status: {character.status}</p>
                            </Link>
                        ))}
                    </div>
                ) : (
                    <div>No residents found.</div>
                )}
            </div>
        </DataFetcher>
    );
};

export default SingleLocationPage;
