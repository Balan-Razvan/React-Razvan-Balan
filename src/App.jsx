import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/layout";
import HomePage from "./pages/HomePage";
import WatchlistPage from "./pages/WatchlistPage";
import FavoritesPage from "./pages/FavoritesPage";
import MovieDetailsPage from "./pages/MovieDetailsPage";
import { MovieProvider } from "./context/MovieContext";

export default function App() {
  return (
    <MovieProvider>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/watchlist" element={<WatchlistPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="/movies/:id" element={<MovieDetailsPage />} />
        </Route>
      </Routes>
    </MovieProvider>
  );
}