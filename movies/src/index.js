import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from './components/siteHeader'
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import SimilarPage from "./pages/similiarMoviesPage";
import RatedMoviesPage from "./pages/TopRatedMoviePage";
import PersonPage from "./pages/moviePersonPage";
import FavoriteMoviesPage from "./pages/favoriteMoviesPage";
import UpcomingMoviesPage from "./pages/UpcomingMoviesPage";
import NowPlayingMoviesPage from "./pages/NowPlayingMoviesPage";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools'
import MoviesContextProvider from "./contexts/moviesContext";

import LoginPage from "./loginPage";
import AuthProvider from "./authContext";
import AuthHeader from "./authHeader";
import ProtectedRoutes from "./protectedRoutes";
import SignUpPage from "./signUpPage";
// import MovieProvider from "./moviesContext";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000, 
      refetchOnWindowFocus: false
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
      <AuthProvider>
      <SiteHeader />
        <AuthHeader />
     
        <MoviesContextProvider>
        <Routes>

        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={ <LoginPage /> } />
        <Route path="/signup" element={ <SignUpPage /> } />
        <Route path="*" element={ <Navigate to="/" /> } />

        <Route element={<ProtectedRoutes />}>
        <Route path="/reviews/:id" element={ <MovieReviewPage /> } />
        <Route path="/movies/favorites" element={<FavoriteMoviesPage />} />
        <Route path="/movies/upcoming" element={<UpcomingMoviesPage />} />
        <Route path="/movie/now_playing" element={<NowPlayingMoviesPage />} /> 
        <Route path="/movie/top_rated" element={<RatedMoviesPage />} />
        <Route path="/movies/:id" element={<MoviePage />} />
        <Route path="/similar/:id" element={<SimilarPage />} />
        <Route path="/person/:id" element={<PersonPage />} />
        </Route>
   
  
        </Routes>
        </MoviesContextProvider>
        </AuthProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
