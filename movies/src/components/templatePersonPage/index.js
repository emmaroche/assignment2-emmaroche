import React from "react";
import Grid from "@mui/material/Grid";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { getPersonImages } from "../../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from '../spinner'
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import CastHeader from "../headerCast";

const root = {
  display: "flex",
  justifyContent: "left",
  flexWrap: "wrap",
  listStyle: "none",
  padding: 1.5,
  
};

const TemplatePersonPage = ({ person }) => {
console.log(person.id)
  const { data , error, isLoading, isError } = useQuery(
    ["images", { id: person.id }],
    getPersonImages
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }
  const images = data.profiles

  return (
    <>

<div>&nbsp;</div>
    <CastHeader images={images} />

      <Grid container spacing={5} sx={{ padding: "15px" }}>
        <Grid item xs={12}>
          <div sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
          }}>

<div>&nbsp;</div>
<Typography variant="h2" component="h2">
{person.name} 
      </Typography>

<Paper 
        component="ul" 
        sx={{...root}}
      >
    
      <Typography variant="h4" component="h4">
        Biography
      </Typography>
      <div>&nbsp;</div>
      <div>&nbsp;</div>
      <Grid item xs={12}>
      <Typography variant="h6" component="p">
        {person.biography}    
      </Typography>
      </Grid>
      <div>&nbsp;</div>
      
      <Grid item xs={8}>
      <div>&nbsp;</div>
      <ImageList sx={{  height: 450 }} cols={3} >
             
                {images.map((image) => (
                    <ImageListItem key={image.file_path} cols={1}>
                    <img
                        src={`https://image.tmdb.org/t/p/w500/${image.file_path}`}
                        alt={image.file_path}
                    />
                    </ImageListItem>
                ))}
            </ImageList>

            </Grid>

          </Paper>

          </div>
         
        </Grid>
      
      </Grid>

    </>
  );
};

export default TemplatePersonPage;