import { useParams, Link } from "react-router-dom";
import { useMovieContext } from "../context/MovieContext";
import Button from "../components/basic/Button/Button";
import "./MovieDetailsPage.css";

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
      <div className="movie-detail-empty">
        <p>Movie not found</p>
        <Link to="/" className="btn nav-link">
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="movie-detail">
      <Link to="/" className="back-link">
        &larr; Back to movies
      </Link>
      <div className="movie-detail-content">
        <img
          src={movie.image}
          alt={movie.title}
          className="movie-detail-image"
        />
        <div className="movie-detail-info">
          <h1>{movie.title}</h1>
          <p className="movie-detail-genre">{movie.genre}</p>
          <p className="movie-detail-rating">Rating: {movie.rating}</p>
          <div className="movie-detail-actions">
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