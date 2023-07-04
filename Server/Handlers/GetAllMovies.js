
require("dotenv").config();
const { API_KEY } = process.env;


const GetAllMovies = async (request, response) => {


    const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&watch_region=canada&with_watch_providers=netflix';
    const options = {
        method: 'GET',
        headers: {
        accept: 'application/json',
        Authorization: `Bearer ${API_KEY}`
        }
    };
    
    fetch(url, options)
        .then(res => res.json())
        .then(json => {
            if (json.results && json.results.length  > 0) {
                const movies = json.results;
                const randomIndex = Math.floor(Math.random() * movies.length);
                const randomMovie = movies[randomIndex];
                response.status(200).json({ status: 200, data: randomMovie})
                } else {
                response.status(500);
                }
        })
        .catch(err => console.error('error:' + err));
};


module.exports = { GetAllMovies }