import "./MovieCard.css";
import Button from "../basic/Button/Button.jsx";

export default function MovieCard({
  movie,
  onAddToWatchlist,
  onRemoveFromWatchlist,
  isInWatchlist,
  onAddToFavorites,
  onRemoveFromFavorites,
  isInFavorites,
}) {
  const { title, image, genre, rating } = movie;

  const handleWatchlistToggle = () => {
    if (isInWatchlist(movie.id)) {
      onRemoveFromWatchlist(movie.id);
    } else {
      onAddToWatchlist(movie);
    }
  };

  const handleFavoritesToggle = () => {
    if (isInFavorites(movie.id)) {
      onRemoveFromFavorites(movie.id);
    } else {
      onAddToFavorites(movie);
    }
  };

  return (
    <div className="movie-card-body">
      <div className="movie-card">
        <img className="movie-image" src={image} alt={title} />
        <h2 className="movie-title">{title}</h2>
        <p className="movie-genre">{genre}</p>
        <p className="movie-rating">Rating: {rating}</p>
        <div className="movie-card-actions">
          <Button type="button" onClick={handleWatchlistToggle}>
            {isInWatchlist(movie.id)
              ? "Remove from watchlist"
              : "Add to watchlist"}
          </Button>
          <Button type="button" onClick={handleFavoritesToggle}>
            {isInFavorites(movie.id)
              ? "Remove from favorites"
              : "Add to favorites"}
          </Button>
        </div>
      </div>
    </div>
  );
}
