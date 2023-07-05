const {GetAllMovies} = require("./Handlers/GetAllMovies")
const {GetGenres} = require("./Handlers/GetGenres")
const {SignUp} = require("./Handlers/SignUp")
const {SignIn} = require("./Handlers/SignIn")

const express = require("express");

const PORT = 8000;

const app = express();

// Server will be expecting json-formatted data.
app.use(express.json());

// Requests for static files will look in public.
app.use(express.static("public"));


// ENDPOINTS HERE
app.get("/movies", GetAllMovies)
app.get("/genres", GetGenres)
app.post("/signup", SignUp)
app.post("/signin", SignIn)

app.get("*", (request, response) => {
    return response
    .status(404)
    .json({ status: 404, message: "No endpoint found." });
});

app.listen(PORT, () => console.info(`Listening on port ${PORT}`));