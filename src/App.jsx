import Header from "./components/Header.jsx";
import movies from './assets/Archive/movies.json';
import MovieList from "./components/MovieList.jsx";

function App() {
  return (
    <div>
      <header>
        < Header />
      </header>
      <main>
        <MovieList movies={movies}/>
      </main>
    </div>
  );
}

export default App;
