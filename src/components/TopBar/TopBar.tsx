// import { Link } from "react-router-dom";
// import AnimitLogo from "../../assets/logo.png";
import "./TopBar.css";
import Button from "../Button/Button";

const TopBar = () => {
  return (
    <div id="header" className="header-home">
      <Button link="auth" text="login" />
    </div>
  );
};

export default TopBar;
