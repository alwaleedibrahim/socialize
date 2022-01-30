const express = require("express")
const cors = require("cors")
const router = require("../handlers/router")
const morgan = require("morgan")

const app = express()

app.use(express.urlencoded({ extended: true }));
app.use(cors())
app.use(router)
app.use(morgan("combined"))
module.exports = app