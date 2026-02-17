
import { useParams, Link } from "react-router-dom";
import { useMovieContext } from "../context/MovieContext";
import Button from "../components/basic/Button/Button";
import styles from "./MovieDetailsPage.module.css";

export default function MovieDetailsPage() {
  const { id } = useParams();
  const {
    allMovies,
    watchlist,
    favorites,
    addToWatchlist,
    removeFromWatchlist,
    isInWatchlist,
    addToFavorites,
    removeFromFavorites,
    isInFavorites,
  } = useMovieContext();

  const movie =
    allMovies.find((m) => m.id === id) ||
    watchlist.find((m) => m.id === id) ||
    favorites.find((m) => m.id === id);

  if (!movie) {
    return (
      <div className={styles.movieDetailEmpty}>
        <p>Movie not found</p>
        <Link to="/" className={styles.backToHomeLink}>
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className={styles.movieDetail}>
      <Link to="/" className={styles.backLink}>
        &larr; Back to movies
      </Link>
      <div className={styles.movieDetailContent}>
        <img
          src={movie.image}
          alt={movie.title}
          className={styles.movieDetailImage}
        />
        <div className={styles.movieDetailInfo}>
          <h1>{movie.title}</h1>
          <p className={styles.movieDetailGenre}>{movie.genre}</p>
          <p className={styles.movieDetailRating}>Rating: {movie.rating}</p>
          <div className={styles.movieDetailActions}>
            <Button
              onClick={() =>
                isInWatchlist(movie.id)
                  ? removeFromWatchlist(movie.id)
                  : addToWatchlist(movie)
              }
            >
              {isInWatchlist(movie.id)
                ? "Remove from Watchlist"
                : "Add to Watchlist"}
            </Button>
            <Button
              onClick={() =>
                isInFavorites(movie.id)
                  ? removeFromFavorites(movie.id)
                  : addToFavorites(movie)
              }
            >
              {isInFavorites(movie.id)
                ? "Remove from Favorites"
                : "Add to Favorites"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
