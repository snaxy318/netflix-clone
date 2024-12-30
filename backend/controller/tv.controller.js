import { fetchFromTMDB } from "../services/tmdb.service.js";

export async function getTrendingTvShow(req,res) {
    try {
        const data = await fetchFromTMDB('https://api.themoviedb.org/3/trending/tv/day?language=en-US');
        const randomTvShow = data.results[Math.floor(Math.random()*data.results.length)];

        res.json({success:true,content:randomTvShow});
    } catch (error) {
        res.status(500).json({success:false,message:"Internal server error"});
    }
}