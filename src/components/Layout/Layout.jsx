import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import { useMovieContext } from "../../context/MovieContext";
import { useMovieFilters } from "../../hooks/useMovieFilters";
import styles from "./Layout.module.css";

export default function Layout() {
  const { watchlist, favorites, isLoading, error } = useMovieContext();
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