import { Link } from "react-router-dom";
import AnimitLogo from "../../assets/logo.png";
import "./TopBar.css";

const TopBar = () => {
  return (
    <div id="header" className="header-home">
      <div className="header-container">
        <div id="mobile-menu">
          <i>|||</i>
        </div>
        <Link id="logo" to={"/home"}>
          <img alt="logo" src={AnimitLogo} />
        </Link>
        <div id="search">
          <div className="search-content">
            <form>
              <input className="form-control search-input" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
