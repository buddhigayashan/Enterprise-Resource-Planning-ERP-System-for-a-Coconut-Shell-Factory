// Import `fetchBaseQuery` and `createApi` from Redux Toolkit Query.
// `fetchBaseQuery` is a lightweight wrapper around the `fetch` API for making HTTP requests.
// `createApi` is used to define the API slice and manage API state.
import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";

// Import the base URL constant, which holds the base API endpoint for all requests.
import { BASE_URL } from "../constants";

// Create a base query function using `fetchBaseQuery`.
// This serves as the default configuration for all API calls made through this API slice.
// `baseUrl` sets the root URL for all API requests.
const baseQuery = fetchBaseQuery({ baseUrl: BASE_URL });

// Define and export the API slice using `createApi`.
// This slice contains all the API endpoints, their configurations, and caching mechanisms.
export const apiSlice = createApi({
  // Specify the base query function for making API requests.
  baseQuery,

  // Define the tags used for caching and invalidation.
  // Tags represent specific data types (e.g., "Product", "Order") and help manage cache updates.
  tagTypes: ["Product", "Order", "User", "Category", "Reviews"],

  // `endpoints` is a function that will define the API endpoints for the application.
  // This example starts with an empty object, but additional endpoints are injected later.
  endpoints: () => ({}),
});
// Explanation of each component


// fetchBaseQuery:

// Acts as a wrapper for the native fetch API.
// Simplifies HTTP requests by automatically handling common configurations like base URL, headers, and authentication.
// Ensures all API requests are consistent and easy to manage.
// baseUrl: BASE_URL: Sets the root URL for API requests, so you don't have to repeat the base URL in every endpoint.


// createApi:

// The main function for defining and managing an API slice.
// Automatically generates hooks for interacting with the API endpoints (e.g., useGetProductsQuery).
// Handles API caching, state management, and request deduplication automatically.



// baseQuery:

// Specifies the default behavior for all API requests in this slice (e.g., where to send the requests, common headers).
// Reusability: By defining baseQuery, you don’t have to redefine configurations like the base URL in every endpoint.



// tagTypes:

// Represents the types of data being cached (e.g., "Product", "Order").
// Helps manage cache invalidation and re-fetching.
// Ensures data stays consistent by automatically updating dependent queries when a tag is invalidated.



// endpoints:

// Defines the individual API operations (e.g., fetch, create, update, delete).
// Starts empty here (endpoints: () => ({})) but is designed to be extended by injecting specific endpoints later.




// Why use this structure?




// Centralized API Management:

// Keeps all API-related logic in one place.
// Reduces duplication by using a shared base query and configuration.



// Improved Code Organization:

// Separates concerns by clearly defining API interactions in the API slice.
// Makes it easier to maintain and scale as the application grows.



// Built-in Features:

// Automates caching, invalidation, and request deduplication.
// Provides ready-to-use hooks for interacting with the API, saving time and effort.

 
//  Scalability:

// Can be easily extended with new endpoints or configurations.
// Supports tagging to ensure data is kept fresh without unnecessary API calls.