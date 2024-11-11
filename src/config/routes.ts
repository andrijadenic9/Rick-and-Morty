export const ROUTECONFIG = {
    HOME: { url: "/" },
    LOGIN: { url: "/login" },
    SIGNUP: { url: "/signup" },
    CHARACTERS: { url: "/characters" },
    SINGLE_CHARACTER: {
        url: "/characters/:characterId",
        dynamicURL: (characterId: string) => `/characters/${characterId}`,
    },
    SINGLE_LOCATION: {
        url: "/location/:locationId",
        dynamicURL: (locationId: string) => `/location/${locationId}`,
    },
    SINGLE_EPISODE: {
        url: "/episode/:episodeId",
        dynamicURL: (episodeId: string) => `/episode/${episodeId}`,
    },
};
