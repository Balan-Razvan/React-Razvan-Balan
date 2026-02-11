import Header from "./components/Header/Header";
import MovieList from "./components/MovieList/MovieList";
import movies from "./assets/Archive/movies.json";
import "./App.css";
import { useState } from "react";

export default function App() {
  const [search, setSearch] = useState("");

  const filteredMovies = movies.filter((movie) => {
    return movie.title.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <>
      <Header search={search} onSearchChange={setSearch} />
      <main>
        <MovieList movies={filteredMovies} />
      </main>
    </>
  );
}
