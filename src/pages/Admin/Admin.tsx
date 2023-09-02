import { Navigate, Route, Routes } from "react-router-dom";
import "./Admin.css";
import AdminLayout from "../AdminLayout/AdminLayout";
import DashboardAdmin from "../DashboardAdmin/DashboardAdmin";
import Spotlight from "../mainDashboardPages/Spotlight/Spotlight";
import Anime from "../mainDashboardPages/Anime/Anime";
import User from "../mainDashboardPages/User/User";
import Genres from "../mainDashboardPages/Genres/Genres";

const Admin = () => {
  return (
    <Routes>
      <Route element={<AdminLayout />}>
        <Route index element={<Navigate replace to="adminDashboard" />} />
        <Route path="/adminDashboard" element={<DashboardAdmin />} />
        <Route path="/adminDashboard/spotlight" element={<Spotlight />} />
        <Route path="/adminDashboard/anime" element={<Anime />} />
        <Route path="/adminDashboard/user" element={<User />} />
        <Route path="/adminDashboard/genres" element={<Genres />} />
      </Route>
    </Routes>
  );
};

export default Admin;
