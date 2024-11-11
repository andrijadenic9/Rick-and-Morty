import { useQuery } from "@tanstack/react-query";
import { fetchEpisodeById } from "../services/episodeService";
import { fetchMultipleCharacters } from "../services/characterService";
import type { EpisodeProps, CharacterProps } from "../types/types";
import { defaultQueryOptions } from "../config/queryOptions";
import { useMemo } from "react";

// custom hook "useSingleEpisode" za hvatanje podataka single epizode i karakterima koji su deo te epizode
export const useSingleEpisode = (episodeId: string | undefined) => {
    const episodeQuery = useQuery<EpisodeProps>({
        queryKey: ["episode", episodeId],
        queryFn: () => fetchEpisodeById(Number(episodeId)),
        enabled: !!episodeId,
        ...defaultQueryOptions,
    });

    const characterIds = useMemo(() => {
        return episodeQuery.data?.characters.map((url) => url.split("/").pop()).join(",") || "";
    }, [episodeQuery.data]);

    const charactersQuery = useQuery<CharacterProps[]>({
        queryKey: ["characters", characterIds],
        queryFn: () => fetchMultipleCharacters(characterIds),
        enabled: !!characterIds,
        ...defaultQueryOptions,
    });

    return { episodeQuery, charactersQuery };
};
