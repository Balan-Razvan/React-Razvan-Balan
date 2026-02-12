import Header from "./components/Header/Header";
import MovieList from "./components/MovieList/MovieList";
import "./App.css";
import { useMovies } from "./hooks/useMovies";
import { useWatchList } from "./hooks/useWatchlist";
import { useMovieFilters } from "./hooks/useMovieFilters";
import { useState } from "react";
import { useFavorites } from "./hooks/useFavorites";

export default function App() {


  const {allMovies, isLoading} = useMovies();
  const {watchlist, addToWatchlist, removeFromWatchlist, isInWatchlist} = useWatchList();
  const {search, setSearch, genre, setGenre, rating, setRating, applyFilters} = useMovieFilters();
  const {favorites, addToFavorites, removeFromFavorites, isInFavorites} = useFavorites();

  const [showWatchList, setShowWatchList] = useState(false);
  const [showFavorites, setShowFavorites] = useState(false);


  const moviesToDisplay = showFavorites ? applyFilters(favorites) : applyFilters(showWatchList ? watchlist : allMovies);
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
        onToggleWatchlist={() => {
          setShowWatchList(true);
          setShowFavorites(false);
        }}
        watchlistCount={watchlist.length}

        showFavorites={showFavorites}
        onToggleFavorites={() => {
          setShowFavorites(true);
          setShowWatchList(false);
        }}
        favoritesCount={favorites.length}

        onToggleHome={() => {
          setShowWatchList(false);
          setShowFavorites(false);
        }}
      />
      <main>
        <MovieList
          movies={moviesToDisplay}
          onAddToWatchlist={addToWatchlist}
          onRemoveFromWatchlist={removeFromWatchlist}
          isInWatchlist={isInWatchlist}
          showWatchList={showWatchList}

          onAddToFavorites={addToFavorites}
          onRemoveFromFavorites={removeFromFavorites}
          isInFavorites={isInFavorites}
          showFavorites={showFavorites}
        />
      </main>
    </>
  );
}
