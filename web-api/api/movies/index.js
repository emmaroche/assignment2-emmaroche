import express from 'express';
import { movies, movieReviews, movieDetails } from './moviesData';
import uniqid from 'uniqid'
import movieModel from './movieModel';
import asyncHandler from 'express-async-handler';
import { getUpcomingMovie } from '../tmdb-api';
import { getNowPlayingMovies } from '../tmdb-api';
import { getTopMovie } from '../tmdb-api';
import { getSimilarMovie } from '../tmdb-api';
import { getRecomMovie } from '../tmdb-api';
import { getLatest } from '../tmdb-api';
import { getReleDates } from '../tmdb-api';
import { getCastMovie } from '../tmdb-api';
import { getPersonMovie } from '../tmdb-api';
import { getMovieReviews } from '../tmdb-api';

const router = express.Router(); 
router.get('/', asyncHandler(async (req, res) => {
    const movies = await movieModel.find();
    res.status(200).json(movies);
}));

// Get movie details
router.get('/:id', asyncHandler(async (req, res) => {
    const id = parseInt(req.params.id);
    const movie = await movieModel.findByMovieDBId(id);
    if (movie) {
        res.status(200).json(movie);
    } else {
        res.status(404).json({message: 'The resource you requested could not be found.', status_code: 404});
    }
}));

// Get movie reviews
// router.get('/:id/reviews', (req, res) => {
//     const id = parseInt(req.params.id);
//     // find reviews in list
//     if (movieReviews.id == id) {
//         res.status(200).json(movieReviews);
//     } else {
//         res.status(404).json({
//             message: 'The resource you requested could not be found.',
//             status_code: 404
//         });
//     }
// });

router.get('/:id/reviews', asyncHandler(async (req, res) => {
    const id = parseInt(req.params.id);
    const movie = await getMovieReviews(id);
    if (movie) {
        res.status(200).json(movie);
    } else {
        res.status(404).json({message: 'The resource you requested could not be found.', status_code: 404});
    }
}));

//Post a movie review
router.post('/:id/reviews', (req, res) => {
    const id = parseInt(req.params.id);

    if (movieReviews.id == id) {
        req.body.created_at = new Date();
        req.body.updated_at = new Date();
        req.body.id = uniqid();
        movieReviews.results.push(req.body); //push the new review onto the list
        res.status(201).json(req.body);
    } else {
        res.status(404).json({
            message: 'The resource you requested could not be found.',
            status_code: 404
        });
    }
});



router.get('/tmdb/upcoming', asyncHandler( async(req, res) => {
    const upcomingMovies = await getUpcomingMovie();
    res.status(200).json(upcomingMovies);
  }));

router.get('/tmdb/now_playing', asyncHandler( async(req, res) => {
    const nowPlaying = await getNowPlayingMovies();
    res.status(200).json(nowPlaying);
  }));

  router.get('/tmdb/top_rated', asyncHandler( async(req, res) => {
    const topRated = await getTopMovie();
    res.status(200).json(topRated);
  }));

  router.get('/tmdb/latest', asyncHandler( async(req, res) => {
    const movieLatest = await getLatest();
    res.status(200).json(movieLatest);
  }));

  router.get('/:id/similar', asyncHandler(async (req, res) => {
    const id = parseInt(req.params.id);
    const movie = await getSimilarMovie(id);
    if (movie) {
        res.status(200).json(movie);
    } else {
        res.status(404).json({message: 'The resource you requested could not be found.', status_code: 404});
    }
}));

router.get('/:id/recommendations', asyncHandler(async (req, res) => {
    const id = parseInt(req.params.id);
    const movie = await getRecomMovie(id);
    if (movie) {
        res.status(200).json(movie);
    } else {
        res.status(404).json({message: 'The resource you requested could not be found.', status_code: 404});
    }
}));


router.get('/:id/credits', asyncHandler(async (req, res) => {
    const id = parseInt(req.params.id);
    const movie = await getCastMovie(id);
    if (movie) {
        res.status(200).json(movie);
    } else {
        res.status(404).json({message: 'The resource you requested could not be found.', status_code: 404});
    }
}));

router.get('/:id/person', asyncHandler(async (req, res) => {
    const id = parseInt(req.params.id);
    const movie = await getPersonMovie(id);
    if (movie) {
        res.status(200).json(movie);
    } else {
        res.status(404).json({message: 'The resource you requested could not be found.', status_code: 404});
    }
}));

router.get('/:id/release_dates', asyncHandler(async (req, res) => {
    const id = parseInt(req.params.id);
    const movie = await getReleDates(id);
    if (movie) {
        res.status(200).json(movie);
    } else {
        res.status(404).json({message: 'The resource you requested could not be found.', status_code: 404});
    }
}));



export default router;