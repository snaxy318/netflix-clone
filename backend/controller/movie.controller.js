import { fetchFromTMDB } from "../services/tmdb.service.js";

export async function getTrendingMovie(req,res){
    try {
        const data = await fetchFromTMDB("https://api.themoviedb.org/3/movie/popular?language=en-US&page=1");
        const randomMovie = data.results[Math.floor(Math.random()*data.results.length)];

        res.json({success:true,content:randomMovie});
    } catch(error) {
        res.status(500).json({success:false,message:error.message});
    }
}

export async function getMovieTrailer(req,res) {
    const {id} = req.params;
    try {
        const data = await fetchFromTMDB(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`);
        res.json({success:true,trailers:data.results});
    } catch (error) {
        if(error.message.include("404")){
            res.status(404).json({success:false,message:"Movie trailer not found"});
        }
        res.status(500).json({success:false,message:"Internal server error"});
    }
}

export async function getMovieDetailes(req,res) {
    const {id} = req.params;
    try {
        const data = await fetchFromTMDB(`https://api.themoviedb.org/3/movie/${id}?language=en-US`);
        res.status(200).json({success:true,content:data});
    } catch (error) {
        if(error.message.include("404")) {
            res.status(404).json({success:false,message:"Details not found"});
        }
        res.status(500).json({success:false,message:"Internal server error"});
    }
}

export async function getSimilarMovies(req,res) {
    const {id} = req.params;
    try {
        const data = await fetchFromTMDB(`https://api.themoviedb.org/3/movie/${id}/similar?language=en-US&page=1`);
        res.status(200).json({success:true,similar:data.results});
    } catch (error) {
        if(error.message.include("404")){
            res.status(404).json({success:false,message:"Data not found"});
        }
        res.status(500).json({success:false,message:"Internal Server error"});
    }
}

export async function getSimilarCategoryMovies(req,res) {
    const {category} = req.params;
    try {
        const data = await fetchFromTMDB(`https://api.themoviedb.org/3/movie/${category}?language=en-US&page=1`);
        res.status(200).json({success:true, similarCat:data.results});
    } catch (error) {
        if(error.message.include("404")){
            res.status(404).json({success:false,message:"Data not found"});
        }
        res.status(500).json({success:false,message:"Internal Server error"});
    }
}