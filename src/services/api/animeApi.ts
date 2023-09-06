import { useQuery } from "@tanstack/react-query";

const getAllAnimes = async (query: string): Promise<void> => {
  const response = await fetch("http://127.0.0.1:5000/animes/search", {
    method: "POST",
    body: JSON.stringify({ anime: query }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });

  const data = await response.json();

  const animeData = data?.data;

  return animeData;
};

const getSingleAnimes = async (query: string | undefined): Promise<void> => {
  const response = await fetch("http://127.0.0.1:5000/animes/singleanime", {
    method: "POST",
    body: JSON.stringify({ animeid: query }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });

  const data = await response.json();
  const animeData = data?.data;

  return animeData;
};

const fetchAnimeData = async (): Promise<void> => {
  const url = "http://127.0.0.1:5000";
  try {
    const response = await fetch(`${url}/animes/favourites`);

    const data = await response.json();
    const animeData = data?.data;

    return animeData;
  } catch (error) {
    console.log(error);
  }
};

export function useFavAnime() {
  const {
    isLoading,
    data: anime,
    error,
  } = useQuery({
    queryKey: ["favAnime"],
    queryFn: () => fetchAnimeData(),
  });

  return { isLoading, anime, error };
}

export { getAllAnimes, getSingleAnimes, fetchAnimeData };
