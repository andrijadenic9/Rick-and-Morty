import { useParams, Link } from "react-router-dom";
import { ROUTECONFIG } from "../config/routes";
import { useSingleCharacter } from "../hooks/useSingleCharacter";
import DataFetcher from "../components/DataFetcher";
import Heading from "../components/Heading";

const SingleCharacterPage: React.FC = () => {
    const { characterId } = useParams<{ characterId: string }>();
    const { data: character, error, isLoading } = useSingleCharacter(characterId);

    // proveravamo postojanje URL-a za lokaciju
    const locationId = character?.location?.url ? character.location.url.split("/").pop() : null;

    return (
        <DataFetcher isLoading={isLoading} error={error} errorMessage="Error loading single character">
            <div className="container mx-auto">
                <Heading>{character?.name}</Heading>
                <div className="flex flex-col md:flex-row gap-8 items-start">
                    <div className="flex-shrink-0 md:w-1/3 max-w-xs">
                        {character?.image && <img src={character.image} alt={character.name} className="w-full h-auto rounded-lg mb-4" />}
                        <p className="text-lg">Status: {character?.status}</p>
                        <p className="text-lg">Species: {character?.species}</p>
                        <p className="text-lg">Gender: {character?.gender}</p>
                        <p className="text-lg">
                            Location:{" "}
                            {locationId ? ( // Ako lokacija ne postoji
                                <Link to={ROUTECONFIG.SINGLE_LOCATION.dynamicURL(locationId)} className="text-blue-500 hover:underline">
                                    {character?.location?.name}
                                </Link>
                            ) : (
                                "unknown"
                            )}
                        </p>
                    </div>

                    <div className="md:w-2/3">
                        <h2 className="text-2xl font-semibold">Episodes:</h2>
                        <div className="flex flex-wrap gap-2 mt-4">
                            {character?.episode.map((episodeUrl, index) => {
                                const episodeId = episodeUrl ? Number(episodeUrl.split("/").pop()) : null;
                                return episodeId ? (
                                    <Link
                                        key={index}
                                        to={ROUTECONFIG.SINGLE_EPISODE.dynamicURL(episodeId.toString())}
                                        className="text-blue-500 hover:underline px-2 py-1 bg-gray-200 rounded-md text-sm transition duration-200 ease-in-out transform hover:bg-gray-300"
                                    >
                                        Episode {episodeId}
                                    </Link>
                                ) : null;
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </DataFetcher>
    );
};

export default SingleCharacterPage;
