import express from "express";
import { getSearchHistory, searchMovie, searchPerson, searchTv } from "../controller/search.controller.js";

const router = express.Router();

router.get("/person/:query",searchPerson);
router.get("/movie/:query",searchMovie);
router .get("/tv/:query",searchTv);

router.get("/history",getSearchHistory);

export default router;