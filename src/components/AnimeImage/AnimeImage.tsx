import "./AnimeImage.css";

const AnimeImage = ({ image }: { image: string }) => {
  return (
    <div className="animeImageContainer">
      <img src={image} alt="image" />
    </div>
  );
};

export default AnimeImage;
