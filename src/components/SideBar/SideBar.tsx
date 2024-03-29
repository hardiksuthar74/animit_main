import "./SideBar.css";
import { useAppDispatch, useAppSelector } from "../../hooks/hook";
import { closeSideBar, sideBarState } from "../../redux/slice/sidebarSlice";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const SideBar = () => {
  const sideBarOpen = useAppSelector(sideBarState);

  const targetBody = () => {
    const body = document.querySelector("body");
    if (sideBarOpen) body?.classList.add("body-hidden");

    if (!sideBarOpen) body?.classList.remove("body-hidden");
  };

  useEffect(() => {
    targetBody();
  });

  const dispatch = useAppDispatch();

  const closeSideBarMethod = (): void => {
    dispatch(closeSideBar());
  };
  return (
    <>
      {sideBarOpen && (
        <div className="sidebar-container" onClick={closeSideBarMethod}></div>
      )}
      <div
        className={`sidebar-nav ${
          !sideBarOpen ? "hide-sidebar" : "unhide-sidebar"
        }`}
      >
        <button onClick={closeSideBarMethod} className="sidebar-close">
          Close menu
        </button>
        <div>
          <ul className="sidebar-nav-link">
            <div>
              <Link onClick={closeSideBarMethod} to="home">
                Home
              </Link>
            </div>
            <div>
              <Link onClick={closeSideBarMethod} to="popular">
                Popular
              </Link>
            </div>
            <div>
              <Link onClick={closeSideBarMethod} to="movies">
                Movies
              </Link>
            </div>
            <div>
              <Link onClick={closeSideBarMethod} to="specials">
                Specials
              </Link>
            </div>
          </ul>
        </div>
      </div>
    </>
  );
};

export default SideBar;
