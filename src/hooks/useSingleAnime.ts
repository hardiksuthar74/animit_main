import { useQuery } from "@tanstack/react-query";
import { getSingleAnimes } from "../services/api/animeApi";

export function useSingleAnime(animeid: string | undefined) {
  const {
    isLoading,
    data: searchedAnime,
    error,
  } = useQuery({
    queryKey: ["anime"],
    queryFn: () => getSingleAnimes(animeid),
  });

  return { isLoading, searchedAnime, error };
}
