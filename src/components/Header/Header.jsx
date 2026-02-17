import { NavLink } from "react-router-dom";
import Select from "../basic/Select/Select";
import "./Header.css";
import { GENRE_OPTIONS, RATING_OPTIONS } from "../../utils/constants.js";

export default function Header({
  search,
  onSearchChange,
  genre,
  onGenreChange,
  rating,
  onRatingChange,
  watchlistCount,
  favoritesCount,
}) {
  return (
    <header className="header">
      <nav className="buttons-wrapper">
        <NavLink to="/" className="nav-link btn" end>
          Home
        </NavLink>
        <NavLink to="/watchlist" className="nav-link btn">
          Watchlist ({watchlistCount})
        </NavLink>
        <NavLink to="/favorites" className="nav-link btn">
          Favorites ({favoritesCount})
        </NavLink>
      </nav>
      <div className="input-wrapper">
        <input
          type="text"
          placeholder="Search for a movie..."
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>
      <div className="select-wrapper">
        <Select
          id="genre"
          label="Genre"
          value={genre}
          onChange={(e) => onGenreChange(e.target.value)}
          options={GENRE_OPTIONS}
        />
        <Select
          id="rating"
          label="Rating"
          value={rating}
          onChange={(e) => onRatingChange(e.target.value)}
          options={RATING_OPTIONS}
        />
      </div>
    </header>
  );
}