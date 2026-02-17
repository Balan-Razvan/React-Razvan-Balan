import { Link } from "react-router-dom";
import styles from "./MovieCard.module.css";
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
    <div className={styles.movieCardBody}>
      <div className={styles.movieCard}>
        <Link to={`/movies/${movie.id}`}>
          <img className={styles.movieImage} src={image} alt={title} />
        </Link>
        <Link to={`/movies/${movie.id}`} className={styles.movieTitleLink}>
          <h2 className={styles.movieTitle}>{title}</h2>
        </Link>
        <p className={styles.movieGenre}>{genre}</p>
        <p className={styles.movieRating}>Rating: {rating}</p>
        <div className={styles.movieCardActions}>
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