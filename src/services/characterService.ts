import axiosClient from "../config/axiosClient";
import type { ApiResponseProps, SingleCharacterProps, CharacterProps } from "../types/types";
import { QueryFunctionContext } from "@tanstack/react-query";

// funkcija za hvatanje svih karaktera
export const fetchCharacters = async ({ pageParam = 1 }: QueryFunctionContext): Promise<ApiResponseProps> => {
    const response = await axiosClient.get<ApiResponseProps>(`/character?page=${pageParam}`);
    return response.data;
};

// funkcija za hvatanje single karaktera po ID-u
export const fetchCharacterById = async (characterId: string): Promise<SingleCharacterProps> => {
    const response = await axiosClient.get<SingleCharacterProps>(`/character/${characterId}`);
    return response.data;
};

// funkcija za hvatanje vise od jednog karaktera po ID-jevima
export const fetchMultipleCharacters = async (characterIds: string): Promise<CharacterProps[]> => {
    const response = await axiosClient.get<CharacterProps[]>(`/character/${characterIds}`);
    return response.data;
};
