import express from "express";
import { getTrendingTvShow, getTvShowTrailer } from "../controller/tv.controller.js";

const router = express.Router();

router.get('/trending',getTrendingTvShow);
router.get('/:id/trailer',getTvShowTrailer);

export default router;