import React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { getRecomMovie } from "../../api/movies-api";
import { useQuery } from "react-query";
import Spinner from '../spinner'
import ImageListItemBar from "@mui/material/ImageListItemBar";
import { Paper } from "@mui/material";

const RecomDetails = ({ movie }) => {

  const { data , error, isLoading, isError } = useQuery(
    ["recommendations", { id: movie.id }],
    getRecomMovie
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }
  const recommendations = data.results

  return (
    <>
         <Paper>
            <ImageList sx={{ height: 680 }} cols={5}> 
                
                {recommendations.map((results) => (
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
            </Paper> 
    </>
  );
};

export default RecomDetails;