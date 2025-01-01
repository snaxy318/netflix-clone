import express from "express";

const router = express.Router();

router.get("/person/:query");

export default router;