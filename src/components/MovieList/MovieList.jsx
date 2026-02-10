import MovieCard from "../MovieCard/MovieCard";
import "./MovieList.css";

export default function MovieList({ movies }) {
  if (!movies || movies.length === 0) {
    return <p className="empty">No movies found.</p>;
  }

  return (
    <ul className="movie-list">
      {movies.map((movie) => (
        <li key={movie.id}>
          <MovieCard movie={movie} />
        </li>
      ))}
    </ul>
  );
}
