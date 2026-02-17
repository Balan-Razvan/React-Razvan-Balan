import { useMemo } from "react";
import MovieList from "../components/MovieList/MovieList";
import { useMovieContext } from "../context/MovieContext";
import { useMovieFilters } from "../hooks/useMovieFilters";
import { filterMovies } from "../utils/filterMovies";

export default function HomePage() {
  const {
    allMovies,
    addToWatchlist,
    removeFromWatchlist,
    isInWatchlist,
    addToFavorites,
    removeFromFavorites,
    isInFavorites,
  } = useMovieContext();
  const { search, genre, rating } = useMovieFilters();

  const movies = useMemo(
    () => filterMovies(allMovies, { search, genre, rating }),
    [allMovies, search, genre, rating]
  );

  return (
    <MovieList
      movies={movies}
      emptyMessage="No movies found"
      onAddToWatchlist={addToWatchlist}
      onRemoveFromWatchlist={removeFromWatchlist}
      isInWatchlist={isInWatchlist}
      onAddToFavorites={addToFavorites}
      onRemoveFromFavorites={removeFromFavorites}
      isInFavorites={isInFavorites}
    />
  );
}
