import { useMemo } from "react";
import MovieList from "../components/MovieList/MovieList";
import { useMovieContext } from "../context/MovieContext";
import { useMovieFilters } from "../hooks/useMovieFilters";
import { filterMovies } from "../utils/filterMovies";

export default function FavoritesPage() {
  const {
    favorites,
    addToWatchlist,
    removeFromWatchlist,
    isInWatchlist,
    addToFavorites,
    removeFromFavorites,
    isInFavorites,
  } = useMovieContext();
  const { search, genre, rating } = useMovieFilters();

  const movies = useMemo(
    () => filterMovies(favorites, { search, genre, rating }),
    [favorites, search, genre, rating]
  );

  return (
    <MovieList
      movies={movies}
      emptyMessage="Favorites empty"
      onAddToWatchlist={addToWatchlist}
      onRemoveFromWatchlist={removeFromWatchlist}
      isInWatchlist={isInWatchlist}
      onAddToFavorites={addToFavorites}
      onRemoveFromFavorites={removeFromFavorites}
      isInFavorites={isInFavorites}
    />
  );
}