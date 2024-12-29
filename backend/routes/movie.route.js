import express, { Router } from "express";
import { getTrendingMovie,getMovieTrailer, getMovieDetailes, getSimilarMovies } from "../controller/movie.controller.js";

const router = express.Router();

router.get('/trending',getTrendingMovie);
router.get('/:id/trailer',getMovieTrailer);
router.get('/:id/details',getMovieDetailes);
router.get('/:id/similar',getSimilarMovies);
router.get('/:category',getSimilarCategoryMovies);

export default router;