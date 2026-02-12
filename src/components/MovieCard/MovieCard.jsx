import "./MovieCard.css";
import Button from "../basic/Button/Button.jsx"

export default function MovieCard({ 
  movie,
  onAddToWatchlist,
  onRemoveFromWatchlist,
  isInWatchlist
}) {
  const { title, image, genre, rating } = movie;
  const imageUrl = new URL(
    `../../assets/Archive/images/${image}`,
    import.meta.url
  ).href;

  const handleWatchlistToggle = () => {
    if (isInWatchlist(movie.id)) {
      onRemoveFromWatchlist(movie.id);
    } else {
      onAddToWatchlist(movie);
    }
  }

  return (
    <div className="movie-card">
      <img className="movie-image" src={imageUrl} alt={title} />
      <h2 className="movie-title">{title}</h2>
      <p className="movie-genre">{genre}</p>
      <p className="movie-rating">Rating: {rating}</p>
      <Button type="button" onClick={handleWatchlistToggle}>
        {isInWatchlist(movie.id) ? "Remove from watchlist" : "Add to watchlist"}
      </Button>
    </div>
  );
}
