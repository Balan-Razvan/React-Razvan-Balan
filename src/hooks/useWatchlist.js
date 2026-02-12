import { useLocalStorage } from "./useLocalStorage";

export function useWatchList() {
  const [watchlist, setWatchlist] = useLocalStorage("movieWatchList", []);

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

  return {watchlist, addToWatchlist, removeFromWatchlist, isInWatchlist};
}
