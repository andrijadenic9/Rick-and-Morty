import { useParams, Link } from "react-router-dom";
import { ROUTECONFIG } from "../config/routes";
import { useSingleEpisode } from "../hooks/useSingleEpisode";
import DataFetcher from "../components/DataFetcher";
import Heading from "../components/Heading";

const SingleEpisodePage: React.FC = () => {
    const { episodeId } = useParams<{ episodeId: string }>();
    const { episodeQuery, charactersQuery } = useSingleEpisode(episodeId);

    // uzimamo podatke iz "episodeQuery" i "charactersQuery"
    const { data: episode, error: episodeError, isLoading: episodeLoading } = episodeQuery;
    const { data: characters, error: charactersError, isLoading: charactersLoading } = charactersQuery;

    const isLoading = episodeLoading || charactersLoading;
    const error = episodeError || charactersError;

    return (
        <DataFetcher isLoading={isLoading} error={error} errorMessage="Error loading episode">
            <div className="container mx-auto">
                <Heading>{episode?.name}</Heading>
                <p>
                    <strong>Air Date:</strong> {episode?.air_date}
                </p>
                <p>
                    <strong>Episode:</strong> {episode?.episode}
                </p>

                <h2 className="text-2xl font-semibold mt-6">Characters:</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                    {characters?.map((character) => (
                        <Link
                            key={character.id}
                            to={ROUTECONFIG.SINGLE_CHARACTER.dynamicURL(character.id.toString())}
                            className="card-hover"
                        >
                            <img src={character.image} alt={character.name} className="w-full h-auto mb-2 rounded-md" />
                            <h3 className="text-lg font-semibold">{character.name}</h3>
                            <p>Status: {character.status}</p>
                            <p>Species: {character.species}</p>
                        </Link>
                    ))}
                </div>
            </div>
        </DataFetcher>
    );
};

export default SingleEpisodePage;
