import express from "express";
import { searchMovie, searchPerson, searchTv } from "../controller/search.controller";

const router = express.Router();

router.get("/person/:query",searchPerson);
router.get("/movie/:query",searchMovie);
router .get("/tv/:query",searchTv);

export default router;