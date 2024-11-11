import { useInfiniteQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { ROUTECONFIG } from "../config/routes";
import { fetchCharacters } from "../services/characterService";
import type { CharacterProps, ApiResponseProps } from "../types/types";
import { defaultQueryOptions } from "../config/queryOptions";
import DataFetcher from "../components/DataFetcher";
import { useCallback, useState } from "react";
import Input from "../components/Input";
import Heading from "../components/Heading";

const CharactersPage: React.FC = () => {
    const { data, error, isLoading, hasNextPage, fetchNextPage, isFetchingNextPage } = useInfiniteQuery<ApiResponseProps>({
        queryKey: ["characters"],
        queryFn: fetchCharacters,
        initialPageParam: 1,
        getNextPageParam: (lastPage) => {
            const nextPage = lastPage.info.next ? Number(new URL(lastPage.info.next).searchParams.get("page")) : undefined;
            return nextPage;
        },
        ...defaultQueryOptions,
    });

    const [searchQuery, setSearchQuery] = useState("");

    // dodajemo useCallback za efikasniji pristup funkciji
    const handleScroll = useCallback(
        (e: React.UIEvent<HTMLDivElement>) => {
            const { scrollTop, scrollHeight, clientHeight } = e.currentTarget;
            if (scrollHeight - scrollTop - clientHeight < 50 && hasNextPage && !isFetchingNextPage) {
                fetchNextPage();
            }
        },
        [hasNextPage, isFetchingNextPage, fetchNextPage]
    );

    // funkciju za promenu vrednosti pretrage
    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
    };

    // filtriramo karaktere na osnovu "searchQuery"
    const filteredCharacters: CharacterProps[] =
        data?.pages
            .flatMap((page) => page.results)
            .filter((character) => character.name.toLowerCase().includes(searchQuery.toLowerCase())) || [];

    return (
        <DataFetcher isLoading={isLoading} error={error} errorMessage="Error loading characters">
            <div onScroll={handleScroll} className="infinite-scroll-container">
                <div className="container mx-auto">
                    <div className="flex justify-between items-center">
                        <Heading className="capitalize">Rick and Morty all characters</Heading>
                        <div className="w-1/3">
                            <Input
                                type="search"
                                name="search"
                                placeholder="Search characters"
                                value={searchQuery}
                                onChange={handleSearchChange}
                                className="border-gray-300 focus:border-blue-500"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredCharacters.map((character) => (
                            <Link key={character.id} to={ROUTECONFIG.SINGLE_CHARACTER.dynamicURL(character.id.toString())}>
                                <div className="card-hover">
                                    <img src={character.image} alt={character.name} className="w-full h-auto mb-4 rounded-lg" />
                                    <h2 className="text-xl font-semibold">{character.name}</h2>
                                    <p className="text-gray-600">Status: {character.status}</p>
                                    <p className="text-gray-600">Species: {character.species}</p>
                                </div>
                            </Link>
                        ))}
                    </div>

                    {isFetchingNextPage && (
                        <div className="flex items-center justify-center mt-4">
                            <div className="loader"></div>
                        </div>
                    )}
                </div>
            </div>
        </DataFetcher>
    );
};

export default CharactersPage;
