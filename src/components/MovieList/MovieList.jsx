import MovieCard from "../MovieCard/MovieCard";
import "./MovieList.css";

export default function MovieList({ 
  movies,
  onAddToWatchlist,
  onRemoveFromWatchlist,
  isInWatchlist,
  showWatchList,
  onAddToFavorites,
  onRemoveFromFavorites,
  isInFavorites,
  showFavorites,
}) {
  if (!movies || movies.length === 0) {
    const message = showFavorites ? "favorites empty" : showWatchList ? "wathclist emtpy" : "no movies found";
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
            isInFavorites={isInFavorites}
            onAddToFavorites={onAddToFavorites}
            onRemoveFromFavorites={onRemoveFromFavorites}
            />
        </li>
      ))}
    </ul>
  );
}
