const {GetAllMovies} = require("./Handlers/GetAllMovies")
const {GetAllTv} = require("./Handlers/GetAllTv")
const {GetGenres} = require("./Handlers/GetGenres")
const {SignUp} = require("./Handlers/SignUp")
const {SignIn} = require("./Handlers/SignIn")
const {addMovieToWatchLater} = require("./Handlers/AddMovieToWatchLater")
const {addTvShowToWatchLater} = require("./Handlers/AddTvShowToWatchLater")
const {getWatchLater} = require("./Handlers/GetWatchLater")
const {addRating} = require("./Handlers/AddRating")
const {getUserRating} = require("./Handlers/GetUserRating")
const {deleteMovieFromWatchLater} = require("./Handlers/DeleteMovieFromWatchLater")



const express = require("express");

const PORT = 8000;

const app = express();

app.use(function (_req, res, next) {
    res.header("Access-Control-Allow-Origin", process.env.ALLOWED_ORIGIN);
    res.header(
        "Access-Control-Allow-Headers",
        "Content-Type, Accept, Authorization",
    );
    res.header("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");
    next();
    })
// Server will be expecting json-formatted data.
app.use(express.json());

// Requests for static files will look in public.
app.use(express.static("public"));


// ENDPOINTS HERE
app.get("/movies/:genreId?", GetAllMovies)
app.get("/tv/:genreId?", GetAllTv)
app.get("/genres", GetGenres)
app.get("/watchlater/:userId", getWatchLater)
app.get("/getUserRating/:userId/:movieId", getUserRating);
app.post("/signup", SignUp)
app.post("/signin", SignIn)
app.patch("/add-movie-to-watchlater/:userId", addMovieToWatchLater)
app.patch("/add-tvshow-to-watchlater/:userId", addTvShowToWatchLater)
app.patch("/add-rating/:userId/:movieId", addRating)
app.patch("/watchlater/:userId/delete", deleteMovieFromWatchLater)



app.get("*", (request, response) => {
    return response
    .status(404)
    .json({ status: 404, message: "No endpoint found." });
});

app.listen(PORT, () => console.info(`Listening on port ${PORT}`));