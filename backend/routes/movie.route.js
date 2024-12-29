import express, { Router } from "express";
import { getTrendingMovie,getMovieTrailer, getMovieDetailes } from "../controller/movie.controller.js";

const router = express.Router();

router.get('/trending',getTrendingMovie);
router.get('/:id/trailer',getMovieTrailer);
router.get('/:id/details',getMovieDetailes);

export default router;