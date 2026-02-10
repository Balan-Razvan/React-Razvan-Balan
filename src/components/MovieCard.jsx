export default function MovieCard( props ) {

    const { id, title, image, genre, rating } = props.movie;

    return (
        <div className="movie-card">
            <img className="movie-image" src={`src/assets/Archive/images/${image}`} alt={title} />
            <h2 className="movie-title">{title}</h2>
            <p className="movie-genre">{genre}</p>
            <p className="movie-rating">{rating}</p>
        </div>
    );
};
