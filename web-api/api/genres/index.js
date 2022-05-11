import express from 'express';
import { genres } from './genresData';
import Genre from './genresModel';
import asyncHandler from 'express-async-handler';
import { getGenres } from '../tmdb-api';

const router = express.Router(); 
router.get('/', async (req, res) => {
    const genres = await Genre.find();
    res.status(200).json(genres);
});

// router.get('/tmdb/genres', asyncHandler( async(req, res) => {
//     const gettheGenres = await getGenres();
//     res.status(200).json(gettheGenres);
//   }));

  router.get('/tmdb/genres', asyncHandler( async(req, res) => {
    const upcomingMovies = await getGenres();
    res.status(200).json(upcomingMovies);
  }));

export default router;


