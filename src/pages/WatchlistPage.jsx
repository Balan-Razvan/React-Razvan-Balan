import { useMemo } from "react";
import MovieList from "../components/MovieList/MovieList";
import { useMovieFilters } from "../hooks/useMovieFilters";
import { filterMovies } from "../utils/filterMovies";
import { useSelector, useDispatch } from "react-redux";
import {
  addToWatchlist,
  removeFromWatchlist,
  selectWatchlist,
} from "../store/watchlistSlice";
import {
  addToFavorites,
  removeFromFavorites,
  selectFavorites,
} from "../store/favoritesSlice";

export default function WatchlistPage() {
  const dispatch = useDispatch();
  const watchlist = useSelector(selectWatchlist);
  const favorites = useSelector(selectFavorites);
  const isInWatchlist = (movieId) => watchlist.some((m) => m.id === movieId);
  const isInFavorites = (movieId) => favorites.some((m) => m.id === movieId);
  const { search, genre, rating } = useMovieFilters();

  const movies = useMemo(
    () => filterMovies(watchlist, { search, genre, rating }),
    [watchlist, search, genre, rating],
  );

  return (
    <MovieList
      movies={movies}
      emptyMessage="No movies found"
      onAddToWatchlist={(movie) => dispatch(addToWatchlist(movie))}
      onRemoveFromWatchlist={(movieId) =>
        dispatch(removeFromWatchlist(movieId))
      }
      isInWatchlist={isInWatchlist}
      onAddToFavorites={(movie) => dispatch(addToFavorites(movie))}
      onRemoveFromFavorites={(movieId) =>
        dispatch(removeFromFavorites(movieId))
      }
      isInFavorites={isInFavorites}
    />
  );
}
