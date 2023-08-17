import "./AnimeHomeDetails.css";

import Bleach from "../../assets/bleach.jpg";

const AnimeHomeDetails = () => {
  return (
    <div className="anime-home">
      <div>One piece</div>
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
