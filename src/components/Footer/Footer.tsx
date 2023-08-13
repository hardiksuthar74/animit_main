import "./Footer.css";
import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div id="footer">
      <div id="footer-about">
        <div className="container">
          <div className="footer-top">
            <Link to="/home" className="footer-logo">
              <img src={Logo} alt="Animit" />
            </Link>
          </div>
          <div className="about-text">
            Animit does not store any files on our server, we only linked to the
            media which is hosted on 3rd party services.
          </div>
          <p className="copyright">© Animit. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
