import MovieCard from "../MovieCard/MovieCard";
import "./MovieList.css";

export default function MovieList({
  movies,
  emptyMessage = "No movies found",
  onAddToWatchlist,
  onRemoveFromWatchlist,
  isInWatchlist,
  onAddToFavorites,
  onRemoveFromFavorites,
  isInFavorites,
}) {
  if (!movies || movies.length === 0) {
    return <p className="empty">{emptyMessage}</p>;
  }

  return (
    <ul className="movie-list">
      {movies.map((movie) => (
        <li key={movie.id}>
          <MovieCard
            movie={movie}
            onAddToWatchlist={onAddToWatchlist}
            onRemoveFromWatchlist={onRemoveFromWatchlist}
            isInWatchlist={isInWatchlist}
            isInFavorites={isInFavorites}
            onAddToFavorites={onAddToFavorites}
            onRemoveFromFavorites={onRemoveFromFavorites}
          />
        </li>
      ))}
    </ul>
  );
}