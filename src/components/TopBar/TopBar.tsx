// import { Link } from "react-router-dom";
import { useState } from "react";
import AnimitLogo from "../../assets/logo.png";
import userProfile from "../../assets/profile.jpg";
import "./TopBar.css";
import { FaBars } from "react-icons/fa6";
import { NavigateFunction, useNavigate } from "react-router-dom";
import SideBar from "../SideBar/SideBar";
import { useAppDispatch } from "../../app/hook";
import { openSideBar } from "../../features/sidebar/sidebarSlice";

const TopBar = () => {
  const [login] = useState(true);
  const dispatch = useAppDispatch();

  const navigate: NavigateFunction = useNavigate();

  const openSideBarMethod = (): void => {
    dispatch(openSideBar());
  };

  const redirectToLogin = () => {
    navigate("/auth");
  };

  return (
    <>
      <div id="header" className="header-home">
        <div className="container header-flex">
          <div className="header-left">
            <div onClick={openSideBarMethod} id="mobile_menu">
              <FaBars />
            </div>
            <div id="logo">
              <img draggable="false" src={AnimitLogo} alt="" />
            </div>
            <div className="search-input">
              <input type="text" placeholder="Search Anime" />
            </div>
          </div>
          <div>
            {login && (
              <button onClick={redirectToLogin} className="login-button">
                Login
              </button>
            )}
            {!login && (
              <div className="avatar-container">
                <img draggable="false" src={userProfile} alt="user-profile" />
              </div>
            )}
          </div>
        </div>
      </div>
      <SideBar />
    </>
  );
};

export default TopBar;
