import { User } from "../model/user.model";
import { fetchFromTMDB } from "../services/tmdb.service";

export async function searchPerson (req,res) {
    const {query} = req.params;
    try {
        const response = await fetchFromTMDB(`https://api.themoviedb.org/3/search/person?query=${query}&include_adult=false&language=en-US&page=1`);

        if(response.result.length === 0) {
            return res.status(404).send(null);
        }

        await User.findByIdUpdate(req.user._id,{
            $push:{
                searchHistory:{
                    id:response.results[0].id,
                    image:response.result[0].profile_path,
                    title:response.results[0].name,
                    searchType:"person",
                    createdAt: new Date(),
                }
            }
        })

        res.status(200).json({success:false,content:response.results})
    } catch (error) {
        console.log("Error in searchPerson controller: ",error.message);
        res.status(500).json({success:false,message:"Internal server error"});
    }
}