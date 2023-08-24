import { useSearchAnime } from "../../services/useQueries";
import useDebounce from "../../utils/debounce";
import "./Dashboard.css";
import "../../components/SearchAnime/SearchAnime.css";

import { useState } from "react";

const Dashboard = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setSearchQuery(e.target.value);
  };

  const debouncedSearchTerm = useDebounce(searchQuery, 1000);
  const { searchedAnime } = useSearchAnime(debouncedSearchTerm);

  return (
    <div className="dashboard-container ">
      <div className="search-dashboard-container">
        <input onChange={handleChange} />
      </div>
      <>
        {searchedAnime &&
          searchedAnime.map((anime) => {
            return <div>{anime.title}</div>;
          })}
      </>
    </div>
  );
};

export default Dashboard;
