import { FaPlay, FaPlus, FaRegCalendar } from "react-icons/fa6";
import BleachSmall from "../../assets/bleackSmall.jpg";

import { useEffect } from "react";

import "./SingleAnimeDetailPage.css";
const imageArray = [
  "../../assets/robin.png",
  "../../assets/ace.png",
  "../../assets/luffy_login.png",
  "../../assets/sanji.png",
  "../../assets/law.png",
];

const randomNumber: number = Math.floor(Math.random() * 5);

const SingleAnimeDetailPage = () => {
  useEffect(() => {
    const topBar = document.querySelector("#header");
    topBar?.classList.add("topBar");
  });

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

  return (
    <>
      <div className="single-anime-grid">
        <div className="second-single-anime-grid">
          <div>
            <img src={BleachSmall} draggable="false" alt="" />
          </div>
          <div>
            <p className="singleAnimeTitle">
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

            <div className="anime-home-synopsis singleAnimeWholeDetail">
              {animeDetail}
            </div>
            <div className="button-anime-home-container">
              <button>
                <FaPlus />
                Add to List
              </button>
            </div>
          </div>
        </div>
        <div className="aboutSingleAnime">
          <img src={imageArray[randomNumber]} alt="" />
        </div>
        <div className="single-anime-background-bw">
          <div draggable="false" className="" />
        </div>
      </div>
    </>
  );
};

export default SingleAnimeDetailPage;
