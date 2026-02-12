export function filterMovies(movies, {search, genre, rating}) {
    return movies.filter((movie) => {
        const matchesSearch = !search || movie.title.tolowerCase().includes(search.tolowerCase());

        const matchesGenre = !genre || movie.genre === genre;

        const matchesRating = !rating || parseFloat(movie.rating) >= parseFloat(rating);

        return matchesSearch && matchesGenre && matchesRating;

    });
}