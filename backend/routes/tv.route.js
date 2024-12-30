import express from "express";
import { getTrendingTvShow } from "../controller/tv.controller.js";

const router = express.Router();

router.get('/trending',getTrendingTvShow);

export default router;