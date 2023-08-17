import "./SideBar.css";
import { useAppDispatch, useAppSelector } from "../../app/hook";
import {
  closeSideBar,
  sideBarState,
} from "../../features/sidebar/sidebarSlice";

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
        SideBar
      </div>
    </>
  );
};

export default SideBar;
