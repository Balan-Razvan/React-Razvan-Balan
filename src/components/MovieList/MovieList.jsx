import MovieCard from "../MovieCard/MovieCard";
import "./MovieList.css";

export default function MovieList({ 
  movies,
  onAddToWatchlist,
  onRemoveFromWatchlist,
  isInWatchlist,
  showWatchList,
}) {
  if (!movies || movies.length === 0) {
    const message = showWatchList ? "watchlist empty" : "no movies found";
    return <p className="empty">{message}</p>
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
            />
        </li>
      ))}
    </ul>
  );
}
