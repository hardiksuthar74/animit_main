import { Outlet } from "react-router-dom";
import TopBar from "../TopBar/TopBar";
import Footer from "../Footer/Footer";

export const AppLayout = () => {
  return (
    <>
      <TopBar />
      <Outlet />
      <Footer />
    </>
  );
};
