import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./moviesSlice";
import watchlistReducer from "./watchlistSlice";
import favoritesReducer from "./favoritesSlice";


export const store = configureStore({
    reducer: {
        movies: moviesReducer,
        watchlist: watchlistReducer,
        favorites: favoritesReducer,
    },
});

const WATCHLIST_KEY = "movieWatchlist";
const FAVORITES_KEY = "movieFavorites";

store.subscribe(() => {
    const state = store.getState();
    try {
        window.localStorage.setItem(WATCHLIST_KEY, JSON.stringify(state.watchlist));
        window.localStorage.setItem(FAVORITES_KEY, JSON.stringify(state.favorites));
    } catch (e) {
        console.error("error persisting to localstorage: ", e);
    }
})