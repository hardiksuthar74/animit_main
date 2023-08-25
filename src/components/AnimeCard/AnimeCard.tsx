import { Link } from "react-router-dom";
import "./AnimeCard.css";

interface animeType {
  mal_id: number;
  title: string;
  image: string;
  type: string;
  episodes: string;
  status: string;
  score: string;
  popularity: string;
  season: string;
  year: string;
  synopsis: string;
}

const AnimeCard = ({ anime }: { anime: animeType }) => {
  return (
    <div className="anime-indv-card-container">
      <img src={anime.image} />
      <Link to={`/anime/${anime.mal_id}`}>
        <p>{anime.title}</p>
      </Link>
    </div>
  );
};

export default AnimeCard;
