import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import Header from "../Header/Header";
import { useMovieFilters } from "../../hooks/useMovieFilters";
import { selectWatchlist } from "../../store/watchlistSlice";
import { selectFavorites } from "../../store/favoritesSlice";
import styles from "./Layout.module.css";

export default function Layout() {
  const watchlist = useSelector(selectWatchlist);
  const favorites = useSelector(selectFavorites);
  const isLoading = useSelector((state) => state.movies.isLoading);
  const error = useSelector((state) => state.movies.error);
  const { search, setSearch, genre, setGenre, rating, setRating } =
    useMovieFilters();

  return (
    <>
      <Header
        search={search}
        onSearchChange={setSearch}
        genre={genre}
        onGenreChange={setGenre}
        rating={rating}
        onRatingChange={setRating}
        watchlistCount={watchlist.length}
        favoritesCount={favorites.length}
      />
      <main className={styles.main}>
        {error ? (
          <div className={styles.loadingContainer}>
            <span>{error}</span>
          </div>
        ) : isLoading ? (
          <div className={styles.loadingContainer}>
            <div className={styles.loadingSpinner}></div>
            <span>Loading Movies..</span>
          </div>
        ) : (
          <Outlet />
        )}
      </main>
    </>
  );
}