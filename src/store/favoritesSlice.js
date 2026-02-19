import { createSlice } from "@reduxjs/toolkit";

STORAGE_KEY = "favorites";

function getInitialFavorites() {
    try {
        const item = window.localStorage.getItem(STORAGE_KEY);
        return item ? JSON.parse(item) : [];
    } catch {
        return [];
    }
}

const favoritesSlice = createSlice({
    name: "favorites",
    initialState: getInitialFavorites(),
    reducers: {
        addToFavorites: (state, action) => {
            const movie = action.payload;
            if(!state.find((m) => m.id === movie.id)) {
                state.push(movie);
            }
        },
        removeFromFavorites: (state, action) => {
            const movieId = action.payload;
            return state.filter((movie) => movie.id !== movieId);
        },
    },
});

export const {addToFavorites, removeFromFavorites} = favoritesSlice.actions;
export default favoritesSlice.reducer;

export const selectFavorites = (state) => state.favorites;
export const selectIsInFavorites = (movieId) => (state) => state.favorites.some((m) => m.id === movieId);