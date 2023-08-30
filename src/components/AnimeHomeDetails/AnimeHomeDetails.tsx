import "./AnimeHomeDetails.css";

import Bleach from "../../assets/bleach.jpg";
import { FaAngleRight, FaPlay, FaPlus, FaRegCalendar } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const AnimeHomeDetails = () => {
  const animeDetail: string = `Substitute Soul Reaper Ichigo Kurosaki spends his days fighting
  against Hollows, dangerous evil spirits that threaten Karakura Town.
  Ichigo carries out his quest with his closest allies: Orihime Inoue,
  his childhood friend with a talent for healing; Yasutora Sado, his
  high school classmate with superhuman strength; and Uryuu Ishida,
  Ichigo's Quincy rival.\n\nIchigo's vigilante routine is disrupted by
  the sudden appearance of Asguiaro Ebern, a dangerous Arrancar who
  heralds the return of Yhwach, an ancient Quincy king. Yhwach seeks to
  reignite the historic blood feud between Soul Reaper and Quincy, and
  he sets his sights on erasing both the human world and the Soul
  Society for good.\n\nYhwach launches a two-pronged invasion into both
  the Soul Society and Hueco Mundo, the home of Hollows and Arrancar. In
  retaliation, Ichigo and his friends must fight alongside old allies
  and enemies alike to end Yhwach's campaign of carnage before the world
  itself comes to an end.`;

  const navigate = useNavigate();

  const navigateToDetailPage = () => {
    navigate("/animes/bleach");
  };

  return (
    <div className="anime-home">
      <div className="anime-home-detail-container">
        <p className="spotlight">#1 Spotlight</p>
        <p className="anime-home-title">
          Bleach: Thousand-Year Blood War - The Separation
        </p>

        <div className="type-anime-home">
          <p>
            <FaPlay />
            TV
          </p>
          <p>
            <FaRegCalendar />
            Jul 8, 2023
          </p>
          <p className="anime-resolutaion">HD</p>
          {/* <p className="anime-home-episodes">
            <FaRegClosedCaptioning />8
          </p> */}
        </div>

        <div className="anime-home-synopsis">
          {animeDetail.slice(0, 300)}......
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
          src={Bleach}
          alt=""
        />
      </div>
    </div>
  );
};

export default AnimeHomeDetails;
