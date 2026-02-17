import { createContext, useContext } from "react";
import { useMovies } from "../hooks/useMovies";
import { useWatchList } from "../hooks/useWatchlist";
import { useFavorites } from "../hooks/useFavorites";

const MovieContext = createContext();

export function MovieProvider({ children }) {
  const { allMovies, isLoading, error } = useMovies();
  const { watchlist, addToWatchlist, removeFromWatchlist, isInWatchlist } =
    useWatchList();
  const { favorites, addToFavorites, removeFromFavorites, isInFavorites } =
    useFavorites();

  const value = {
    allMovies,
    isLoading,
    error,
    watchlist,
    addToWatchlist,
    removeFromWatchlist,
    isInWatchlist,
    favorites,
    addToFavorites,
    removeFromFavorites,
    isInFavorites,
  };

  return (
    <MovieContext.Provider value={value}>{children}</MovieContext.Provider>
  );
}

export function useMovieContext() {
  const context = useContext(MovieContext);
  if (!context) {
    throw new Error("useMovieContext must be used within a MovieProvider");
  }
  return context;
}