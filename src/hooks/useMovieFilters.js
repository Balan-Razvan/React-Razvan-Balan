import { useState } from "react";
import { filterMovies } from "../utils/filterMovies";
import { useSearchParams } from "react-router-dom";

export function useMovieFilters() {
  const [searchParams, setSearchParams] = useSearchParams();

  const search = searchParams.get("search") || "";
  const genre = searchParams.get("genre") || "";
  const rating = searchParams.get("rating") || "";

  const setSearch = (value) => {
    setSearchParams(
        (prev) => {
            const next = new URLSearchParams(prev);
            if(value) next.set("search", value);
            else next.delete("search");
            return next;
        }, {replace: true}
    );
  };

const setGenre = (value) => {
    setSearchParams(
        (prev) => {
            const next = new URLSearchParams(prev);
            if(value) next.set("genre", value);
            else next.delete("genre");
            return next;
        }, {replace: true}
    );
  };

const setRating = (value) => {
    setSearchParams(
        (prev) => {
            const next = new URLSearchParams(prev);
            if(value) next.set("rating", value);
            else next.delete("rating");
            return next;
        }, {replace: true}
    );
  };

  const applyFilters = (movies) => {
    return filterMovies(movies, {search, genre, rating});
  }

  return {search, setSearch, genre, setGenre, rating, setRating, applyFilters};

}
