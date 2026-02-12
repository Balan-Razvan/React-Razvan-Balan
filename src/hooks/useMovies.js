import { useEffect, useState } from "react";
import movies from "../assets/Archive/movies.json";

export function useMovies() {
    const [allMovies, setAllMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchMovies = async () => {
            setIsLoading(true);

            await new Promise((resolve) => setTimeout(resolve, 1000));
            setAllMovies(movies);
            setIsLoading(false);
        };
        fetchMovies();
    }, []);

    return { allMovies, isLoading };
}