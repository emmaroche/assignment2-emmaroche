import React from "react";
import { useParams } from 'react-router-dom';
import SimilarDetails from "../components/similarDetails/";
import { getMovie } from '../api/movies-api'
import { useQuery } from "react-query";
import Spinner from '../components/spinner'


const SimilarPage = (props) => {
  const { id } = useParams();

  const { data: movie, error, isLoading, isError } = useQuery(
    ["movie", { id: id }],
    getMovie
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  return (
    <>
  

            <SimilarDetails movie={movie} />
         
     
    </>
  );
};

export default SimilarPage;