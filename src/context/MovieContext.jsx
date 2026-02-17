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

  return <MovieContext value={value}>{children}</MovieContext>;
};

export function useMovieContext() {
    const context = useContext(MovieContext);
    if(!context) {
        throw new Error("usemoviecontext must be used iwth a movieprovider");
    }
    return context;
}
