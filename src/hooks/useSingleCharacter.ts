import { useQuery } from "@tanstack/react-query";
import { fetchCharacterById } from "../services/characterService";
import type { SingleCharacterProps } from "../types/types";
import { defaultQueryOptions } from "../config/queryOptions";

// custom hook "useSingleCharacter" za hvatanje single karaktera
export const useSingleCharacter = (characterId: string | undefined) => {
    return useQuery<SingleCharacterProps>({
        queryKey: ["single character", characterId],
        queryFn: () => fetchCharacterById(characterId as string),
        enabled: Boolean(characterId),
        ...defaultQueryOptions,
    });
};
