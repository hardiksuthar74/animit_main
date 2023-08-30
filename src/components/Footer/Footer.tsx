import "./Footer.css";
import Logo from "../../assets/logo.png";
// import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div id="footer">
      <div className="footerLogo">
        <img src={Logo} alt="" />
      </div>
      <div>
        <p>© AniWatch.to. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
