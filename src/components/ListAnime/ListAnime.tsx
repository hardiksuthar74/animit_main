import { useAppSelector } from "../../hooks/hook";
import { useSearchAnime } from "../../hooks/useSearchAnime";
import { searchAnimeQuery } from "../../redux/slice/searchAnimeSlice";
import useDebounce from "../../utils/debounce";
import AnimeCard from "../AnimeCard/AnimeCard";
import "./ListAnime.css";

interface animeType {
  mal_id: number;
  title: string;
  images: string;
  type: string;
  episodes: string;
  status: string;
  score: string;
  popularity: string;
  season: string;
  year: string;
  synopsis: string;
}

const ListAnime: React.FC = () => {
  const animeQuery = useAppSelector(searchAnimeQuery);

  const debouncedSearchTerm = useDebounce(animeQuery, 1000);
  const { isLoading, searchedAnime } = useSearchAnime(debouncedSearchTerm);

  if (isLoading) return <div>Loading.....</div>;

  return (
    <div className="anime-card-container">
      {searchedAnime.map((anime: animeType, index: number) => {
        return <AnimeCard key={index} anime={anime} />;
      })}
    </div>
  );
};

export default ListAnime;
