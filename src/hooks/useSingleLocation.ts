import { useQuery } from "@tanstack/react-query";
import { fetchLocationById } from "../services/locationService";
import { fetchMultipleCharacters } from "../services/characterService";
import type { LocationProps, CharacterProps } from "../types/types";
import { defaultQueryOptions } from "../config/queryOptions";
import { useMemo } from "react";

// custom hook "useSingleLocation" za hvatanje podataka single lokacije i njenih stanovnicima
export const useSingleLocation = (locationId: string | undefined) => {
    const locationQuery = useQuery<LocationProps>({
        queryKey: ["location", locationId],
        queryFn: () => fetchLocationById(locationId as string),
        enabled: Boolean(locationId),
        ...defaultQueryOptions,
    });

    const residentIds = useMemo(() => {
        return locationQuery.data?.residents?.map((url) => url.split("/").pop()).join(",");
    }, [locationQuery.data]);

    const residentsQuery = useQuery<CharacterProps[]>({
        queryKey: ["residents", residentIds],
        queryFn: () => fetchMultipleCharacters(residentIds as string),
        enabled: Boolean(residentIds),
        ...defaultQueryOptions,
    });

    return { locationQuery, residentsQuery };
};
