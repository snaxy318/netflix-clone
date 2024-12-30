import express from "express";
import { getSimilarTvShows, getTrendingTvShow, getTvShowDetails, getTvShowTrailer } from "../controller/tv.controller.js";

const router = express.Router();

router.get('/trending',getTrendingTvShow);
router.get('/:id/trailer',getTvShowTrailer);
router.get('/:id/details',getTvShowDetails);
router.get('/:id/similar',getSimilarTvShows);

export default router;