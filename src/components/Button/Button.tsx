import { FC } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";
import "./Button.css";

interface buttonProps {
  text: string;
  link: string;
}

const Button: FC<buttonProps> = (props) => {
  const navigate: NavigateFunction = useNavigate();

  const redirectFunction = (): void => {
    navigate(`/${props.link}`);
  };

  return (
    <button onClick={redirectFunction} className="btn">
      {props.text}
    </button>
  );
};

export default Button;
