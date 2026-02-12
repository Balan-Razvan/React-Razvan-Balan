import { useLocalStorage } from "./useLocalStorage";

export function useFavorites() {
  const [favorites, setFavorites] = useLocalStorage("favorites", []);

  const addToFavorites = (movie) => {
    if (!favorites.find((m) => m.id === movie.id)) {
      setFavorites([...favorites, movie]);
    }
  };

  const removeFromFavorites = (movieId) => {
    setFavorites(favorites.filter((movie) => movie.id !== movieId));
  };

  const isInFavorites = (movieId) => {
    return favorites.some((movie) => movie.id === movieId);
  };

  return { favorites, addToFavorites, removeFromFavorites, isInFavorites };
}
