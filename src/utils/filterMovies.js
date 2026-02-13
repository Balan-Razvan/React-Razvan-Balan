export function filterMovies(movies, {search, genre, rating}) {
    return movies.filter((movie) => {
        const matchesSearch = !search || movie.title.toLowerCase().includes(search.toLowerCase());

        const matchesGenre = !genre || (movie.genre && movie.genre.toLowerCase().includes(genre.toLowerCase()));

        const movieRating = parseFloat(movie.rating);
        const matchesRating = !rating || (!isNaN(movieRating) && movieRating >= parseFloat(rating));

        return matchesSearch && matchesGenre && matchesRating;

    });
}