import express from "express";
import { getTrendingTvShow, getTvShowDetails, getTvShowTrailer } from "../controller/tv.controller.js";

const router = express.Router();

router.get('/trending',getTrendingTvShow);
router.get('/:id/trailer',getTvShowTrailer);
router.get('/:id/details',getTvShowDetails);

export default router;