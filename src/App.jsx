import Header from "./components/Header/Header";
import MovieList from "./components/MovieList/MovieList";
import "./App.css";
import { useMovies } from "./hooks/useMovies";
import { useWatchList } from "./hooks/useWatchlist";
import { useMovieFilters } from "./hooks/useMovieFilters";
import { useState } from "react";

export default function App() {


  const {allMovies, isLoading} = useMovies();
  const {watchlist, addToWatchlist, removeFromWatchlist, isInWatchlist} = useWatchList();
  const {search, setSearch, genre, setGenre, rating, setRating, applyFilters} = useMovieFilters();
  
  const [showWatchList, setShowWatchList] = useState(false);


  const moviesToDisplay = applyFilters(showWatchList ? watchlist : allMovies);

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
