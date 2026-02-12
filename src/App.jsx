import Header from "./components/Header/Header";
import MovieList from "./components/MovieList/MovieList";
import movies from "./assets/Archive/movies.json";
import "./App.css";
import { use, useState } from "react";
import { useLocalStorage } from "./storage/useLocalStorage";


export default function App() {
  const [search, setSearch] = useState("");
  const [genre, setGenre] = useState("");
  const [rating, setRating] = useState("");
  const [watchlist, setWatchlist] = useLocalStorage("movieWatchList", []);
  const [showWatchList, setShowWatchList] = useState(false); 


  const addToWatchlist = (movie) => {
    if(!watchlist.find((m) => m.id === movie.id)) {
      setWatchlist([...watchlist, movie]);
    }
  };

  const removeFromWatchlist = (movieId) => {
    setWatchlist(watchlist.filter((movie) => movie.id !== movieId));
  };

  const isInWatchlist = (movieId) => {
    return watchlist.some((movie) => movie.id === movieId);
  };


  const filteredMovies = movies.filter((movie) => {
    
    const movieTitle = movie.title.toLowerCase();
    const searchLower = search.toLowerCase();
    const matchesSearch = movieTitle.includes(searchLower);

    let matchesGenre = false;
    if(genre === "") {
      matchesGenre = true;
    } else {
      matchesGenre = movie.genre === genre;
    }

    let matchesRating = false;
    if(rating === "") {
      matchesRating = true;
    } else {
      const movieRating = parseFloat(movie.rating);
      const minRating = parseFloat(rating);
      matchesRating = movieRating >= minRating;
    }

    if(matchesSearch && matchesRating && matchesGenre) {
      return true;
    } else {
      return false;
    }
  
  });


  const moviesToDisplay = showWatchList ? watchlist : filteredMovies;

  return (
    <>
      <Header 
        search={search} 
        onSearchChange={setSearch} 
        genre = {genre}
        onGenreChange = {setGenre}
        rating = {rating}
        onRatingChange = {setRating}
        showWatchList = {showWatchList}
        onToggleWatchlist = {() => setShowWatchList(!showWatchList)}
        watchlistCount = {watchlist.length}
        />
      <main>
        <MovieList 
        movies={moviesToDisplay}
        onAddToWatchlist = {addToWatchlist}
        onRemoveFromWatchlist = {removeFromWatchlist}
        isInWatchlist = {isInWatchlist}
        showWatchList = {showWatchList}
        />
      </main>
    </>
  );
}
