import React,{ useState} from "react";
import Movie from "../movieCard";
import Grid from "@mui/material/Grid";
import ReactPaginate from "react-paginate";


const MovieList = ( {movies, action }) => {
  const [pageNumber, setPageNumber] = useState(0);
  const moviesPerPage = 7;
  const pagesVisited = pageNumber*moviesPerPage;
  const movieCards = movies.slice(pagesVisited, pagesVisited + moviesPerPage)
  .map((m) => {
    return (
      <Grid key={movies.id} item xs={12} sm={6} md={6} lg={4} xl={3}>
          <Movie key={m.id} movie={m} action={action} />
      </Grid>
    );
    });

  const pageCount = Math.ceil(movies.length / moviesPerPage);
  const changePage = ({selected}) => {
    setPageNumber(selected);
  }

  return (
    <>
      {movieCards}

        <ReactPaginate 
        previousLabel={"← Previous"}
        nextLabel={"Next →"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName="paginationBttns"
        previousLinkClassName="previousBttn"
        nextLinkClassName="nextBttn"
        pageClassName="pages"
      />
     
    </> 
        
 );
};

export default MovieList;