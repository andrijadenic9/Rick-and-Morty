// resetovanje kesiranih podataka u React Query-ju
export const defaultQueryOptions = {
    staleTime: 5 * 60 * 1000, // 5 minuta
    refetchOnWindowFocus: true,
    refetchInterval: 60000, // 1 minut
};
