import express from "express";
import { getSimilarCategoryTvShows, getSimilarTvShows, getTrendingTvShow, getTvShowDetails, getTvShowTrailer } from "../controller/tv.controller.js";

const router = express.Router();

router.get('/trending',getTrendingTvShow);
router.get('/:id/trailer',getTvShowTrailer);
router.get('/:id/details',getTvShowDetails);
router.get('/:id/similar',getSimilarTvShows);
router.get('/:category',getSimilarCategoryTvShows);

export default router;