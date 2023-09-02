import { Link, Outlet } from "react-router-dom";
import "./AdminLayout.css";

const AdminLayout = () => {
  const url: string = "/admin/adminDashboard";

  return (
    <div>
      <div>
        <div className="adminLinksContainer">
          <div>
            <Link to={`${url}/spotlight`}>Spotlight</Link>
          </div>
          <div>
            <Link to={`${url}/anime`}>Anime</Link>
          </div>
          <div>
            <Link to={`${url}/user`}>User</Link>
          </div>
          <div>
            <Link to={`${url}/genres`}>Genres</Link>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default AdminLayout;
