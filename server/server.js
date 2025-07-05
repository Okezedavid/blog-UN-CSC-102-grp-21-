const express = require("express");
const cors = require("cors");
const OpenAi = require("openai");

const app = express()
const PORT = 5000


app.use(cors({
    origin: 'http://localhost:3000'
}))
