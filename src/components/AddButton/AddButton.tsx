import { NavigateFunction, useNavigate } from "react-router-dom";
import "./AddButton.css";
import { FC } from "react";

interface addButtonType {
  animeId?: string | undefined;
}

const AddButton: FC<addButtonType> = ({ animeId }) => {
  const navigate: NavigateFunction = useNavigate();

  const navigateToAnimeFormMethod = () => {
    navigate(`/animeForm/${animeId}`);
  };

  return (
    <div className="addButtonContainer">
      <button onClick={navigateToAnimeFormMethod}>Add to Database</button>
    </div>
  );
};

export default AddButton;
