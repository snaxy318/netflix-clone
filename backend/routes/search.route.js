import express from "express";
import { searchMovie, searchPerson } from "../controller/search.controller";

const router = express.Router();

router.get("/person/:query",searchPerson);
router.get("/movie/:query",searchMovie);

export default router;