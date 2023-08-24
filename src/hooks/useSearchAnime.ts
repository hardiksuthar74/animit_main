import { useQuery } from "@tanstack/react-query";
import { getAllAnimes } from "../services/api/animeApi";

export function useSearchAnime(debouncedSearchTerm: string) {
  const {
    isLoading,
    data: searchedAnime,
    error,
  } = useQuery({
    queryKey: ["search", debouncedSearchTerm],
    queryFn: () => getAllAnimes(debouncedSearchTerm),
  });

  return { isLoading, searchedAnime, error };
}
