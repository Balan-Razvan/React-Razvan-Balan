import { useState } from "react";
import { filterMovies } from "../utils/filterMovies";

export function useMovieFilters() {
    const [search, setSearch] = useState("");
    const [genre, setGenre] = useState("");
    const [rating, setRating] = useState("");

    const applyFilters = (movies) => {
        return filterMovies(movies, {search, genre, rating});
    };

    return { search, setSearch, genre, setGenre, rating, setRating, applyFilters };
}