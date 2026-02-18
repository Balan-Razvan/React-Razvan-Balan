import { useEffect, useState } from "react";
import { mapOmdbToMovie } from "./useMovies";
const API_KEY = import.meta.env.VITE_MOVIE_API_KEY || "";
const OMDB_URL = "https://www.omdbapi.com/";

export function useMovieDetails(id) {
    const [movie, setMovie] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if(!id) return;
        setIsLoading(true);

        fetch(`${OMDB_URL}?apikey=${API_KEY}&i=${id}`)
            .then(res => res.json())
            .then(data => {
                if(data.Response === "False") {
                    setError(data.Error || "failed to fetch movie details");
                    setMovie(null);
                } else {
                    setMovie(mapOmdbToMovie(data));
                }
                setIsLoading(false);
            })
            .catch(err => {
                setError(err.message || "failed to fetch movie details");
                setMovie(null);
                setIsLoading(false);
            });
    }, [id]);

    return {movie, isLoading, error};
}