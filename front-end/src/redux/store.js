// Import `configureStore` from Redux Toolkit. This is used to create and configure the Redux store easily.
import { configureStore } from "@reduxjs/toolkit";

// Import `setupListeners` from Redux Toolkit Query.
// This enables refetching of data in response to focus, reconnect events, or other behaviors.
import { setupListeners } from "@reduxjs/toolkit/query/react";

// Import the `apiSlice` that contains all API endpoints and configurations.
import { apiSlice } from "./api/apiSlice";

// Import a utility function to retrieve saved favorites from localStorage.
// This ensures data persistence between browser sessions.
import { getFavoritesFromLocalStorage } from "../Utils/localStorage";

// Retrieve the initial list of favorites from localStorage.
// If no data is found, fallback to an empty array.
const initialFavorites = getFavoritesFromLocalStorage() || [];

// Create and configure the Redux store.
const store = configureStore({
  // Define the reducer(s) for the store.
  // `apiSlice.reducerPath` is a unique key under which the API slice's reducer is stored.
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer, // Attach the reducer from the `apiSlice`.
  },

  // Preload the initial state of the store with any existing favorites.
  // This allows the application to start with previously saved data.
  preloadedState: {
    favorites: initialFavorites, // Add the initial favorites state from localStorage.
  },

  // Add custom middleware to the store.
  // `getDefaultMiddleware()` provides default Redux middleware like `thunk`.
  // `apiSlice.middleware` adds middleware for handling API interactions (e.g., caching, invalidation).
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),

  // Enable Redux DevTools in the development environment.
  // This provides a debugging interface to track state changes and actions.
  devTools: true,
});

// Set up listeners for the store dispatch.
// Enables features like auto-refetching when the browser regains focus or reconnects to the network.
setupListeners(store.dispatch);

// Export the configured Redux store for use in the application.
export default store;
