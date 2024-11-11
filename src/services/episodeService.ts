import axiosClient from "../config/axiosClient";
import type { EpisodeProps } from "../types/types";

// funkcija za hvatanje single epizode po ID-u
export const fetchEpisodeById = async (episodeId: number): Promise<EpisodeProps> => {
    const response = await axiosClient.get<EpisodeProps>(`/episode/${episodeId}`);
    return response.data;
};
