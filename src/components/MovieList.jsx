import MovieCard from "./MovieCard.jsx";

export default function MovieList(props) {
    const {movies} = props;
    return (
        <ul className="movie-list">
            {movies.map((movie) => (
                <li key={movie.id}>
                    <MovieCard movie={movie}/>
                </li>
            ))}
        </ul>
    )
};
