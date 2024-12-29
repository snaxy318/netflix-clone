import express, { Router } from "express";
import { getTrendingMovie } from "../controller/movie.controller.js";

const router = express.Router();

router.get('/trending',getTrendingMovie);
router.get('/:id/trailer',getMovieTrailer);

export default router;