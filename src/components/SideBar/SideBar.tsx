import "./SideBar.css";
import { useAppDispatch, useAppSelector } from "../../app/hook";
import {
  closeSideBar,
  sideBarState,
} from "../../features/sidebar/sidebarSlice";
import { Link } from "react-router-dom";

const SideBar = () => {
  const sideBarOpen = useAppSelector(sideBarState);

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
