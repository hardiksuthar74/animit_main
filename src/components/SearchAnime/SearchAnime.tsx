import useDebounce from "../../utils/debounce";
import { useSearchAnime } from "../../hooks/useSearchAnime";
import { useAppDispatch, useAppSelector } from "../../hooks/hook";
import {
  searchAnimeQuery,
  setAnimeQuery,
} from "../../redux/slice/searchAnimeSlice";
import "./SearchAnime.css";

const SearchAnime = () => {
  const animeQuery = useAppSelector(searchAnimeQuery);

  const dispatch = useAppDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    dispatch(setAnimeQuery(e.target.value));
  };

  const debouncedSearchTerm = useDebounce(animeQuery, 1000);
  useSearchAnime(debouncedSearchTerm);

  return (
    <div className="search-dashboard-container">
      <input onChange={handleChange} placeholder="Search Anime" />
    </div>
  );
};

export default SearchAnime;
