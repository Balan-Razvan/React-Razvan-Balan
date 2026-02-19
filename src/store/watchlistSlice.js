import { createSlice } from "@reduxjs/toolkit";

const STORAGE_KEY = "movieWatchlist";

function getInitialWatchlist() {
    try {
        const item = window.localStorage.getItem(STORAGE_KEY);
        return item ? JSON.parse(item) : [];
    } catch {
        return [];
    }
}

const watchlistSlice = createSlice({
    name: "watchlist",
    initialState: getInitialWatchlist(),
    reducers: {
        addToWatchlist: (state, action) => {
            const movie = action.payload;
            if(!state.find((m) => m.id === movie.id)){
                state.push(movie);
            }
        },
        removeFromWatchlist: (state, action) => {
            const movieId = action.payload;
            return state.filter((movie) => movie.id !== movieId);
        },
    },
});

export const { addToWatchlist, removeFromWatchlist } = watchlistSlice.actions;
export default watchlistSlice.reducer;

export const selectWatchlist = (state) => state.watchlist;
export const selectIsInWatchlist = (movieId) => (state) => state.watchlist.some((m) => m.id === movieId);