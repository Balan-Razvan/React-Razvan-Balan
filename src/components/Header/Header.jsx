import { NavLink } from "react-router-dom";
import Select from "../basic/Select/Select";
import styles from "./Header.module.css";
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
    <header className={styles.header}>
      <nav className={styles.buttonsWrapper}>
        <NavLink
          to="/"
          className={({ isActive }) =>
            [styles.navLink, isActive && styles.active].filter(Boolean).join(" ")
          }
          end
        >
          Home
        </NavLink>
        <NavLink
          to="/watchlist"
          className={({ isActive }) =>
            [styles.navLink, isActive && styles.active].filter(Boolean).join(" ")
          }
        >
          Watchlist ({watchlistCount})
        </NavLink>
        <NavLink
          to="/favorites"
          className={({ isActive }) =>
            [styles.navLink, isActive && styles.active].filter(Boolean).join(" ")
          }
        >
          Favorites ({favoritesCount})
        </NavLink>
      </nav>
      <div className={styles.inputWrapper}>
        <input
          type="text"
          placeholder="Search for a movie..."
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>
      <div className={styles.selectWrapper}>
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