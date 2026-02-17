import { useParams, Link } from "react-router-dom";
import { useMovieContext } from "../context/MovieContext";
import Button from "../components/basic/Button/Button";
import "./MovieDetailsPage.css";

export default function MovieDetailsPage() {
    const {id} = useParams();
    const {allMovies, addToWatchlist, removeFromWatchlist, isInWatchlist, addToFavorites, removeFromFavorites, isInFavorites} = useMovieContext();

    const movie = allMovies.find(m => m.imdbID === id);

    if(!movie) {
        return (
            <div className="movie-detail-empty">
                <p>Movie not found</p>
                <Link to="/" className="btn nav-link">back to homepage</Link>
            </div>
        );
    }

    return (
        <div className="movie-details">
            <Link to="/" className="back-link">&larr; back to movies</Link>
            <div className="movie-detail-content">
                <img src={movie.image} alt={movie.title} className="movie-detail-image" />
                <div className="movie-detail-info">
                    <h1>{movie.title}</h1>
                    <p className="movie-detail-genre">{movie.genre}</p>
                    <p className="movie-detail-rating">{movie.rating}</p>
                    <div className="movie-detail-actions">
                        <Button 
                            onClick={() => {
                                if(isInWatchlist(movie.id)) {
                                    removeFromWatchlist(movie.id);
                                } else {
                                    addToWatchlist(movie);
                                }
                            }}
                        >
                            {isInWatchlist(movie.id) ? "Remove from Watchlist" : "Add to Watchlist"}
                        </Button>
                        <Button 
                            onClick={() => {
                                if(isInFavorites(movie.id)) {
                                    removeFromFavorites(movie.id);
                                } else {
                                    addToFavorites(movie);
                                }
                            }}
                        >
                            {isInFavorites(movie.id) ? "Remove from Favorites" : "Add to Favorites"}
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}