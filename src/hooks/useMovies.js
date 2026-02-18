import { useEffect, useState } from "react";

const API_KEY = import.meta.env.VITE_MOVIE_API_KEY || "";
const OMDB_URL = "https://www.omdbapi.com/";
const IMG_URL = "https://img.omdbapi.com/";

export function mapOmdbToMovie(omdbMovie) {
    const poster = omdbMovie.Poster;
    const image = poster && poster !== "N/A" ? poster : `${IMG_URL}?apikey=${API_KEY}&i=${omdbMovie.imdbID}`;
    return {
        id: omdbMovie.imdbID,
        title: omdbMovie.Title,
        image,
        genre: omdbMovie.Genre || "",
        rating: omdbMovie.imdbRating || "N/A",
    };
}

export function useMovies() {
    const [allMovies, setAllMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMovies = async () => {

            if(!API_KEY) {
                setError("cant find api key, check for vite_ config");
                setIsLoading(false);
                return;
            }

            setIsLoading(true);
            setError(null);

            try {
                const searchRes = await fetch(`${OMDB_URL}?apikey=${API_KEY}&s=action&type=movie&page=1`);   // fetch all movies
                const searchData = await searchRes.json();

                if(searchData.Response === "False") {
                    setError(searchData.Error || "failed to fetch movies check response.json");
                    setAllMovies([]);
                    setIsLoading(false);
                    return;
                }

                 const searchResults = searchData.Search || [];

                const detailPromises = searchResults.map(item => 
                    fetch(`${OMDB_URL}?apikey=${API_KEY}&i=${item.imdbID}`)
                        .then(res => res.json())
                        .catch(() => ({Response: "False"}))
                );
                const detailResults = await Promise.all(detailPromises);
                const movies = detailResults.filter(d => d && d.Response === "True").map(mapOmdbToMovie);

                setAllMovies(movies);

            } catch (err) {
                setError(err.message || "failed to fetch movies");
                setAllMovies([]);
            } finally {
                setIsLoading(false);
            }
        };
        fetchMovies();
    }, []);

    return { allMovies, isLoading, error };
}