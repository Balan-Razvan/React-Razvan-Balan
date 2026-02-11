import Header from "./components/Header/Header";
import MovieList from "./components/MovieList/MovieList";
import movies from "./assets/Archive/movies.json";
import "./App.css";
import { useState } from "react";

export default function App() {
  const [search, setSearch] = useState("");
  const [genre, setGenre] = useState("");
  const [rating, setRating] = useState("");

  const filteredMovies = movies.filter((movie) => {
    
    const movieTitle = movie.title.toLowerCase();
    const searchLower = search.toLowerCase();
    const matchesSearch = movieTitle.includes(searchLower);

    let matchesGenre = false;
    if(genre === "") {
      matchesGenre = true;
    } else {
      matchesGenre = movie.genre === genre;
    }

    let matchesRating = false;
    if(rating === "") {
      matchesRating = true;
    } else {
      const movieRating = parseFloat(movie.rating);
      const minRating = parseFloat(rating);
      matchesRating = movieRating >= minRating;
    }

    if(matchesSearch && matchesRating && matchesGenre) {
      return true;
    } else {
      return false;
    }
  
  });

  return (
    <>
      <Header 
        search={search} 
        onSearchChange={setSearch} 
        genre = {genre}
        onGenreChange = {setGenre}
        rating = {rating}
        onRatingChange = {setRating}
        />
      <main>
        <MovieList movies={filteredMovies} />
      </main>
    </>
  );
}
