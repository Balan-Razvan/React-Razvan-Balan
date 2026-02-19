import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Button from "../components/basic/Button/Button";
import { fetchMovieById } from "../store/moviesSlice";
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
import styles from "./MovieDetailsPage.module.css";

export default function MovieDetailsPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const movie = useSelector((state) => state.movies.selectedMovie);
  const movieDetailLoading = useSelector(
    (state) => state.movies.movieDetailLoading
  );
  const movieDetailError = useSelector(
    (state) => state.movies.movieDetailError
  );
  const watchlist = useSelector(selectWatchlist);
  const favorites = useSelector(selectFavorites);

  useEffect(() => {
    if (id) {
      dispatch(fetchMovieById(id));
    }
  }, [id, dispatch]);

  const isInWatchlist = movie && watchlist.some((m) => m.id === movie.id);
  const isInFavorites = movie && favorites.some((m) => m.id === movie.id);

  if (movieDetailLoading) {
    return (
      <div className={styles.movieDetailEmpty}>
        <p>Loading movie...</p>
        <Link to="/" className={styles.backToHomeLink}>
          Back to Home
        </Link>
      </div>
    );
  }

  if (movieDetailError || !movie) {
    return (
      <div className={styles.movieDetailEmpty}>
        <p>{movieDetailError || "Movie not found"}</p>
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
                isInWatchlist
                  ? dispatch(removeFromWatchlist(movie.id))
                  : dispatch(addToWatchlist(movie))
              }
            >
              {isInWatchlist
                ? "Remove from Watchlist"
                : "Add to Watchlist"}
            </Button>
            <Button
              onClick={() =>
                isInFavorites
                  ? dispatch(removeFromFavorites(movie.id))
                  : dispatch(addToFavorites(movie))
              }
            >
              {isInFavorites
                ? "Remove from Favorites"
                : "Add to Favorites"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}