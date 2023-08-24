import SearchAnime from "../../components/SearchAnime/SearchAnime";
import ListAnime from "../../components/ListAnime/ListAnime";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard-container ">
      <SearchAnime />
      <ListAnime />
    </div>
  );
};

export default Dashboard;
