import { useQuery } from "@tanstack/react-query";
import { getAllAnimes } from "./animeJikan";

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

export function useAnime() {
  const {
    isLoading,
    data: searchedAnime,
    error,
  } = useQuery({
    queryKey: ["search"],
    queryFn: () => getAllAnimes(""),
  });

  return { isLoading, searchedAnime, error };
}
