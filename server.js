const express = require("express");
const cors = require("cors");
require("dotenv").config();

const PORT = process.env.PORT || 8080;

const app = express();

app.use(cors());

app.get("/:city", (req, res) => {
    
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${req.params.city}&appid=${process.env.API_KEY}`;

    fetch(URL)
        .then(response => response.json())
        .then(result => res.status(200).json(result))
        .catch(err => res.status(404).json({err}));

});

app.listen(PORT);