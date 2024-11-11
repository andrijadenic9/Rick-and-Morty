import axiosClient from "../config/axiosClient";
import type { LocationProps } from "../types/types";

// funkcija za hvatanje single lokacije po ID-u
export const fetchLocationById = async (locationId: string): Promise<LocationProps> => {
    const response = await axiosClient.get<LocationProps>(`/location/${locationId}`);
    return response.data;
};
