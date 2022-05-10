import React from "react";
import { useParams } from 'react-router-dom';
import PersonDetails from "../components/personDetails";
import TemplatePersonPage from "../components/templatePersonPage";
import { getPersonMovie } from '../api/movies-api'
import { useQuery } from "react-query";
import Spinner from '../components/spinner'

const PersonPage = (props) => {

  const { id } = useParams();

  const { data: person, error, isLoading, isError } = useQuery(
    ["person", { id: id }],
    getPersonMovie
    
  );

  console.log(person)

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  return (
    <>
      {person ? (
        <>
          <TemplatePersonPage person={person}>
            <PersonDetails person={person} />
          </TemplatePersonPage>
        </>
      ) : (
        <p>Waiting for people details</p>
      )}
    </>
  );
};


export default PersonPage;