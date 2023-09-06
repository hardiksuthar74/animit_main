import "./AnimeHomeDetails.css";
import { FaAngleRight, FaPlay, FaPlus, FaRegCalendar } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { useFavAnime } from "../../services/api/animeApi";

const AnimeHomeDetails = () => {
  const { isLoading, anime, error } = useFavAnime();

  const navigate = useNavigate();

  const navigateToDetailPage = () => {
    navigate("/animes/bleach");
  };

  if (isLoading) return <div>Loading...</div>;

  const randomNumber = Math.floor(Math.random() * 10);

  return (
    <div className="anime-home">
      <div className="anime-home-detail-container">
        <p className="spotlight">#{randomNumber} Spotlight</p>
        <p className="anime-home-title">{anime[randomNumber].title}</p>

        <div className="type-anime-home">
          <p>
            <FaPlay />
            {anime[randomNumber].type}
          </p>
          <p>
            <FaRegCalendar />
            {anime[randomNumber].year}
          </p>
          <p className="anime-resolutaion">HD</p>
        </div>

        <div className="anime-home-synopsis">
          {anime[randomNumber].synopsis.slice(0, 300)}......
        </div>

        <div className="button-anime-home-container">
          <button>
            <FaPlus />
            Add
          </button>
          <button onClick={navigateToDetailPage}>
            Detail
            <FaAngleRight />
          </button>
        </div>
      </div>
      <div className="deslide-cover">
        <img
          draggable="false"
          className="anime-home-image"
          src={anime[randomNumber].image}
          alt=""
        />
      </div>
    </div>
  );
};

export default AnimeHomeDetails;
