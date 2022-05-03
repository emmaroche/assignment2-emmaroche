import React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { getSimilarMovie } from "../../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from '../spinner'
import ImageListItemBar from "@mui/material/ImageListItemBar";
import SimilarHeader from "../headerSimilar";
import Grid from "@mui/material/Grid";
import { Paper } from "@mui/material";

const SimilarDetails = ({ movie }) => {

  const { data , error, isLoading, isError } = useQuery(
    ["similar", { id: movie.id }],
    getSimilarMovie
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }
  const similar = data.results

  return (
    <>

  <div>&nbsp;</div>

  <SimilarHeader movie={movie} />

      <div>&nbsp;</div>
      <Grid container sx={{ padding: '20px' }} >
     
     <Grid item container spacing={5}>
       <Grid key="find" item xs={12} md={12} >
         <Paper>
            <ImageList sx={{ width: 'auto', height: 'auto' }} cols={5}> 
                
                {similar.map((results) => (
                    <ImageListItem key={results.poster_path
                    } cols={1}>
                    <img
                        src={`https://image.tmdb.org/t/p/w500/${results.poster_path}`}
                        alt={results.overview}
                    />

<ImageListItemBar
            title={results.title} />
            
                    </ImageListItem>

                ))}
            </ImageList>
           </Paper> </Grid> </Grid> </Grid>
    </>
  );
};

export default SimilarDetails;