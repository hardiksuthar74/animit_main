import { useParams } from "react-router-dom";
import AddButton from "../../components/AddButton/AddButton";
import AnimeImage from "../../components/AnimeImage/AnimeImage";
import { useSingleAnime } from "../../hooks/useSingleAnime";
import "./AnimeDetailPage.css";

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

const AnimeDetailPage = () => {
  const { animeid } = useParams();

  const { isLoading, searchedAnime } = useSingleAnime(animeid);

  if (isLoading) return <div>Loading.....</div>;

  const anime: animeType = searchedAnime;

  const {
    images,
    title,
    synopsis,
    episodes,
    status,
    score,
    popularity,
    season,
    year,
    type,
  } = anime;

  return (
    <div className="animeDetailPageContainer">
      <div className="animeDetailPageLeft">
        <AnimeImage image={images} />
        <AddButton />
      </div>
      <div>
        <h1>
          <span className="animeHeaderTitle">Title: </span>
          {title}
        </h1>
        <p>
          <span className="animeHeaderTitle">Synopsis: </span>
          {synopsis}
        </p>
        <p>
          <span className="animeHeaderTitle">Episodes: </span>
          {episodes}
        </p>
        <p>
          <span className="animeHeaderTitle">Status: </span>
          {status}
        </p>
        <p>
          <span className="animeHeaderTitle">Score: </span>
          {score}
        </p>
        <p>
          <span className="animeHeaderTitle">Popularity: </span>
          {popularity}
        </p>
        <p>
          <span className="animeHeaderTitle">Season: </span>
          {season}
        </p>
        <p>
          <span className="animeHeaderTitle">Year: </span>
          {year}
        </p>
        <p>
          <span className="animeHeaderTitle">Type: </span>
          {type}
        </p>
      </div>
    </div>
  );
};

export default AnimeDetailPage;
