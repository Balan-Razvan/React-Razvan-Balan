import "./MovieCard.css";

export default function MovieCard({ movie }) {
  const { title, image, genre, rating } = movie;
  const imageUrl = new URL(
    `../../assets/Archive/images/${image}`,
    import.meta.url
  ).href;

  return (
    <div className="movie-card">
      <img className="movie-image" src={imageUrl} alt={title} />
      <h2 className="movie-title">{title}</h2>
      <p className="movie-genre">{genre}</p>
      <p className="movie-rating">Rating: {rating}</p>
    </div>
  );
}
