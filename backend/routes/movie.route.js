import express, { Router } from "express";
import { getTrendingMovie,getMovieTrailer } from "../controller/movie.controller.js";

const router = express.Router();

router.get('/trending',getTrendingMovie);
router.get('/:id/trailer',getMovieTrailer);
router.get('/:id/details',getMovieDetaile);

export default router;