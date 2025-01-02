import express from "express";
import { searchPerson } from "../controller/search.controller";

const router = express.Router();

router.get("/person/:query",searchPerson);

export default router;