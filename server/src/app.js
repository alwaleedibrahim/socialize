const express = require("express")
const cors = require("cors")
const router = require("../handlers/router")
require("../models/dbconnection/dbconnection")

const app = express()

app.use(express.urlencoded({ extended: true }));
app.use(cors())
app.use(express.json())
app.use(router)
module.exports = app