import Header from "./components/Header/Header";
import MovieList from "./components/MovieList/MovieList";
import movies from "./assets/Archive/movies.json";
import "./App.css";
import { use, useEffect, useState } from "react";
import { useLocalStorage } from "./storage/useLocalStorage";

export default function App() {
  const [search, setSearch] = useState("");
  const [genre, setGenre] = useState("");
  const [rating, setRating] = useState("");
  const [watchlist, setWatchlist] = useLocalStorage("movieWatchList", []);
  const [showWatchList, setShowWatchList] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [allMovies, setAllMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async() => {
      setIsLoading(true);

      // simluare api
      await new Promise(resolve => setTimeout(resolve, 1000));
      setAllMovies(movies);
      setIsLoading(false);
    };
    fetchMovies();
  }, []);

  const addToWatchlist = (movie) => {
    if (!watchlist.find((m) => m.id === movie.id)) {
      setWatchlist([...watchlist, movie]);
    }
  };

  const removeFromWatchlist = (movieId) => {
    setWatchlist(watchlist.filter((movie) => movie.id !== movieId));
  };

  const isInWatchlist = (movieId) => {
    return watchlist.some((movie) => movie.id === movieId);
  };

  const applyFilters = (movielist) => {
    return movielist.filter((movie) => {
      const movieTitle = movie.title.toLowerCase();
      const searchLower = search.toLowerCase();
      const matchesSearch = movieTitle.includes(searchLower);

      let matchesGenre = false;
      if (genre === "") {
        matchesGenre = true;
      } else {
        matchesGenre = movie.genre === genre;
      }

      let matchesRating = false;
      if (rating === "") {
        matchesRating = true;
      } else {
        const movieRating = parseFloat(movie.rating);
        const minRating = parseFloat(rating);
        matchesRating = movieRating >= minRating;
      }

      if (matchesSearch && matchesRating && matchesGenre) {
        return true;
      } else {
        return false;
      }
    });
  };

  const moviesToDisplay = showWatchList ? applyFilters(watchlist) : applyFilters(allMovies);

  if (isLoading) {
    return <p>Loading..</p>
  }
  return (
    <>
      <Header
        search={search}
        onSearchChange={setSearch}
        genre={genre}
        onGenreChange={setGenre}
        rating={rating}
        onRatingChange={setRating}
        showWatchList={showWatchList}
        onToggleWatchlist={() => setShowWatchList(!showWatchList)}
        watchlistCount={watchlist.length}
      />
      <main>
        <MovieList
          movies={moviesToDisplay}
          onAddToWatchlist={addToWatchlist}
          onRemoveFromWatchlist={removeFromWatchlist}
          isInWatchlist={isInWatchlist}
          showWatchList={showWatchList}
        />
      </main>
    </>
  );
}
