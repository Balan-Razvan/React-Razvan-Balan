import MovieCard from "../MovieCard/MovieCard";
import styles from "./MovieList.module.css";

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
    return <p className={styles.empty}>{emptyMessage}</p>;
  }

  return (
    <ul className={styles.movieList}>
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