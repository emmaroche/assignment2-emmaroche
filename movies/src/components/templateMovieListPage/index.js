import React, { useState } from "react";
import Header from "../headerMovieList";
import FilterCard from "../filterMoviesCard";
import FilterRatingCard from "../filtersRatingCard";
import MovieList from "../movieList";
import Grid from "@mui/material/Grid";


function MovieListPageTemplate({ movies, title, action, genres }) {
  const [nameFilter, setNameFilter] = useState("");
  const [genreFilter, setGenreFilter] = useState("0");
  const [ratingFilter, setRatingFilter] = useState("");
  
  const genreId = Number(genreFilter);


  let displayedMovies = movies
    .filter((m) => {
      return m.title.toLowerCase().search(nameFilter.toLowerCase()) !== -1;
    })
    .filter((m) => {
      return genreId > 0 ? m.genre_ids.includes(genreId) : true;
    })
    .filter((m) => {
    return m.vote_average >= ratingFilter
  })

  const handleChange = (type, value) => {
    if (type === "name") setNameFilter(value);
    else setRatingFilter(value); 
   
  };

  const handleGenreChange = (type, value) => {
    if (type === "name") setNameFilter(value);
    else setGenreFilter(value);
   
  };

  return (
    <Grid container sx={{ padding: '20px' }} >
      <Grid item xs={12}>
        <Header title={title} />
      </Grid>
      <Grid item container spacing={5}>
        <Grid key="find" item xs={12} sm={6} md={6} lg={4} xl={3} >
          <FilterCard
            onUserInput={handleGenreChange}
            titleFilter={nameFilter}
            genreFilter={genreFilter}     
            ratingFilter={ratingFilter} 
          />

<div>&nbsp;</div>

          <FilterRatingCard
            onUserInput={handleChange}
            titleFilter={nameFilter}
            genreFilter={genreFilter}     
            ratingFilter={ratingFilter} 
          />

        </Grid>
        <MovieList action={action} movies={displayedMovies}></MovieList>
  
      </Grid>
    </Grid>
  );
}
export default MovieListPageTemplate;