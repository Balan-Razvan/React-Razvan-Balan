import Header from "./components/Header/Header";
import MovieList from "./components/MovieList/MovieList";
import movies from "./assets/Archive/movies.json";
import "./App.css";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <MovieList movies={movies} />
      </main>
    </>
  );
}
