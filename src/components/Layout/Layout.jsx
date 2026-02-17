import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import { useMovieContext } from "../../context/MovieContext";
import { useMovieFilters } from "../../hooks/useMovieFilters";

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
      <main>
        {error ? (
          <div className="loading-container">
            <span>{error}</span>
          </div>
        ) : isLoading ? (
          <div className="loading-container">
            <div className="loading-spinner"></div>
            <span>Loading Movies..</span>
          </div>
        ) : (
          <Outlet />
        )}
      </main>
    </>
  );
}