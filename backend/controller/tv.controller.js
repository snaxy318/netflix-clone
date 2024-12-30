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

export async function getTvShowTrailer(req,res) {
    const {id} = req.params;
    try {
        const data = await fetchFromTMDB(`https://api.themoviedb.org/3/tv/${id}/videos`);
        res.status(200).json({success:true,trailer:data.results});
    } catch (error) {
        if(error.message.include(404)){
            res.status(400).json({success:false,message:"Not found"});
        }
        res.status(500).json({success:false,message:"Internal server error"});
    }
}

export async function getTvShowDetails(req,res) {
    const {id} = req.params;
    try {
        const data = await fetchFromTMDB(`https://api.themoviedb.org/3/tv/${id}?language=en-US)`);
        res.status(200).json({success:true,details:data});
    } catch (error) {
        if(error.message.include("404")) {
            res.status(404).json({success:false,message:"Details not found"});
        }
        res.status(500).json({success:false,message:"Internal server error"});
    }
}

export async function getSimilarTvShows(req,res) {
    const {id} = req.params;
    try {
        const data = await fetchFromTMDB(`https://api.themoviedb.org/3/tv/${id}/similar?language=en-US&page=1`);
        res.status(200).json({success:true,similar:data.results});
    } catch (error) {
        if(error.message.include("404")){
            res.status(404).json({success:false,message:"Data not found"});
        }
        res.status(500).json({success:false,message:"Internal Server error"});
    }
}