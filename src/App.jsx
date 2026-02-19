import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/layout";
import HomePage from "./pages/HomePage";
import WatchlistPage from "./pages/WatchlistPage";
import FavoritesPage from "./pages/FavoritesPage";
import MovieDetailsPage from "./pages/MovieDetailsPage";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchMovies } from "./store/moviesSlice";

export default function App() {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  return (
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/watchlist" element={<WatchlistPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="/movies/:id" element={<MovieDetailsPage />} />
        </Route>
      </Routes>
  );
}