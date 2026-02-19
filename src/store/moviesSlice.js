import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const API_KEY = import.meta.env.VITE_MOVIE_API_KEY || "";
const OMDB_URL = "https://www.omdbapi.com/";
const IMG_URL = "https://img.omdbapi.com/";

function mapOmdbToMovie(omdbMovie) {
  const poster = omdbMovie.Poster;
  const image =
    poster && poster !== "N/A"
      ? poster
      : `${IMG_URL}?apikey=${API_KEY}&i=${omdbMovie.imdbID}`;
  return {
    id: omdbMovie.imdbID,
    title: omdbMovie.Title,
    image,
    genre: omdbMovie.Genre || "",
    rating: omdbMovie.imdbRating || "N/A",
  };
}

export const fetchMovies = createAsyncThunk(
  "movies/fetchMovies",
  async (_, { rejectWithValue }) => {
    if (!API_KEY) {
      return rejectWithValue("cant find api key");
    }
    try {
      const searchRes = await fetch(
        `${OMDB_URL}?apikey=${API_KEY}&s=action&type=movie&page=1`,
      );
      const searchData = await searchRes.json();

      if (searchData.Response === "False") {
        return rejectWithValue(
          searchData.Error || "failed to fetch movies check response.json",
        );
      }

      const searchResults = searchData.Search || [];
      const movies = [];

      for (const item of searchResults) {
        const detailRes = await fetch(
          `${OMDB_URL}?apikey=${API_KEY}&i=${item.imdbID}`,
        );
        const detail = await detailRes.json();
        if (detail.Response === "True") {
          movies.push(mapOmdbToMovie(detail));
        }
      }
      return movies;
    } catch (err) {
      return rejectWithValue(err.message || "failed to fetch movies");
    }
  },
);

export const fetchMovieById = createAsyncThunk(
  "movies/fetchMovieById",
  async (movieId, { rejectWithValue }) => {
    if (!API_KEY) {
      return rejectWithValue("cant find api key");
    }
    try {
        const res = await fetch(`${OMDB_URL}?apikey=${API_KEY}&i=${movieId}`);
        const data = await res.json();
        if(data.Response !== "True") {
            return rejectWithValue(data.Error || "movie not found");
        }
        return mapOmdbToMovie(data);
    } catch (err) {
        return rejectWithValue(err.message || "failed to fetch movie");
    }
  },
);

const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        allMovies: [],
        isLoading: true,
        error: null,
        selectedMovie: null,
        movieDetailLoading: false,
        movieDetailError: null,
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchMovies.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchMovies.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                state.allMovies = action.payload;
            })
            .addCase(fetchMovies.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
                state.allMovies = [];
            })
            .addCase(fetchMovieById.pending, (state) => {
                state.movieDetailLoading = true;
                state.movieDetailError = null;
                state.selectedMovie = null;
            })
            .addCase(fetchMovieById.fulfilled, (state, action) => {
                state.movieDetailLoading = false;
                state.movieDetailError = null;
                state.selectedMovie = action.payload;
            })
            .addCase(fetchMovieById.rejected, (state, action) => {
                state.movieDetailLoading = false;
                state.movieDetailError = action.payload;
                state.selectedMovie = null;
            })
    }
})

export default moviesSlice.reducer;